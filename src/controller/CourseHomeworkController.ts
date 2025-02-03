import { IHomeworkService } from "@/services/IHomeworkService"
import {ExamPaperHomeworkService} from "../services/ExamPaperHomeworkService";
import {CourseHomeworkService} from "../services/CourseHomeworkService";
import {getUrlInfo} from "../utils/request";
import {HomeworkDao} from "@/dao/fih_homerwork_dao";
import {UUID} from "@/utils/stringutil";
import { dict } from "@/type";

export interface IHomeworkController {
    papers: Array<IHomeworkService>

    addHomework(homeworkId: string,lesson:number):Promise<void>
    emptyHomework():void
    FillOptionsAll(): Promise<dict>
    GetTask(): Promise<object>
}

export class CourseHomeworkController implements IHomeworkController {
    papers: IHomeworkService[]
    dao:HomeworkDao
    pointer: number
    homeworkids: number[]
    taskid:string

    constructor() {
        this.papers = []
        this.homeworkids = [];
            this.pointer = -1
        this.dao = new HomeworkDao()
        this.taskid = UUID()
    }

    emptyHomework() {
        this.papers=[]
        this.pointer=-1
    }

    async addHomework(homeworkid:string,lesson:number) {
        let c = await (new CourseHomeworkService()).build(parseInt(homeworkid),lesson)
        if(c != undefined) this.papers.push(c)
    }

    addHomeworkWithPaperId(paperid:string) {
        let c = new CourseHomeworkService().buildWithPaperId(paperid)
        this.papers.push(c)
    }

    async GetTask() {
        let dat = await this.dao.GetTaskFn(this.taskid)
        return dat
    }

    addHomeworkInstance(paper:IHomeworkService) {
        this.papers.push(paper)
    }

    async addExamPaper(url:string) {
        let c = getUrlInfo(url)
        let ins = new ExamPaperHomeworkService(
            c["paperId"],
            c["bizCode"],
            c["platform"],
            parseInt(c["homeworkId"])
        )
        await ins.getPaperInfo(); //Get ReportID
        this.papers.push(ins)
    }

    async FillOptionsAll():Promise<dict> {
        let ret:dict = await this.dao.FinishHomeworkOptions(this.papers)
        if(ret["code"] == 200) {
            this.taskid = ret["data"]["tid"]
        }
        return ret
    }

    // async buildWithLessonId(lessonids: Array<number>,homeworkid: number) {
    //     for (let i of lessonids) {
    //         let ser = await (new CourseHomeworkService()).build(homeworkid,i)
    //         if(ser != undefined) this.papers.push(ser)
    //     }
    //     return this
    // }

    buildWithoutLessonId() {
        return this
    }

}