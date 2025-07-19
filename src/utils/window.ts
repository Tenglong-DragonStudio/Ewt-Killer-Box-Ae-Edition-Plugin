//不太清楚js的特性然后踩了坑,写了屎山代码,懒得改了

import $ from "jquery"
import {clearAllCloseWindowTimeout, version} from "../main";
import {getBlueFBtn} from './jquery_component';
import {mstyle, wait_style} from "./style_manager";
import app_config from "../app_config";
import {getUrlInfo} from "./request";
import {User} from "@/pojo/user";
import {getDateTimeFromStamp} from "@/utils/stringutil";
import {UserInfoInterface} from "@/dao/UserInfoDao";
import {dict} from "@/type";

let op_entire = $()
export function  isOnPractisePage() {
    let kv = getUrlInfo(window.location.href)
    return window.location.href.indexOf('exam/answer') && ('paperId' in kv);
}

export function renderBackground() {
    let rootE = $(document.body)
    let bg = $("<div id='"+mstyle.windowBg+"'></div>");

    let loading = $(`<div class='${wait_style.loading}'></div>`);
    let loading_c = $(`<div class='${wait_style.loadingC}'></div>`);

    let elements:JQuery<HTMLElement>[] = []
    let pos = 0
    loading_c.click(()=>{
        setInterval(()=>{
            elements[pos].addClass(wait_style.loadingSingleL)
            elements[pos == 0 ? elements.length - 1 : pos-1].removeClass(wait_style.loadingSingleL)
            pos += 1
            if(pos >= elements.length) pos = 0
        },200)
    })
    for(let i=0;i<6;i++) {
        let p = $(`<div class='${wait_style.loadingSingleContainer}'></div>`)
        p.css("transform",`rotate(${i*60}deg)`)
        let c = $(`<div class='${wait_style.loadingSingle}'></div>`);
        p.append(c)
        elements.push(c)
        loading_c.append(p)
    }
    loading.append(loading_c)
    loading.append($(`<div class='${wait_style.loadingText}'>第一次载入数据可能较慢，请稍作等待...<br>`))
    bg.append(loading)

    rootE.prepend(bg)
    loading.animate({opacity:1,marginBottom: "-=100px"},app_config.animate.window_surface);
    loading_c.click()
    return loading;
}


export function closeWindow() {

    clearAllCloseWindowTimeout();
    let bg = $("#"+mstyle.windowBg);
    let wm = $("#"+mstyle.windowMain);
    wm.animate({opacity:0,marginBottom: "+=100px"},app_config.animate.window_surface);
    setTimeout(()=>{
        wm.css("display","none");
        bg.remove();
    },220);
}

export function leftComponent(userInfo:User) {
    let uinterface = new UserInfoInterface();
    let root = $("<div class='"+mstyle.leftComponent+"'></div>")

    let rcontainer = $("<div style='line-height: 17px;display: flex;align-items: center;flex-direction: column'></div>")
    let foot = $(`<div class='`+mstyle.leftFooter+`'></div> `)

    if(userInfo.id == undefined) {
        let btn = getBlueFBtn("登陆",()=>{
            location.reload()
            window.location.href="https://web.ewt360.com/register/#/login"
        })
        btn.css("marginTop","50px")
        rcontainer.append(btn)
    } else {
        let tx = $("<img class='"+mstyle.headImage+"' src='"+userInfo.photoUrl+"'/>")
        let uname = $(`<div class="`+mstyle.userName+`">`+userInfo.name+`</div>`)
        let uid = $(`<div class="`+mstyle.userId+`">`+userInfo.id+`</div>`)

        let activate_box = $(`<div class="${mstyle.activateInfoBox}"></div>`)

        function getActivateStatusEntire(key:string,val:string) {
            return $(`
                <div style="display: flex"><div>${key}</div><div class="${mstyle.activateInfoKvV}">
                    ${val}
                </div>
                </div>
            `)
        }

        if(!userInfo.isvip) {
            activate_box.append(getActivateStatusEntire("激活状态",`否(<a href="#">点此购买授权</a>)`))
        } else {
            activate_box.append(getActivateStatusEntire("激活状态","是"))
            if(userInfo.expire_time != undefined)
                activate_box.append(getActivateStatusEntire("到期时间",getDateTimeFromStamp(userInfo.expire_time.toString())))
            if(userInfo.opcount != undefined) {
                op_entire = getActivateStatusEntire("剩余点数",userInfo.opcount.toString())
                activate_box.append(op_entire)
            }
        }

        let c = $()
        if(userInfo.opcount == -1) {
            c = $(`<div class="${mstyle.ordiBtn}" style="
    margin-top: 10px;
    padding: 0px 10px;
    font-size: 10px;
">试用</div>`)
            c.click(async ()=>{
                c.text("请等待...")
                let res:dict = await uinterface.UserTrial();
                c.html(`<div>${res["message"]}(点击刷新)</div>`)
                c.off('click')
                c.click(()=>{
                    location.reload()
                })
            })
        }
        rcontainer.append(uname)
        rcontainer.append(uid)
        rcontainer.append(activate_box)
        rcontainer.append(c)

        root.append(tx)
    }


    foot.append($(`<div class='${mstyle.leftFooterElement}'>Version: ${version.substring(0,version.length-1)}<span style='color: greenyellow;font-weight: bolder'>${version[version.length-1]}</span></div>`))
    root.append(rcontainer)
    root.append(foot)
    return root
}

