import $ from "jquery";
import { LogSystem } from './pojo/logsystem';
import { UserInfoInterface } from "./dao/UserInfoDao";
import { getUserToken } from "./utils/token";
import { getMenuBtn } from "./utils/jquery_component";
import {
    isInCoursePage, isInHolidayFrame,
    isInTaskPage,
    isOnPractisePage,
    leftComponent,
    NoPage,
    renderBackground,
    renderWindow,
    renderWindowMenu
} from "./utils/window";

import {SGM_getValue, SGM_info, SGM_setValue, swindow} from "./utils/function";
import { HomeworkView } from "./views/homework_view";
import { input_key_img, log_img, open_img, order_svg, setting_img, statisticsbtn_img, update_svg } from "./utils/resources";
import { getUrlInfo } from "./utils/request";
import { TaskView } from "./views/TaskView";
import { CourseView } from "./views/course_view";
import { LogView } from "./views/log_view";
import { log_style, update_info_style } from "./utils/style_manager";

import { User } from "@/pojo/user";
import { ActivateView } from "@/views/activate_view";
import { getLatestVersion } from "./dao/Misc_dao";
import { CheckUpdateView } from "./views/update_view";
import { PurchaseHistoryView } from "./views/purchase_history_view";
import { SceneTaskView } from "./views/SceneTaskView";
import {dict} from "@/type";
import {ConfigFactory} from "@/configs/ConfigFactory";
import app_config from "@/app_config";
import {NewUserView} from "@/views/new_user_view";

export let { version } = SGM_info.script;

export let user: User;

let info:dict = app_config
let config = new ConfigFactory()
let closeWindowTimeout: NodeJS.Timeout[] = [];

async function openBox() {
    renderBackground();
    let attr = getUrlInfo();

    let viewComponent: Promise<JQuery<HTMLElement>>;
    if (isOnPractisePage()) {
        viewComponent = new HomeworkView(attr["paperId"], attr["bizCode"], attr["platform"], attr["homeworkId"]).surfaceComponent();
    } else if (isInTaskPage()) {
        viewComponent = new TaskView().build(attr["homeworkId"]).surfaceComponent()
    } else if (isInCoursePage()) {
        viewComponent = new CourseView().build().then(view => view.surfaceComponent());
    } else if (isInHolidayFrame()) {
        viewComponent = new SceneTaskView().build(attr["sceneId"]).then(view => view.surfaceComponent());
    } else {
        viewComponent = Promise.resolve(NoPage());
    }

    renderWindow(leftComponent(user), await viewComponent, true);
}

async function getUser(): Promise<User> {
    let userInterface = new UserInfoInterface();

    const [dat1, dat0, apidat] = await Promise.all([
        userInterface.getSchoolInfo(),
        userInterface.getBasicUserInfo(),
        userInterface.getApiUserInfo()
    ]); 
    if(dat0 != null) {
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

export async function updateUserInfo() {
    if (!user) {
        user = await getUser();
    }
}

export function addCloseWindowTimeout(fn: (...args: any) => void, delay: number) {
    closeWindowTimeout.push(setTimeout(fn, delay));
}

export function clearAllCloseWindowTimeout() {
    closeWindowTimeout.forEach(clearTimeout);
    closeWindowTimeout.length = 0;
}

async function openNewUserBox() {
        renderBackground()
        renderWindow(undefined,await new NewUserView().surfaceComponent(),true)
        SGM_setValue("kewt.new_here", "false")
}

async function openUpdateAndVersionBox() {
    let { vcode, update_log, version, location } = await getLatestVersion();
    console.log(info.version)
    if (info.version < vcode) {
        renderBackground();
        renderWindow(undefined, await new CheckUpdateView(update_log, location, version).surfaceComponent(), true);
    } else if (await SGM_getValue(`kewt.ver.${info.version}`) === undefined) {
        let root = $(`<div class="${update_info_style.updateLContainer}"></div>`);
        root.append(update_svg, $(`<div class="${update_info_style.updateLNewVerText}">更新日志</div>`));
        let cont = $(`<div class="${update_info_style.updateLNewVerDetailContainer}"></div>`).html(update_log);
        root.append(cont);
        renderBackground();
        renderWindow(undefined, root, true);
        SGM_setValue(`kewt.ver.${info.version}`, 1);
    }
}

// 使用事件委托
// 调用 getMenuBtn 时，不直接绑定 click 事件，而是在按钮上添加统一类及 data 属性保存动作
let open = getMenuBtn("red", $(open_img), "打开工具箱", async () => { await openBox(); });

let logbtn = getMenuBtn("green", $(log_img), "程序日志记录", async () => {
    renderBackground();
    renderWindow(undefined, (<JQuery<HTMLElement>>((new LogView()).surfaceComponent())), true);
    const c = document.querySelector(`.${log_style.logTableContainer}`) as Element;
    if (c) c.scrollTop = c.scrollHeight;
});

let orderHistoryBtn = getMenuBtn("yellow", $(order_svg).css({ height: "20px", width: "20px" }), "付款历史记录", async () => {
    if (user?.id) {
        renderBackground();
        renderWindow(undefined, await new PurchaseHistoryView().surfaceComponent(), true);
    } else {
        document.location.href = "https://web.ewt360.com/register/#/login";
    }
});

function xhrInit() {
    if(config.getValue<boolean>("kewt.config.ic_collect_data")) {
        let openF = swindow.XMLHttpRequest.prototype.open
        swindow.XMLHttpRequest.prototype.open = function (method: string, url: string | URL, ...args:any)  {
            if(url.toString().indexOf("&key=eo^nye1j#!wt2%v)") != -1
                || url.toString().indexOf("aliyun") != -1
                || url.toString().indexOf("track")!=-1) {
                throw new Error("[Ewt-Killer-Box] 万恶的ewt正在用 XMLHttpRequest() 收集用户数据，滚开给老子爬")
            } else {
                return openF.call(this,method,url,args)
            }
        }

        let beacon =  swindow.navigator.sendBeacon
        swindow.navigator.sendBeacon = function (url,data) {
            if(url.toString().indexOf("aliyun") != -1 || url.toString().indexOf("web-log/logstores") != -1) {
                throw new Error("[Ewt-Killer-Box] 万恶的ewt正在用 navigator.sendBeacon() 收集用户数据，滚开给老子爬")
            } else {
                return beacon.call(this,url,data)
            }

        }
    }
}

export let log: LogSystem;
$(async () => {
    log = await new LogSystem().build()
    await config.loadConfig()
    await config.setBooleanToSlideBar("kewt.config.ic_collect_data")

    xhrInit();

    user = await getUser()
    await openNewUserBox();
    if(await SGM_getValue("kewt.new_here") == undefined) {

    } else {
        await openUpdateAndVersionBox();
    }
    open.addClass("default-open-btn");

    let ikbtn = getMenuBtn("purple", $(input_key_img), "激活", async ()=> {
        if (!user?.id) {
            document.location.href = "https://web.ewt360.com/register/#/login";
        } else {
            renderBackground();
            renderWindow(undefined, await new ActivateView().surfaceComponent(), true, undefined, "padding: 0");
        }
    });
    
    renderWindowMenu([open, ikbtn, orderHistoryBtn, logbtn]);
});

$(document).on("click", ".tm-menu-btn", function(e) {
    const action = $(this).data("action");
    if (typeof action === "function") {
        action.call(this, e);
    }
});

// 主要优化:DOM绘制逻辑重写 event解绑优化(事件委托参考Js文档)