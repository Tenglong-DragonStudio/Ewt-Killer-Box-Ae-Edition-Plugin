import config from "@/config";
import { headers } from "@/utils/constants";
import { request } from "@/utils/request";

let UPDATE_URL = `${config.mip}/server/latest`

export async function getLatestVersion() {
    let res:any= await request("GET",UPDATE_URL,headers["CommonHeader"],null);
    let txt = JSON.parse(res["responseText"]);
    return txt["data"]["client"]
}