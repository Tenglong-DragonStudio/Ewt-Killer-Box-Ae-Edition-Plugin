import $ from "jquery";
import {LogSystem} from './pojo/logsystem';
import {getMenuBtn} from "./utils/jquery_component";
import {
    isInCoursePage,
    isInHolidayFrame,
    isInTaskPage,
    isOnPractisePage,
    renderBackground,
    renderWindow,
    renderWindowMenu
} from "./utils/view_util";

import {SGM_getValue, SGM_info, SGM_registerMenuCommand, SGM_setValue} from "./utils/function";
import {HomeworkView} from "./views/homework_view";
import {input_key_img, log_img, open_img, order_svg, update_svg} from "./utils/resources";
import {getUrlInfo, NetRequest} from "./utils/request";
import {CourseListView} from "./views/CourseListView";
import {CourseView} from "./views/course_view";
import {LogView} from "./utils/log_view";
import {update_info_style} from "./utils/style_manager";

import {User} from "@/pojo/user";
import {ActivateView} from "@/views/activate_view";
import {getLatestVersion} from "./dao/Misc_dao";
import {CheckUpdateView} from "./views/update_view";
import {PurchaseHistoryView} from "./views/purchase_history_view";
import {SceneCourseListView} from "./views/SceneCourseListView";
import {dict} from "@/type";
import {ConfigFactory} from "@/configs/ConfigFactory";
import app_config from "@/app_config";
import {NewUserView} from "@/views/new_user_view";
import {ViewManager} from "@/utils/view_manager";
import {View} from "@/views/view";
import {NoView} from "@/views/no_view";
import {getUser, xhrInit} from "@/utils/network_util";
import {TaskView} from "@/views/TaskView";

export let { version } = SGM_info.script;

export let user: User;

let info:dict = app_config

let closeWindowTimeout: NodeJS.Timeout[] = [];
export let config = new ConfigFactory()
export let requestObject: NetRequest = new NetRequest();
export let viewManager: ViewManager = new ViewManager();

async function openBox() {
    let attr = getUrlInfo();

    let viewComponent: View = new NoView();
    if (isOnPractisePage()) {
        viewComponent = new HomeworkView(attr["paperId"], attr["bizCode"], attr["platform"], attr["homeworkId"])
    } else if (isInTaskPage()) {
        viewComponent = new CourseListView(attr["homeworkId"])
    } else if (isInCoursePage()) {
        viewComponent = new CourseView()
    } else if (isInHolidayFrame()) {
        viewComponent = new SceneCourseListView(attr["sceneId"])
    }
    await viewManager.openView(viewComponent,true)
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
    await viewManager.openView(new NewUserView(),true)
    SGM_setValue("kewt.new_here", "false")
}

async function openUpdateAndVersionBox() {
    let { vcode, update_log, version, location } = await getLatestVersion();

    let view = new CheckUpdateView(update_log, location, version)
    if (info.version < vcode) {
        await viewManager.openView(view,true)
    } else if (await SGM_getValue(`kewt.ver.${info.version}`) === undefined) {
        let root = $(`<div class="${update_info_style.updateLContainer}"></div>`);
        root.append(update_svg, $(`<div class="${update_info_style.updateLNewVerText}">更新日志</div>`));
        let cont = $(`<div class="${update_info_style.updateLNewVerDetailContainer}"></div>`).html(update_log);
        root.append(cont);
        renderBackground();
        renderWindow(root);
        //懒得改了
        SGM_setValue(`kewt.ver.${info.version}`, 1);
    }
}
// 使用事件委托
// 调用 getMenuBtn 时，不直接绑定 click 事件，而是在按钮上添加统一类及 data 属性保存动作
let open = getMenuBtn("red", $(open_img), "打开工具箱", async () => { await openBox(); });

let logbtn = getMenuBtn("green", $(log_img), "程序日志记录", async () => {
    await viewManager.openView(new LogView(),true)
});

let orderHistoryBtn = getMenuBtn("yellow", $(order_svg).css({ height: "20px", width: "20px" }), "付款历史记录", async () => {
    if (user?.id) await viewManager.openView( new PurchaseHistoryView(),true)
    else document.location.href = "https://web.ewt360.com/register/#/login";
});

let taskBtn = getMenuBtn("blue", $("0").css({height: '20px',width: "20px"}),"任务", async () => {
    if (user?.id) await viewManager.openView(new TaskView(),true)
    else document.location.href = "https://web.ewt360.com/register/#/login";
})

function setNetwork() {
    if(config.getValue<boolean>("kewt.config.use_backup_server")) {
        app_config.mip = app_config.backup_server.mip
        app_config.payip = app_config.backup_server.payip
    }
}

export let log: LogSystem;
$(async () => {
    log = await new LogSystem().build()
    await config.loadConfig()
    await config.setBooleanToSlideBar("kewt.config.ic_collect_data")
    await config.setBooleanToSlideBar("kewt.config.use_backup_server")
    SGM_registerMenuCommand(`插件版本:${version}`,()=>{})

    setNetwork()
    xhrInit();

    user = await getUser()

    if(await SGM_getValue("kewt.new_here") == undefined) {
        await openNewUserBox();
    } else {
        await openUpdateAndVersionBox();
    }
    open.addClass("default-open-btn");

    let ikbtn = getMenuBtn("purple", $(input_key_img), "激活", async ()=> {
        if (!user?.id) document.location.href = "https://web.ewt360.com/register/#/login";
        else await viewManager.openView(new ActivateView(),true)
    });
    
    renderWindowMenu([open, ikbtn, orderHistoryBtn, logbtn,taskBtn]);
});

$(document).on("click", ".tm-menu-btn", function(e) {
    const action = $(this).data("action");
    if (typeof action === "function") {
        action.call(this, e);
    }
});

// 主要优化:DOM绘制逻辑重写 event解绑优化(事件委托参考Js文档)