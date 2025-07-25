import {SGM_getValue, SGM_setValue} from "../utils/function";
import {getDateFromStamp, getDateTimeFromStamp} from "../utils/stringutil";

export interface ILogSystem {
    info: (text:string) => string
}

export class LogSystem implements ILogSystem {
    dic:{[key:number]: string};

    log_txt:Array<{
        level: number,
        time: string,
        content: string
    }>;

    constructor() {
        this.dic = {
            0: "[Message]",
            1: "[Warning]",
            2: "<span style='color:red'>[Error]</span>",
            3: "<span style='color:red'>[Fatal]</span>"
        }

        this.log_txt=[]
    }

    async build() {
        let st = await SGM_getValue("kewt_log")
        this.log_txt = st ? <Array<{
            level: number,
            time: string,
            content: string
        }>>eval('('+st+')') : []

        return this
    }

    info(text:string) {
        this.log_txt.push({
            level: 0,
            time: getDateTimeFromStamp(Date.now().toString()),
            content: text
        })

        SGM_setValue("kewt_log",JSON.stringify(this.log_txt))
        return this.dic[0] + " "+text;
    }

    warning(text:string) {
        this.log_txt.push({
            level: 1,
            time: getDateTimeFromStamp(Date.now().toString()),
            content: text
        })
        SGM_setValue("kewt_log",JSON.stringify(this.log_txt))
        return this.dic[1] + " "+text;
    }

    fatal(text:string) {
        this.log_txt.push({
            level: 3,
            time: getDateTimeFromStamp(Date.now().toString()),
            content: text
        })
        SGM_setValue("kewt_log",JSON.stringify(this.log_txt))
        return this.dic[3] + " "+text;
    }

    error(text:string) {
        this.log_txt.push({
            level: 2,
            time: getDateTimeFromStamp(Date.now().toString()),
            content: text
        })
        SGM_setValue("kewt_log",JSON.stringify(this.log_txt))
        return this.dic[2] + " "+text;
    }
}