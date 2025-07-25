import {View} from "@/views/view";
import {leftComponent} from "@/utils/view_util";
import $ from "jquery";
import {getBlueFBtn} from "@/utils/jquery_component";
import {mstyle} from "@/utils/style_manager";
import { windowBasicTwoParts} from "@/css/index.css";
import {user} from "@/main";

export class NoView extends View {
    async surfaceComponent() {
        let root = $(`<div class="${windowBasicTwoParts}"></div>`)
        let left = leftComponent(user)
        let right = $("<div style='line-height: 25px;flex: 1;padding: 15px;display: flex;flex-direction: column;justify-content: center'></div>")


        let c:{[p:string]:JQuery<HTMLElement>} = {
            "去任务列表选任务":getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>",()=>{
                location.reload();
                window.location.href="https://teacher.ewt360.com/ewtbend/bend/index/index.html#/student/homework"}),
            "去假期页面":getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>",()=>{
                location.reload();
                window.location.href="https://teacher.ewt360.com/ewtbend/bend/index/index.html#/holiday/student/entry"}),
        }
        right.append($("<h1 style='font-size: 32px;font-weight: bolder'>菜单</h1>"))
        right.append($("<div style='font-size: 12px;margin-top: 5px'>你现在没有打开任何页面,从下面的列表选一项以继续:</div>"))
        let container = $("<div class='"+mstyle.nopageContainer+"'></div>")
        for(let d in c) {
            let ele = $("<div class='"+mstyle.nopageLst+"'><span class='"+mstyle.nopageLstTitle+"'>"+d+"</span></div>")
            c[d].css("margin-left",'auto')
            c[d].css("margin-right",'0')
            ele.append(c[d])
            container.append(ele)
        }
        right.append(container)
        root.append(left)
        root.append(right)
        return root
    }
}