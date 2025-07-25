import {headers} from "../utils/constants";
import {validateReturn} from "../utils/request";
import {requestObject, user} from "../main";
import { dict } from "@/type";

export class MissionDao {
    DAY_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkDistribution";
    MISSIONS_INFO_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkSummaryInfo?sceneId=0&homeworkId={hid}&schoolId={sid}";
    HOMEWORK_TASKS_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/pageHomeworkTasks";
    HOMEWORK_PROGRESS = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentTaskProcess"
    HOMEWORK_SUMMARY_INFO = "https://gateway.ewt360.com/api/homeworkprod/homework/student/holiday/getHomeworkSummaryInfo?schoolId={schoolId}&timestamp={timestamp}&sceneId={sceneId}";


    STUDENT_HOMEWORK_SUMMARY = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkSummaryInfoV1"
    SCENE_GET_SUBJECT = "https://gateway.ewt360.com/api/homeworkprod/homework/student/getStudentDaySubjectStat"

    //获取day dayid
    async getHomeworkBasicData(
        homeworks:Array<number>,
        taskDistributionTypeEnum:number
    ) {
        let data = {
            homeworkIds: homeworks,
            sceneId: 0,
            taskDistributionTypeEnum: taskDistributionTypeEnum,
            schoolId:user.school
        }
        let res:any = await requestObject.requestJson("POST",this.DAY_URL,headers.CommonHeader,data);
        return validateReturn(res["responseText"])
    }

    //获取整个作业id
    async getMissionInfo(hid:string | number,sid:string | number) {
        let res:any = await requestObject.request("GET",this.MISSIONS_INFO_URL.replace("{hid}",String(hid)).replace("{sid}",String(sid)),headers.CommonHeader);
        return validateReturn(res["responseText"]);
    }

    //获取dayid对应的任务列表
    async pageHomeworkTasks(dayid:Array<string>,timestamp:number,homeworkids:Array<number>) {
        let data = {
            day: timestamp,
            dayId: dayid,
            homeworkIds: homeworkids,
            pageIndex: 1,
            pageSize: 1000,
            sceneId: 0,
            schoolId: user.school
        }
        let res:any = await requestObject.requestJson("POST",this.HOMEWORK_TASKS_URL,headers.CourseHeader,data);
        return validateReturn(res["responseText"]);
    }

    async getHomeworkSummaryInfo(sceneId:string) {
        let url = this.HOMEWORK_SUMMARY_INFO.replace("{schoolId}", exports.user.school || "").replace("{timestamp}", String(Date.now())).replace("{sceneId}", String(parseInt(sceneId)));
        let res:dict = <dict>await requestObject.request("GET", url, headers.CommonHeader, null);
        return validateReturn(res["responseText"]);
      }

    async pageHomeworkTasksByHomeworkId(subjectid:number,homeworkids:Array<number>) {
        let data ={
            "homeworkIds":homeworkids,
            "sceneId":0,
            "pageIndex":1,
            "pageSize":1000,
            "subjectId":subjectid,
            "schoolId":user.school
        }
        let res:any = await requestObject.requestJson("POST",this.HOMEWORK_TASKS_URL,headers.CourseHeader,data);
        return validateReturn(res["responseText"]);
    }

    async getHomeworkProgress(homeworkId:number,schoolId: number) {
        let url = this.HOMEWORK_PROGRESS
        let data = {
            homeworkIds: [
                homeworkId
            ],
            sceneId: 0,
            schoolId: schoolId
        }

        let res:any = await requestObject.requestJson("POST",url,headers.CourseHeader,data)
        return validateReturn(res["responseText"])
    }

    async getSceneHomeworksAndMustLearnSubjs(sceneid:string) {
        let url = this.STUDENT_HOMEWORK_SUMMARY
        let data = {
            schoolId: user.school,
            sourceType: 1,
            sceneId: sceneid
        }

        let res:any = await requestObject.requestJson("POST",url,headers.CommonHeader,data)
        return validateReturn(res["responseText"])
    }

    async getStudentDatSubjects(sceneid:string,homeworks:Array<number>,mustLearnSubj: Array<number>) {
        let url = this.SCENE_GET_SUBJECT
        let data = {
            schoolId: user.school,
            sourceType: 1,
            sceneId: sceneid,
            homeworks: homeworks,
            mustLearnSubjectList: mustLearnSubj
        }
        let res:any = await requestObject.requestJson("POST",url,headers.CommonHeader,data)

        return validateReturn(res["responseText"])
    }

    async pageHomeworkTasksByScene_Day(sceneId:string,homeworkIds:Array<number>,mustLengSubj:Array<number>,dayId:Array<number>) {
        let url = this.HOMEWORK_TASKS_URL
        let data = {
            "schoolId": user.school,
            "sourceType": 1,
            "homeworkIds": homeworkIds,
            "sceneId": sceneId,
            "mustLearnSubjectList": mustLengSubj,
            "singleSubject": false,
            "specialHomework": false,
            "pageIndex": 1,
            "pageSize": 9999,
            "pageTotal": 1,
            "isLoading": false,
            "dayId": dayId
        }
        let res:any = await requestObject.requestJson("POST",url,headers.CommonHeader,data)
        return validateReturn(res["responseText"])
    }

    async pageHomeworkTasksByScene_Subject(sceneId:string,homeworkIds:Array<number>,mustLengSubj:Array<number>,subjectId:number) {
        let url = this.HOMEWORK_TASKS_URL
        let data = {
            "schoolId": user.school,
            "sourceType": 1,
            "homeworkIds": homeworkIds,
            "sceneId": sceneId,
            "mustLearnSubjectList": mustLengSubj,
            "singleSubject": false,
            "specialHomework": false,
            "pageIndex": 1,
            "pageSize": 9999,
            "pageTotal": 1,
            "isLoading": false,
            "subjectId":subjectId
        }
        let res:any = await requestObject.requestJson("POST",url,headers.CommonHeader,data)
        return validateReturn(res["responseText"])
    }
}