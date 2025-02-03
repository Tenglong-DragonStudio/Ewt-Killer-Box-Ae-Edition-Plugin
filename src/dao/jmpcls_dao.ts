import {request, requestJson, validateLanReturn, validateReturn} from "../utils/request";
import {headers } from "../utils/constants";
import {TaskCourse} from "../pojo/course";
import Config from "../config";
import {user} from "../main";
import { dict } from "@/type";

export class CourseDao { //详细逻辑处理

    COURSE_DETAIL: string = "https://gateway.ewt360.com/api/homeworkprod/player/getLessonDetail";
    LESSON_HOMEWORK_URL = "https://gateway.ewt360.com/api/homeworkprod/player/getPlayerLessonConfig";
    COURSE_BATCH_URL = `${Config.mip}/api/course/FinishCourse`
    CHECK_STATE_URL = `${Config.mip}/task/status?tid={tid}`

    async getCourseInfo(lessonid: string | number, schoolid: string | number, homeworkid: string | number): Promise<Object> {
        let data: any = {
            lessonId: parseInt(lessonid.toString()),
            schoolId: schoolid,
            homeworkId: parseInt(homeworkid.toString())
        }
        let result: any = await requestJson("POST", this.COURSE_DETAIL, headers.CourseHeader, data)
        let res: any = validateReturn(result["responseText"])
        if (res.videoPlayTime != undefined) {
            res.duration = res.videoPlayTime
        }
        if ("lessonName" in res) {
            res.title = res["lessonName"]
        }
        if ("courseId" in res) {
            res.parentContentId = res["courseId"]
        }
        if ("id" in res)
            res.contentId = res["id"]
        return res
    }

    async getPlayerLesson(lessonIds: Array<string>, homeworkid: string | number, schoolid: number): Promise<Array<{
        studyTest: { paperId: string }
    }>> {

        let data = {"lessonIdList": lessonIds, "homeworkId": homeworkid, "schoolId": schoolid}
        let res: any = await requestJson("POST", this.LESSON_HOMEWORK_URL, headers.CommonHeader, data)
        return <Array<{ studyTest: { paperId: string } }>>validateReturn(res["responseText"])
    }

    async FinishCourseFn(
        courses: Array<TaskCourse>,
    ) {
        let data:dict = {}
        data["courses"]= []
        for (let i of courses) {
            data["courses"].push({
                lessonid:i["id"],
                homeworkid:parseInt(i.homeworkId.toString())
            })
        }

        let url = this.COURSE_BATCH_URL
        let res: any = await requestJson("POST", url, headers.CommonHeader, data)
        return validateLanReturn(res["responseText"])

    }

    async GetTaskFn(uuid:string) {
        let url = this.CHECK_STATE_URL
            .replace("{tid}",uuid)
        let res: any = await request("GET", url, headers.CommonHeader, undefined)
        return validateLanReturn(res["responseText"])
    }
}
