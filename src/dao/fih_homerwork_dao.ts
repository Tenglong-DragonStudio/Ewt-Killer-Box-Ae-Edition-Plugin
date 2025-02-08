import { headers } from "@/utils/constants";
import {request, requestJson, validateAPIReturn, validateLanReturn, validateReturn} from "@/utils/request";
import {getUserToken} from "@/utils/token";
import Config from "@/config";
import {IHomeworkService} from "@/services/IHomeworkService";

export class HomeworkDao {
    HOMEWORK_PAPER_ANSWER_URL = `${Config.mip}/specialapi/paper`
    FILL_OPTION_URL = `${Config.mip}/api/homework/fillOptions`
    CHECK_STATE_URL = `${Config.mip}/specialapi/task/status?tid={tid}`
    LESSON_HOMEWORK_URL = "https://gateway.ewt360.com/api/homeworkprod/player/getPlayerLessonConfig";
    INFO_URL = "https://web.ewt360.com/api/answerprod/web/answer/report?&platform=1&isRepeat=1&paperId={paperId}&bizCode={bizCode}"
    AVL_URL = `${Config.mip}/specialapi/paper/available?paperId={paperId}`
    PAPER_GET_URL = `https://web.ewt360.com/api/answerprod/web/answer/paper?paperId={paperId}&platform=1&reportId={reportId}&bizCode={bizCode}`

    async getPaper(paperid:string,bizCode:string,homeworkId:number|string) {
        let data = {
            "paperId": paperid,
            "bizCode": bizCode,
            "homeworkId": homeworkId
        }
        let res:any = await requestJson("POST",this.HOMEWORK_PAPER_ANSWER_URL,headers.CommonHeader,
            data);
        return JSON.parse(res["responseText"]);
    }

    async getPlayerLesson(lessonIds:Array<string>,homeworkid:string | number,schoolid:number):Promise<Array<{studyTest:{paperId:string}}>> {
        let data = {"lessonIdList":lessonIds,"homeworkId":homeworkid,"schoolId":schoolid}
        let res:any = await requestJson("POST",this.LESSON_HOMEWORK_URL,headers.CommonHeader,data)
        return <Array<{studyTest:{paperId:string}}>>validateReturn(res["responseText"])
    }

    async getHomeworkInfo(paperid:string,bizCode:string) {
        let res:any = await request("GET",this.INFO_URL.replace("{paperId}",paperid.toString()).replace("{bizCode}",bizCode.toString()),headers.CourseHeader);
        return validateReturn(res["responseText"])
    }

    async FinishHomeworkOptions(
        homeworks: Array<IHomeworkService>
    ) {
        let data:any = []
        let url = this.FILL_OPTION_URL
        for(let i of homeworks) {
            data.push({
                bizCode: i.bizcode,
                reportId: i.reportId,
                homeworkId: i.homeworkId
            })
        }
        let dat = {
            homeworks: data,
        }
        let res:any = await requestJson("POST",url,{},dat)
        return validateLanReturn(res.responseText)
    }

    async GetTaskFn(uuid:string) {
        let url = this.CHECK_STATE_URL
            .replace("{tid}",uuid)
        let res: any = await request("GET", url, headers.CommonHeader, undefined)
        return validateLanReturn(res["responseText"])
    }

    async GetPaperActivate(paperid:string) {
        let url = this.AVL_URL.replace("{paperId}",paperid.toString())
        let res:any = await request("GET",url,headers.CommonHeader,undefined)
        return validateAPIReturn(res["responseText"])
    }

    async getSelfPaper(paperid:string,reportid:string,bizcode:string) {
        let url = this.PAPER_GET_URL.replace("{paperId}",paperid.toString()).replace("{reportId}",reportid)
            .replace("{bizCode}",bizcode)
        let res:any = await request("GET",url,headers.CommonHeader,undefined)
        return validateReturn(res["responseText"])
    }
}
