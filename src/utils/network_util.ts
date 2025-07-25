import {swindow} from "@/utils/function";
import {config} from "@/main";
import {User} from "@/pojo/user";
import {APIServerDao} from "@/dao/api_server_dao";
import {getUserToken} from "@/utils/token";

export function xhrInit() {
    if (config.getValue<boolean>("kewt.config.ic_collect_data")) {
        let openF = swindow.XMLHttpRequest.prototype.open
        swindow.XMLHttpRequest.prototype.open = function (method: string, url: string | URL, ...args: any) {
            if (url.toString().indexOf("&key=eo^nye1j#!wt2%v)") != -1
                || url.toString().indexOf("aliyun") != -1
                || url.toString().indexOf("track") != -1) {
                throw new Error("[Ewt-Killer-Box] 万恶的ewt正在用 XMLHttpRequest() 收集用户数据，滚开给老子爬")
            } else {
                return openF.call(this, method, url, args)
            }
        }

        let beacon = swindow.navigator.sendBeacon
        swindow.navigator.sendBeacon = function (url, data) {
            if (url.toString().indexOf("aliyun") != -1 || url.toString().indexOf("web-log/logstores") != -1) {
                throw new Error("[Ewt-Killer-Box] 万恶的ewt正在用 navigator.sendBeacon() 收集用户数据，滚开给老子爬")
            } else {
                return beacon.call(this, url, data)
            }

        }
    }
}

export async function getUser(): Promise<User> {
    let userInterface = new APIServerDao();

    const [dat1, dat0, apidat] = await Promise.all([
        userInterface.getSchoolInfo(),
        userInterface.getBasicUserInfo(),
        userInterface.getApiUserInfo()
    ]);
    if (dat0 != null) {
        return {
            id: dat0["userId"],
            name: dat0["realName"],
            photoUrl: dat0["photoUrl"],
            token: getUserToken(),
            school: dat1?.schoolId,
            isvip: apidat["isvip"] || false,
            opcount: apidat["opcount"] || 0
        };
    } else {
        return {
            id: undefined,
            name: undefined,
            photoUrl: undefined,
            isvip: false
        }
    }

}