import { update_info_style } from "@/utils/style_manager";
import { View } from "./view";
import { update_svg } from "@/utils/resources";

export class CheckUpdateView extends View {

    private upd_text: string
    private url:string
    private version:string
    public constructor(upd_text:string,url:string,version:string) {
        super();
        this.upd_text = upd_text
        this.url = url
        this.version=version
    }
    async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        let root = $(`<div class="${update_info_style.updateLContainer}"></div>`)
        
        root.append(update_svg)
        root.append($(`<div class="${update_info_style.updateLNewVerText}">新版本可用</div>`))
        let cont = $(`<div class="${update_info_style.updateLNewVerDetailContainer}"></div>`)
        cont.html(this.upd_text)
        root.append(cont)
        root.append(`<a href="${this.url}" style="
    margin-top: 10px;
">点击下载最新版本(${this.version})</a>`)
        return root
    }
}