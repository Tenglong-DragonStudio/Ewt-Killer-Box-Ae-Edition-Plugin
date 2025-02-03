
import { MissionDao } from "../dao/ms_dao";
import { Task } from "../pojo/task";
import {TaskCourse} from "../pojo/course";
import {getDateFromStamp} from "../utils/stringutil";
import { SGM_getValue, SGM_setValue } from "../utils/function";
import { validateReturn } from "../utils/request";
import {User} from "@/pojo/user";
import { dict, TDict } from "@/type";


interface IMissionService {
  getMissionInfo(): Promise<Task>;
  getMissionProgress(): Promise<number>;
  pageHomeworkTasks(byDayOrBySubject:number): Promise<{[key:string]:{
      id:number,
      dayid?: string,
      courses:Array<TaskCourse>
    }}>
  getSceneMission(sceneid:string,byDayOrSubject:number): Promise<Array<dict>>
}

export class SelectionObject {
  contentType:string;
  id:string;
  curl?:string
  [key:string]:any

  public constructor(content:string,id:string)  {
    this.contentType=content
    this.id=id
  }
}
export class MissionService implements IMissionService {
  homeworkIds!: Array<number>;
  schoolid: string;
  selection_key:string;
  selection_arr:Array<SelectionObject>

  private missionDao: MissionDao;
  public constructor(user: User,homeworkId?: number) {
    if (user.school != null) this.schoolid = user.school;
    else this.schoolid = "";

    this.missionDao = new MissionDao();

    if(homeworkId) this.homeworkIds = [homeworkId];

    this.selection_arr=[]
    this.selection_key=""
    this.loadSelection()
  }


  private async loadSelection() {
    this.selection_key = `localdata.${this.homeworkIds}.selection`;
    if(await SGM_getValue(this.selection_key)==undefined)
      this.selection_arr=[]
    else
      this.selection_arr=JSON.parse(await SGM_getValue(this.selection_key))
    this.saveSelection()
  }

  private saveSelection() {
    SGM_setValue(this.selection_key,JSON.stringify(this.selection_arr))
  }

  public addSelection(o:SelectionObject) {
    this.selection_arr.push(o)
    this.saveSelection() //保存
  }

  public rmSelection(c:string,id:string) {
    let index = -1
    for(let c0 in this.selection_arr) {
      if(this.selection_arr[c0].contentType==c 
        && this.selection_arr[c0].id==id)
        index = parseInt(c0)
    }
    if(index!=-1) this.selection_arr.splice(index,1)
    this.saveSelection()
  }

  public emptySelection() {
    this.selection_arr=[]
    this.saveSelection()
  }
  public existence(id:number|string,contentType:string) {
    for(let c of this.selection_arr)
      if(c.id.toString()==id && c.contentType == contentType)
        return true
    return false
  }

  public getSelections() {
    return this.selection_arr
  }

  async getSceneMission(sceneid:string,byDayOrSubject: 0 | 1): Promise<Array<dict>> {
    let suiminfo:dict = await this.missionDao.getSceneHomeworksAndMustLearnSubjs(sceneid)
    let {mustLearnSubjectList} = suiminfo
    let student_day_subj_stat:dict = await this.missionDao.getStudentDatSubjects(sceneid,this.homeworkIds,mustLearnSubjectList)
    let res:Array<dict>= []
    if(byDayOrSubject == 0) {
      let {dateStat} = student_day_subj_stat
      for(let i of dateStat) {
        res.push({
          dayid: i.dateList,
          day: i.date
        })
      }
    } else if(byDayOrSubject == 1) {
      let {subjectStat} = student_day_subj_stat
      for(let i of subjectStat) {
        let obj = i
        obj["chinese"] = obj["subjectName"]
        res.push(i)
      }
    }

    return res
  }

  async buildWithSceneId(sceneid:string) {
    let suiminfo:dict = await this.missionDao.getSceneHomeworksAndMustLearnSubjs(sceneid)
    let {homeworkIds} = suiminfo
    this.homeworkIds = homeworkIds
    return this
  }

  async getMissionInfo(): Promise<Task> {
    let task: Task = <Task>(
      await this.missionDao.getMissionInfo(this.homeworkIds[0], this.schoolid)
    );
    return task;
  }

  async getMissionProgress(): Promise<number> {
    let progc: { [key: string]: any } =
      await this.missionDao.getHomeworkProgress(
        this.homeworkIds[0],
        parseInt(this.schoolid)
      );
    let prog: number = progc["finishCount"] / progc["count"];
    return prog;
  }

  async getHomeworkBasicInfo(byDayOrBySubject:number) {
    let res = <{[key:string]:any}>(await this.missionDao.getHomeworkBasicData(this.homeworkIds,byDayOrBySubject))
    return res;
  }

  async pageHomeworkTasks(byDayOrBySubject:number):Promise<{[key:string]:{
      id:number,
      dayid?:string,
      courses:Array<TaskCourse>
    }}> {

    let c : {[key:string]:any} = await this.getHomeworkBasicInfo(byDayOrBySubject)

    let obj:{[key:string]:{
        id:number,
        dayid?: string,
        courses:Array<TaskCourse>
      }} = {};

    if(c["days"].length==0) //subject
      for(let c0 of c["subjectList"]) {
        let coursearr:Array<TaskCourse> = await this.getHomeworkSubjTask(c0["subjectId"])
        obj[c0["chinese"].toString()]={
          id:c0["subjectId"],
          courses:coursearr
        }
      }
    else for(let c0 of c["days"]) {
      let coursearr: Array<TaskCourse> = await this.getHomeworkDatedTask(c0["dayId"], c0["day"])
      obj[getDateFromStamp(c0["day"])] = {
        id: c0["day"],
        dayid: c0["dayId"][0],
        courses: coursearr
      }
    }
    return obj
  }

  async getHomeworkDatedTask(dayid:string[],day:number) {
    let courseinfo = await this.missionDao.pageHomeworkTasks(dayid,day,
      this.homeworkIds)

    return (<{data:Array<TaskCourse>}>courseinfo)["data"]
  }

  async getHomeworkSubjTask(subjectid:number) {
    let courseinfo = await this.missionDao.pageHomeworkTasksByHomeworkId(subjectid,
        this.homeworkIds
    )
    return (<{data:Array<TaskCourse>}>courseinfo)["data"]
  }
}
