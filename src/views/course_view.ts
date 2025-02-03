import {View} from "./pub_view";
import {FinishCourseAbstractService} from "../services/FinishCourseAbstractService";
import {getUrlInfo} from "../utils/request";5
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
import {CourseHomeworkController, IHomeworkController} from "../controller/CourseHomeworkController";
import {parse} from "postcss";
import {CommonCourse} from "../pojo/jmpcls_objects";
import {ordiBtn} from "../css/index.css";
import {IHomeworkService} from "../services/IHomeworkService";
import {TaskCourse} from "../pojo/course";
import {delay} from "../utils/stringutil";
import {Paper} from "@/pojo/fih_objects";
export class CourseView extends View {
    coursec:FinishCourseController
    homeworkc:IHomeworkController
    homeworkid:string
    courseid:string
    lessonid:string

    fplock:boolean = false
    sklock:boolean = false; //两个功能按钮的状态

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

    //这ts的史一样的构造规定，不允许同时用异步构造，没办法只好当这个函数为二次构造
    //使用方案:let newInstance = (await (new XXX(arg1,arg2,...))).build()
    async build() {
        await this.homeworkc.addHomework(this.homeworkid,parseInt(this.lessonid))
        return this
    }

    async surfaceComponent(): Promise<JQuery<HTMLElement>> {

        let course:FinishCourseAbstractService = this.coursec.courses[0]
        let baseinfo:TaskCourse= await course.getCourseInfo()
        let root = $(`
            <div class="${pageMain}"></div>
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

        root.append(imge)
        root.append(title)
        root.append(tag_con)
        root.append(info)
        root.append(func_con)

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
            while(true) {
                let dat = await this.coursec.GetTask()
                if((<any>dat)["state"] == 200) {
                    sk.text(`刷课完成!`)
                    break
                } else if((<any>dat)["state"] >= 0){
                    sk.text(`刷课中...进度${parseInt(String((<any>dat)["progress"] * 1000)) / 10}%`)
                } else {
                    sk.text(`刷课失败.(-1)`)
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
            let dat = await this.homeworkc.GetTask()
            if((<any>dat)["state"] == 200) {
                fp.text(`填写选择题完成!`)
                break
            } else if((<any>dat)["state"] >= 0){
                fp.text(`进度${parseInt(String((<any>dat)["progress"] * 1000)) / 10}%`)
            } else {
                fp.text(`填写选择题失败.(-1)`)
                break
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