import {dict, TDict} from "@/type";
import {View} from "@/views/view";
import {UUID} from "@/utils/stringutil";
import {closeWindow, renderBackground, renderWindow} from "@/utils/view_util";
import $ from "jquery";
import {mstyle} from "@/utils/style_manager";

export class ViewManager {
    private views:TDict<View | undefined>
    constructor() {
        this.views = {};
    }

    async openView(view:View,hasCloseToggle: boolean,width?: string, style?: string) {
        this.views[view.getViewId()] = view
        renderBackground()
        await view.onCreate()
        let windowMain = renderWindow(await view.surfaceComponent(),width,style)

        if(hasCloseToggle) {
            let closeBtn = $(`<div id='` + mstyle.closeBtn + `'>
            <label class='` + mstyle.closeBtnLabel + `'>C</label>
        </div>`)
            closeBtn.mouseup(() => {
                this.closeView(view.getViewId());
            });
            windowMain.append(closeBtn)

        }
        await view.AfterCreate()
    }

    async closeView(vid: string) {
        await this.views[vid]?.onDestroy()
        this.views[vid] = undefined
        closeWindow()
    }
}