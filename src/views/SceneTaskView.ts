import { ProgressBar } from "../component_classes/progress_bar";
import { user } from "../main";
import { MissionService } from "../services/MissionService";
import {delay, getDateFromStamp} from "../utils/stringutil";
import { task_style } from "../utils/style_manager";
import {View} from "./pub_view";
import {MultiSelectionComponent} from "../component_classes/multi_selection";
import {
    taskCourseBasicInfo,
    taskCourseElement,
    taskCourseEleright,
    taskCourseTitle,
    taskFooter,
    taskInfoCircle,
    taskSelection,
    taskSelectionBox,
    taskTime,
    taskWindow,
    taskWindowChoice,
    taskWindowChoices,
    taskWindowLeftBar,
    taskWindowNotSelected,
    taskWindowRightBar,
    taskWindowSelected,
    taskWindowTitle
} from "../css/task_view.css";
import {TaskCourse} from "../pojo/course";
import {ordiBtn} from "../css/index.css";
import {CourseHomeworkController} from "../controller/CourseHomeworkController";
import {FinishCourseController} from "../controller/FinishCourseController";
import {getUrlInfo} from "@/utils/request";
import {ewt_task_info_bg} from "@/utils/resources";
import {Paper} from "@/pojo/fih_objects";
import { dict } from "../type";

export class SceneTaskView extends View {
    loading: boolean;
    prog?:ProgressBar

    mission!: MissionService
    fihHomework!:CourseHomeworkController
    ficCourse!:FinishCourseController

    daytask:{[key:string]:{
            dayid:string[],
            timestamp:number
        }}
    subjtask:{[key:string]:number}
    //懒得定义类型了，先这样写吧
    dayComp: {[key:string]:number} = {}

    sceneId: string;

    constructor() {
        super();
        this.loading = false;
        this.prog = undefined

        this.daytask={}
        this.subjtask={}
        this.sceneId = ""
    }


    async build(sceneid:string) {
        this.sceneId = sceneid
        this.mission = await new MissionService(user).buildWithSceneId(sceneid)
        this.fihHomework = new CourseHomeworkController().buildWithoutLessonId()
        this.ficCourse = new FinishCourseController()
        return this
    }

    async loadData() {
        let dt = await this.mission.getSceneMission(this.sceneId,0)
        for(let c of dt) {
            this.daytask[getDateFromStamp(c["day"])]={
                dayid:c["dayid"],
                timestamp:c["day"]
            }

        }
        let st = await this.mission.getSceneMission(this.sceneId,1)
        for(let c of st) {
            this.subjtask[c["chinese"].toString()]=c["subjectId"]
        }
        //数据加载
    }
    async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        let data = await this.mission.getMissionInfo()
        let prog = await this.mission.getMissionProgress()

        await this.loadData() //载入数据

        let root = $(`<div></div>`);
        root.append(this.HeadComponent(data.homeworkTitle,data.startDate,data.endDate,prog))

        let selection_comp = new MultiSelectionComponent({
            "日期": {
                container:await this.getDayTaskComp(),
                clickable: () => {
                    return true
                },
                onclick:()=>{
                    let selectedText = $(`.${taskWindowSelected}`)
                    selectedText.click()
                    /**
                     * 作用：重新加载数据
                     * 避免在一个界面勾选对应任务然后返回至另一个界面的时候对应任务勾选状态没有同步加载
                     */
                }
            },
            "科目": {
                container:await this.getSubjectTaskComp(),
                clickable: () => {
                    return true
                },
                onclick:function (){
                    let selectedText = $(`.${taskWindowSelected}`)
                    selectedText.click()
                }
            }
        },{
            width: "100%",
            maxHeight: "400px"
        })

        let foot = $(`<div class="${taskFooter}"></div>`)

        let courseBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">刷课</div>`)
        let hwkBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">填选择题</div>`)
        let fresh = $(`<div class="${ordiBtn}" style="margin-right: 0;">(当天)全(不)选...</div>`)
        let uns = $(`<div class="${ordiBtn}" id="unselect" style="margin-right: 5px;margin-left: auto">反选所有已选(数量:${this.mission.selection_arr.length})...</div>`)

        hwkBtn.on('click',async ()=>{
            //@ts-ignore
            if(super.lock) return;
            super.setStatus(true)
            hwkBtn.text("请等待...")
            await this.finishHomework(hwkBtn)
            super.setStatus(false) //增加控件锁
        })

        courseBtn.on('click',async ()=>{
                        //@ts-ignore
            if(super.lock) return;
            super.setStatus(true)
            courseBtn.text("请等待...")
            await this.finishCourse(courseBtn)
            super.setStatus(false) //增加控件锁
        })

        fresh.on('click',()=>{
                        //@ts-ignore
            if(super.lock) return;
            let c = $(`.course-selection`)
            let allcheck=[]
            for(let i of c) {
                if($(i).prop('checked')) allcheck.push(1)
            }
            if(allcheck.length==c.length) //全部被选中
                for(let i of c)
                    i.click()
            else //没有全部被选中
                for(let i of c) {
                    if(!$(i).prop('checked')) //未被选中
                        i.click()
                }

        })