export function renderWindow(
    leftComponent:JQuery<HTMLElement> | undefined,
    bodyComponent:JQuery<HTMLElement> | undefined,
    hasCloseToggle:boolean,
    width?:string,
    style?: string
) {
    let qwidth = width || "750px"
    let windowMain = $(`<div id='${mstyle.windowMain}' style="width: ${qwidth}"></div>`);
    let bg = $("#"+mstyle.windowBg)

    if(leftComponent != null) windowMain.append(leftComponent);
    let kewtWindowBody = $(`<div class="${mstyle.kewtWindowBody}" style="${style}"></div>`);
    if(bodyComponent != null) kewtWindowBody.append(bodyComponent);
    windowMain.append(kewtWindowBody)

    if(hasCloseToggle) {
        let closeBtn = $(`<div id='`+mstyle.closeBtn+`'>
            <label class='`+mstyle.closeBtnLabel+`'>C</label>
        </div>`)
        closeBtn.mouseup(()=>{
            closeWindow();
        });
        windowMain.append(closeBtn)
    }

    $("#"+mstyle.windowBg).empty();
    bg.prepend(windowMain);
    windowMain.animate({opacity:1,marginBottom: "-=100px"},app_config.animate.window_surface);
    return windowMain
}

export function renderWindowMenu(btns:Array<JQuery<HTMLElement>>) {
    let body = $(document.body)
    let mask = $("<div class='"+mstyle.wMask+"'></div>")
    let menu = $("<div class='"+mstyle.menu+"'></div>")
    let btncontainer = $("<div class='"+mstyle.wBtnContainer+"'></div>")
    for(let i of btns)
        btncontainer.append(i)
    menu.append(btncontainer)
    mask.append(menu)
    body.append(mask)
}

export function isInCoursePage() {
    return window.location.href.indexOf("homework/play-videos") != -1
}

export function isInTaskPage() {
    let kv = getUrlInfo(window.location.href)
    let b = ("homeworkId" in kv) && kv.homeworkId!=undefined
    return window.location.href.indexOf('student-task-overview')!=-1 && b
}



export function isInHolidayFrame() {
    let s = getUrlInfo(window.location.href)
    let b = ('sceneId' in s) && s['sceneId']!=undefined;
    return window.location.href.indexOf('holiday') && b
}

export function NoPage() {
    let root = $("<div style='line-height: 25px;'></div>")


    let c:{[p:string]:JQuery<HTMLElement>} = {
        "去任务列表选任务":getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>",()=>{
            location.reload();
            window.location.href="https://teacher.ewt360.com/ewtbend/bend/index/index.html#/student/homework"}),
        "去假期页面":getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>",()=>{
            location.reload();
            window.location.href="https://teacher.ewt360.com/ewtbend/bend/index/index.html#/holiday/student/entry"}),
    }
    root.append($("<h1 style='font-size: 32px;font-weight: bolder'>菜单</h1>"))
    root.append($("<div style='font-size: 12px;margin-top: 5px'>你现在没有打开任何页面,从下面的列表选一项以继续:</div>"))
    let container = $("<div class='"+mstyle.nopageContainer+"'></div>")
    for(let d in c) {
        let ele = $("<div class='"+mstyle.nopageLst+"'><span class='"+mstyle.nopageLstTitle+"'>"+d+"</span></div>")
        c[d].css("margin-left",'auto')
        c[d].css("margin-right",'0')
        ele.append(c[d])
        container.append(ele)
    }
    root.append(container)
    return root
}