import {View} from "./view";
import {FinishCourseAbstractService} from "../services/FinishCourseAbstractService";
import {getUrlInfo} from "../utils/request";
import {FinishCourseController} from "../controller/FinishCourseController";
import {
    basicInfoContainer,
    basicInfoEntire,
    basicInfoEntireLeft, basicInfoEntireRight,
    courseImg, courseTitle, funcBtn, funcBtnsContainer,
    pageMain,
    tag,
    tagContainer
} from "../css/course_view.css";
import {windowBasicTwoParts} from "../css/index.css"
import {CourseHomeworkController, IHomeworkController} from "../controller/CourseHomeworkController";
import {ordiBtn} from "../css/index.css";
import {TaskCourse} from "../pojo/course";
import {delay} from "../utils/stringutil";
import {dict} from "@/type";
import {leftComponent} from "@/utils/view_util";
import {user} from "@/main";
export class CourseView extends View {
    coursec:FinishCourseController
    homeworkc:IHomeworkController
    homeworkid:string
    courseid:string
    lessonid:string

    fplock:boolean = false
    sklock:boolean = false; //两个功能按钮的状态

    async onCreate() {
        await this.homeworkc.addHomework(this.homeworkid,parseInt(this.lessonid))
    }

    constructor() {
        super();
        let info = getUrlInfo(document.location.href)
        this.lessonid=info["lessonId"]
        this.courseid=info["courseId"]
        this.homeworkid=info["homeworkId"]

        this.coursec = new FinishCourseController()
        this.coursec.addCourse(this.courseid,this.lessonid,parseInt(this.homeworkid))

        this.homeworkc = new CourseHomeworkController()

    }


    async surfaceComponent(): Promise<JQuery<HTMLElement>> {

        let course:FinishCourseAbstractService = this.coursec.courses[0]
        let baseinfo:TaskCourse= await course.getCourseInfo()
        let root = $(`<div class="${windowBasicTwoParts}"></div>`)
        let left = leftComponent(user)
        let right = $(`
            <div class="${pageMain}" style="flex: 1;padding-left: 10px;"></div>
        `)
        let imge = $(`<div>
            <img src="https://web.ewt360.com/common/customer/study/img/play.png" class="${courseImg}"/>
        </div>`)
        //在getlessondetailv2接口中找不到课程对应的图片，只能用这个图标充数

        let title = $(`<div class="${courseTitle}">${baseinfo.title}</div>`)

        let tag_con = $(`<div class="${tagContainer}"></div>`)
        tag_con.append($(`<div class="${tag}">老师:${baseinfo.teacherName}</div>`))
        tag_con.append($(`<div class="${tag}">${baseinfo.subjectName}</div>`))

        let info = $(`<div class="${basicInfoContainer}"></div>`)
        info.append(this.getInfoKV("课程ID(Course ID)",this.courseid))
        info.append(this.getInfoKV("授课ID(Lesson ID)",this.lessonid))
        info.append(this.getInfoKV("时长",baseinfo.videoPlayTime+"s"))
        
        if(baseinfo.studyTest != undefined && baseinfo.studyTest.length!=0)
            for(let c in baseinfo.studyTest) {
                let i=parseInt(c)
                info.append(this.getInfoKV(
                    "作业 "+(i+1),
                    `<a href="https://web.ewt360.com/mystudy/#/exam/answer/?paperId=${baseinfo.studyTest[i].paperId}&bizCode=204&platform=1&isRepeat=1">点击去做作业</a>`
                ))
            }

        let func_con = $(`<div class="${funcBtnsContainer}"></div>`)
        let sk = $(`<div class="${ordiBtn} ${funcBtn}">刷课</div>`)
        let fp = $(`<div class="${ordiBtn} ${funcBtn}">一键填选择题</div>`)

        sk.on('click',async ()=>{
            await this.finishCourse(sk,this.coursec)
        })

        fp.on('click',async ()=>{
            await this.finishHomework(fp)
        })
        func_con.append(sk)
        func_con.append(fp)

        right.append(imge)
        right.append(title)
        right.append(tag_con)
        right.append(info)
        right.append(func_con)

        root.append(left)
        root.append(right)
        return root;
    }

    private async finishCourse(sk:JQuery<HTMLElement>,course:FinishCourseController) {
        if(this.sklock) return

        this.sklock=true
        sk.text("请等待...")
        let val = await course.FinishCourse()
        if(val["code"]!=200) {
            sk.text(`错误(${val})`)
        } else {
            while (true) {
                if(super.forbid_request) return
                let dat:dict = await this.coursec.GetTask()
                if((dat)["code"] == 200) {
                    if(dat["data"]["errcode"]!=0) {
                        sk.text(`错误(${dat["data"]["errmessage"]})`)
                        break
                    } else if(dat["data"]["all"] == dat["data"]["do"]) {
                        sk.text(`刷课完成!`)
                        break
                    } else {
                        sk.text(`进度:${parseInt(String((<any>dat)["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`)
                    }

                } else {
                    sk.text(`出现错误(${dat["message"]})`)
                    break
                }
                await delay(100)
            }
        }
        await delay(1000)
        this.sklock=false
    }

    private async finishHomework(fp:JQuery<HTMLElement>) {
        if(this.fplock) return
        this.fplock=true

        fp.text("请等待...")

        await this.homeworkc.FillOptionsAll()
        while (true) {
            if(super.forbid_request) return
            let dat:dict = await this.homeworkc.GetTask()
            dat=dat["data"]
            if(dat == undefined) {
                fp.text(`错误:无效的任务.`)
                break
            } else if(dat["errcode"] != 0) {
                fp.text(`错误:代码为${dat["errcode"]}/点击重试`)
                break
            } else if(dat["all"] == dat["do"]) {
                fp.text(`填写完成!`)
                break
            } else if(dat["all"] > dat["do"]){
                dat["progress"] = parseInt(String(dat["do"] / dat["all"] * 1000)) / 10
                fp.text(`进度:${dat["progress"] * 1000}%`)
            }
            await delay(100)
        }
        this.fplock=false
    }
    private getInfoKV(left:string,right:string) {
        let base = $(`<div class="${basicInfoEntire}"></div>`)
        base.append($(`<div class="${basicInfoEntireLeft}">${left}</div>`))
        base.append($(`<div class="${basicInfoEntireRight}">${right}</div>`))
        return base
    }
}