        uns.on('click',()=>{
            this.mission.emptySelection()

            let selected = $(`.${taskWindowSelected}`)
            if(selected.length!=0)
                selected.click()
            uns.text(`反选所有已选(数量:${this.mission.selection_arr.length})...`)
        })

        let warn = $(`<div class="" style="position: relative;font-size: 10px;border: 1px dashed gray;padding: 5px;border-radius: 5px;margin-top: 5px;">注意:操作(刷课,填选择题)完后任务不会自动反选,请<span style="color:red">手动反选</span>,以避免出现对某课程重复操作的情况.</div>`)

        foot.append(courseBtn)
        foot.append(hwkBtn)
        foot.append(uns)
        foot.append(fresh)

        super.pushElement(foot)
        super.pushElement(selection_comp.getPage())
        root.append(selection_comp.getPage())
        root.append(warn)
        root.append(foot)

        return root
    }

    private async finishCourse(btn:JQuery<HTMLElement>) {
        btn.css("background-color","rgb(0,0,0,0)")
        btn.css("color","unset")
        let course = this.mission.getSelections()
        this.ficCourse.emptyCourse()
        for(let i of course) {
            if(i.contentType == "课程讲") {
                this.ficCourse.addCourse(
                    i["info"]["courseid"],
                    i["info"]["lessonid"],
                    i["info"]["homeworkid"],
                    i["info"]["ratio"])
            }
        }
        let status = await this.ficCourse.FinishCourse()
        if(status["code"] != 200) {
            btn.text(`错误(${status["message"]})`)
            return
        }
        while(true) {
            let dat:dict = await this.ficCourse.GetTask()
            if((dat)["code"] == 200) {
                if(dat["data"]["errcode"]!=0) {
                    btn.text(`错误(${dat["data"]["errmessage"]})`)
                    break
                } else if(dat["data"]["all"] == dat["data"]["do"]) {
                    btn.text(`刷课完成!`)
                    break
                } else {
                    btn.text(`进度:${parseInt(String((<any>dat)["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`)
                }
            }
            await delay(100)
        }
        await delay(1000)
    }

    private async finishHomework(btn:JQuery<HTMLElement>) {
        btn.css("background-color","rgb(0,0,0,0)")
        btn.css("color","unset")
        let course = this.mission.getSelections()
        this.fihHomework.emptyHomework()

        for(let i of course) {
            if(i.contentType == "课程讲")
                await this.fihHomework.addHomework(i.homeworkid,parseInt(i.id))
            else if(i.contentType == "试卷" && i.curl!=undefined)
                await this.fihHomework.addExamPaper(i.curl)
        }

        let status = await this.fihHomework.FillOptionsAll()
        if(status["code"] != 200) {
            btn.text(`错误(${status["message"]})`)
            return
        }
        while (true) {
            let dat:dict = await this.fihHomework.GetTask()
            if((dat)["code"] == 200) {
                if(dat["data"]["errcode"]!=0) {
                    btn.text(`错误(${dat["data"]["errmessage"]})`)
                    break
                } else if(dat["data"]["all"] == dat["data"]["do"]) {
                    btn.text(`填写选择题完成!`)
                    break
                } else {
                    btn.text(`进度:${parseInt(String((<any>dat)["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`)
                }

            } else {
                btn.text(`出现错误(${dat["message"]})`)
                break
            }
            await delay(100)
        }
        await delay(1000)
    }


    private HeadComponent(title: string,timestamp_start:number,timestamp_end:number,prog:number) {
        let datestartstr = getDateFromStamp(timestamp_start.toString())
        let dateendstr = getDateFromStamp(timestamp_end.toString())
        this.prog = new ProgressBar(prog)

        let head = $(`<div class='${task_style.taskHeadComponent}'></div>`)

        let baseinfo = $(`<div class="${task_style.taskInfo}"></div>`)
        baseinfo.append($(`<div class='${task_style.taskTitle}'>${title}</div>`))
        baseinfo.append($(`<div class='${task_style.taskDate}'>${datestartstr}-${dateendstr}</div>`))
        let prog_comp = $(`<div class='${task_style.taskProgCC}'></div>`)
        prog_comp.append($(`<div class='${task_style.taskProgC}'>
                                <div class='${task_style.taskProgL}'>
                                    进度
                                </div>
                                <div class='${task_style.taskProgR}'>
                                    ${Math.round(this.prog.value * 100)}%
                                </div>
                                </div>`
        ))
        prog_comp.append(this.prog.show())
        baseinfo.append(prog_comp)

        let bg_div = $(`<div class="${task_style.taskInfoBg}"></div>`)
        bg_div.append($(`<img class='${task_style.taskInfoBgImg}' src="${ewt_task_info_bg}"/>`))

        head.append(baseinfo)
        head.append(bg_div)
        this.prog.slideFromZero()
        return head
        
    }

    private async getDayTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`)

        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`)
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`)

        let choices = $(`<div class="${taskWindowChoices}"></div>`)
        for(let c in this.daytask)
            choices.append($(`<div class="${taskWindowChoice} ${taskWindowNotSelected} dayTask">${c}</div>`))
        left_bar.append($(`<div class="${taskWindowTitle}">日期</div>`))
        left_bar.append(choices)

        root.append(left_bar)
        root.append(right_bar)

        $(document).on("click",`.dayTask.${taskWindowChoice}`,async (e)=>{
            let element = $(e.target)
            this.changeMenuOptions(e)
            let timestamp = this.daytask[element.text()].timestamp
            let dayid = this.daytask[element.text()].dayid
            let data = await this.mission.getHomeworkDatedTask(dayid,
            timestamp)

            right_bar = $(`.${taskWindowRightBar}`)
            right_bar.empty()
            let s = this.getCourseComponent(data)
            for(let c of s) {
                right_bar.append(c)
            }
        })

        return root
    }

    private async getSubjectTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`)

        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`)
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`)
        let choices = $(`<div class="${taskWindowChoices}"></div>`)

        for(let c in this.subjtask)
            choices.append($(`<div class="subjTask ${taskWindowChoice} ${taskWindowNotSelected}">${c}</div>`))
        //增加choices的量

        left_bar.append($(`<div class="subjTask ${taskWindowTitle}">科目</div>`))
        left_bar.append(choices)
        root.append(left_bar)
        root.append(right_bar)

        $(document).on("click",`.subjTask.${taskWindowChoice}`,async (e)=>{
            let element = $(e.target)
            this.changeMenuOptions(e)
            let subjid = this.subjtask[element.text()]
            let data = await this.mission.getHomeworkSubjTask(subjid)

            right_bar = $(`.${taskWindowRightBar}`)
            right_bar.empty()
            let s = this.getCourseComponent(data)
            for(let c of s)
                right_bar.append(c)
        })
        return root
    }

    private changeMenuOptions(e:JQuery.ClickEvent) {
        let sele = $(`.${taskWindowSelected}`)
        sele.removeClass(`${taskWindowSelected}`)
        sele.addClass(`${taskWindowNotSelected}`)
        let nele = $(e.target)

        nele.addClass(`${taskWindowSelected}`)
        nele.removeClass(`${taskWindowNotSelected}`)
    }

    private getCourseComponent(courseinfo:Array<TaskCourse>) : Array<JQuery<HTMLElement>> {
        let res:Array<JQuery<HTMLElement>> = []
        let count = 0
        for(let c of courseinfo) {
            let r = $(`<div class="${taskCourseElement}"></div>`)

            let imgdiv = $(`<div><img src="${c.imgUrl}" style="height:45px"/></div>`)
            let right = $(`<div class="${taskCourseEleright}"></div>`)
            let info = $(`<div style="flex:1"></div>`)

            let title = $(`<div class="${taskCourseTitle}">${c.title}</div>`)
            let basicinfo = $(`<div class="${taskCourseBasicInfo}"></div>`)

            let course_subject = $(`<div class="${taskInfoCircle}" style="margin-left:5px">${c.subjectName}</div>`)
            let course_id = $(`<div class="${taskInfoCircle}" style="margin-left:5px">id:${c.contentId}</div>`)
            let course_type = $(`<div class="${taskInfoCircle}">${c.contentTypeName}</div>`)
            
            let right_selection = $(`<div class="${taskSelectionBox}"></div>`)
            right_selection.append($(`<div class="${taskTime}">${c.duration}秒</div>`))
            let inputbox = $(`<div class="${taskSelection}"></div>`)

            let ipt = $(`<input type="checkbox" class="course-selection"/>`)

            if(this.mission.existence(c.contentId,c.contentTypeName))
                ipt.prop("checked",true)

            ipt.on("click",()=>{
                if(!this.mission.existence(c.contentId,c.contentTypeName)) {
                    let dict:any = {
                        contentType:c.contentTypeName,
                        id:c.contentId
                    }
                    if(dict.contentType=="试卷") dict["curl"] = c.contentUrl
                    else if(dict.contentType=="课程讲") {
                        dict["info"]={}
                        dict["info"]["ratio"] = c.ratio
                        dict["info"]["homeworkid"] = c.homeworkId
                        dict["info"]["lessonid"] = c.contentId
                        let url = getUrlInfo(c.contentUrl)
                        dict["info"]["courseid"] = url["courseId"]
                    }
                    this.mission.addSelection(dict)
                } else 
                    this.mission.rmSelection(c.contentTypeName,c.contentId)
                $("#unselect").text(`反选所有已选(数量:${this.mission.selection_arr.length})...`)
            })
            inputbox.append(ipt)
            right_selection.append(inputbox)
            basicinfo.append(course_type)
            basicinfo.append(course_subject)
            basicinfo.append(course_id)


            info.append(title)
            info.append(basicinfo)

            let ele1 = $(`<div style="display:flex"></div>`)
            ele1.append(info)
            ele1.append(right_selection)
        
            right.append(ele1)
            r.append(imgdiv)
            r.append(right)
            count+=1
            if(count!=courseinfo.length-1)
                r.append(`<hr>`)
            res.push(r)
        }
        return res
    }

}