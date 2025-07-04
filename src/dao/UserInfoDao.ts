import {request, requestJson, validateReturn} from "@/utils/request";
import {headers} from "@/utils/constants"
import {dict} from "@/type";
import config from "@/config";

export class UserInfoInterface {
    private GET_USER_URL = "https://web.ewt360.com/api/usercenter/user/baseinfo";
    private API_USER_URL = `${config.mip}/auth/getUser`;
    private SCHOOL_URL = "https://gateway.ewt360.com/api/eteacherproduct/school/getSchoolUserInfo";
    private TRIAL_URL = `${config.payip}/trial`
    private ACTIVE_CODE_URL = `${config.payip}/code/activate`
    private PURCHASE_URL = `${config.payip}/pay/buy`
    private ASK_OK_BUY_URL = `${config.payip}/status/wait_for_pay_status?payId={p}`
    private CANCEL_ORDER_URL = `${config.payip}/pay/cancel_order`
    private ALL_GOODS_URL = `${config.payip}/shop/allGoods`
    private GET_ALL_ORDERS_URL = `${config.payip}/pay/get_all_orders`

    async getApiUserInfo() {
        let res:any= await request("POST",this.API_USER_URL,headers["CommonHeader"],null);

        return <dict>validateReturn(res["responseText"])
    }

    async getBasicUserInfo() {

        let res:any= await request("GET",this.GET_USER_URL,headers["CommonHeader"],null);
        return <dict>validateReturn(res["responseText"])
    }
    async getSchoolInfo() {
        let res:any = await request("GET",this.SCHOOL_URL,headers["CourseHeader"]);
        let data:any= validateReturn(res["responseText"])
        return <dict>data;
    }



    async UserTrial() {
        let res:any = await request("POST",this.TRIAL_URL,headers["CourseHeader"]);
        let data:string= res["responseText"]

        return JSON.parse(data);
    }

    async UserCodeActive(code:string) {
        let dat = {
            cid:code
        }
        let res:any = await requestJson("POST",this.ACTIVE_CODE_URL,headers["CourseHeader"],dat);
        let data:string= res["responseText"]

        return JSON.parse(data);
    }

    async Purchase(shopid: number,paytype:number) {
        let dat = {
            "sid": shopid,
            "ptype": paytype
        }

        let res:any = await requestJson("POST",this.PURCHASE_URL,headers["CommonHeader"],dat)
        return JSON.parse(res["responseText"])
    }

    async GetPayStatus(payid:string) {
        let url = this.ASK_OK_BUY_URL.replace("{p}",payid)
        let res:any = await request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async CancelOrder(payid:string) {
        let url = this.CANCEL_ORDER_URL;
        let data = {
            payId: payid
        }
        let res:any = await requestJson("POST",url,headers["CommonHeader"],data)
        return JSON.parse(res["responseText"])
    }

    async GetAllGoods() {
        let url = this.ALL_GOODS_URL
        let res:any = await request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }

    async GetAllOrders() {
        let url = this.GET_ALL_ORDERS_URL
        let res:any = await request("GET",url,headers["CommonHeader"])
        return JSON.parse(res["responseText"])
    }
}