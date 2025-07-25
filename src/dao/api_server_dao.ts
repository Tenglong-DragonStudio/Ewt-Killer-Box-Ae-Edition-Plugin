import {validateReturn} from "@/utils/request";
import {headers} from "@/utils/constants"
import {dict} from "@/type";
import app_config from "@/app_config";
import {requestObject} from "@/main";

export class APIServerDao {
    private GET_USER_URL = "https://web.ewt360.com/api/usercenter/user/baseinfo";
    private API_USER_URL = `${app_config.mip}/auth/getUser`;
    private SCHOOL_URL = "https://gateway.ewt360.com/api/eteacherproduct/school/getSchoolUserInfo";
    private TRIAL_URL = `${app_config.payip}/trial`
    private ACTIVE_CODE_URL = `${app_config.payip}/code/activate`
    private PURCHASE_URL = `${app_config.payip}/pay/buy`
    private ASK_OK_BUY_URL = `${app_config.payip}/status/wait_for_pay_status?payId={p}`
    private CANCEL_ORDER_URL = `${app_config.payip}/pay/cancel_order`
    private ALL_GOODS_URL = `${app_config.payip}/shop/allGoods`
    private GET_ALL_ORDERS_URL = `${app_config.payip}/pay/get_all_orders`
    private USER_TASK_URL = `${app_config.mip}/specialapi/task/user_all_tasks`
    private CANCEL_TASK_URL = `${app_config.mip}/specialapi/task/cancel_task`
    private DELETE_TASK_URL = `${app_config.mip}/specialapi/task/delete_task`
    async getApiUserInfo() {
        let res:any= await requestObject.request("POST",this.API_USER_URL,headers["CommonHeader"],null);

        return <dict>validateReturn(res["responseText"])
    }

    async getBasicUserInfo() {

        let res:any= await requestObject.request("GET",this.GET_USER_URL,headers["CommonHeader"],null);
        return <dict>validateReturn(res["responseText"])
    }
    async getSchoolInfo() {
        let res:any = await requestObject.request("GET",this.SCHOOL_URL,headers["CourseHeader"]);
        let data:any= validateReturn(res["responseText"])
        return <dict>data;
    }



    async UserTrial() {
        let res:any = await requestObject.request("POST",this.TRIAL_URL,headers["CourseHeader"]);
        let data:string= res["responseText"]

        return JSON.parse(data);
    }

    async UserCodeActive(code:string) {
        let dat = {
            cid:code
        }
        let res:any = await requestObject.requestJson("POST",this.ACTIVE_CODE_URL,headers["CourseHeader"],dat);
        let data:string= res["responseText"]

        return JSON.parse(data);
    }

    async Purchase(shopid: number,paytype:number) {
        let dat = {
            "sid": shopid,
            "ptype": paytype
        }

        let res:any = await requestObject.requestJson("POST",this.PURCHASE_URL,headers["CommonHeader"],dat)
        return JSON.parse(res["responseText"])
    }

    async GetPayStatus(payid:string) {
        let url = this.ASK_OK_BUY_URL.replace("{p}",payid)
        let res:any = await requestObject.request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async CancelOrder(payid:string) {
        let url = this.CANCEL_ORDER_URL;
        let data = {
            payId: payid
        }
        let res:any = await requestObject.requestJson("POST",url,headers["CommonHeader"],data)
        return JSON.parse(res["responseText"])
    }

    async GetAllGoods() {
        let url = this.ALL_GOODS_URL
        let res:any = await requestObject.request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async GetAllOrders() {
        let url = this.GET_ALL_ORDERS_URL
        let res:any = await requestObject.request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async GetUserTasks() {
        let url = this.USER_TASK_URL;
        let res:any = await requestObject.request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async CancelTask(tid:string) {
        let url = this.CANCEL_TASK_URL;
        let res:any = await requestObject.requestJson("POST",url,headers["CommonHeader"],{
            taskId:tid
        })
        return JSON.parse(res["responseText"])
    }

    async DeleteTask(tid:string) {
        let url = this.DELETE_TASK_URL;
        let res:any = await requestObject.requestJson("POST",url,headers["CommonHeader"],{
            taskId:tid
        })
        return JSON.parse(res["responseText"])
    }
}