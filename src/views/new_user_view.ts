import {View} from "@/views/view";
import {nuser_view_style} from "@/utils/style_manager";
import {getBtn} from "@/utils/jquery_component";
import index from "@/css/index.css";
import {
    course_view,
    main_page_pic,
    main_toolbox_page_img,
    menu_img, operate_count_acti_pic,
    paper_page_pic,
    paper_ulk_page_pic
} from "@/utils/resources";

export class NewUserView extends View {

    pages: Array<JQuery<HTMLElement>>
    targetPage: JQuery<HTMLElement>
    index: number
    pageShowText: JQuery<HTMLElement>

    constructor() {
        super();
        this.pages =
            [$(`
        <div></div>
        <div class="${nuser_view_style.newUserViewTitle}">欢迎使用</div>
        <div>感谢您使用 Ewt Killer Box: Ae Edition.<br>如果你不是第一次使用这款插件，请点击左上角的红点，关闭这个窗口。如果你是第一次使用，请<span style="color: red;font-weight: bolder;">认真看完本教程.</span></div>`),
            $(`<div class="${nuser_view_style.newUserViewTitle}">菜单</div>
                <div style="
            margin-top: 5px;
        ">当你进入 ewt360 网站并且正确安装插件了的时候，若服务器没抽风，左上角会有几个不同颜色的按钮。如图所示。
        <br>
        <div style="
            display: flex;
        ">${menu_img}
            <div style="
            padding: 5px;
            flex: 1;
            line-height: 15px;
            font-weight: bold;
            display: flex;
            align-items: center;
        "> 通常来讲:<br>· 第一个按钮的作用是打开工具箱，点击它可以打开工具箱，进行一系列你想要的操作.<br>· 第二个按钮为商城，点击它可以进行点数充值，礼品卡激活等操操作。<br>· 第三个按钮可以查询历史购买记录，你的所有的购买记录将会显示在这里。<br>· 第四个按钮可以查询程序的历史日志记录。不过目前，此页面已经停止更新。</div></div>
        </div>`),
            $(`<div class="${nuser_view_style.newUserViewTitle}">如何打开工具箱</div>
        <div>进入此页面打开工具箱。<br>${main_page_pic}<br>点击菜单栏的<span style="color:red">红色</span>按钮打开工具箱。</div>`),
            $(`<div class="${nuser_view_style.newUserViewTitle}">如果打开工具箱出现这个页面</div>
        <div><strong>如果你不在课程页面或者课程列表页面进入工具箱，那么会出现这个页面。</strong><br>${course_view}此时，你可以点击对应的"GO"按钮去任务列表，然后进一步点击到课程列表。</div>`),
            $(`<div class="${nuser_view_style.newUserViewTitle}">工具箱的页面</div>
        <div>如果在课程列表点击进入工具箱后，会出现如图所示的页面。<br>${main_toolbox_page_img}你可以勾选右边的按钮，来选择刷课的课时。选择完成后，点击刷课/填写选择题即可。<br><span style="
    color: black;
    font-weight: bolder;
">第一次使用该工具箱，左边会有一个"试用"按钮。如果你有疑问，请点击"试用"，插件将会免费送你6点点数。</span><br><span style="
    color: red;
">注意：请关注一下此页面的“注意”部分，否则后果自负。</span></div>`),
            $(`<div class="new_user_view_new-user-view-title__zLpnv">试卷页面的工具箱</div>
        <div>在试卷页面，你也可以打开工具箱。<br><div style="
    width: 100%;
    display: flex;
">${paper_page_pic}<div style="
    margin-left: 5px;
    flex: 1;
">此页面打开工具箱后，你可以通过点数查看试卷的解析。
</div>${paper_ulk_page_pic}</div></div>`),
            $(`<div class="new_user_view_new-user-view-title__zLpnv">点数充值</div>
        <div>点击紫色的按钮可以进入"点数充值和激活"页面。<br>你可以在里面进行点数充值等操作，以刷更多的课。<br>操作对应的消耗的点数已经列在左边栏里面。${operate_count_acti_pic}</div>`),
            $(`<div class="new_user_view_new-user-view-title__zLpnv">大功告成！</div>
        <div>距离教程完成还有最后一步，点击窗口右上角的小圆点，可以关闭这个窗口。<br>如果你会了的话，现在就可以点击"关闭窗口"来关闭新手教程窗口了。</div>`)]
        this.targetPage = $(`<div style="padding: 10px"></div>`)
        this.targetPage.empty()
        this.index = 0
        this.targetPage.append(this.pages[this.index])
        this.pageShowText = $(`<div style="margin-left: 15px;font-weight: bolder;"></div>`)

    }
    async surfaceComponent():Promise<JQuery<HTMLElement>> {
        let root = $(`<div></div>`)

        root.append(this.targetPage)
        root.append(this.getFooter())
        return Promise.resolve(root)
    }

    private getFooter() {
        let root = $(`<div class="${nuser_view_style.newUserViewFooter}" style="margin-top: 5px;"></div>`)


        let leftBtn = $(`<div class="${index.ordiBtn}"><label>上一页</label></div>`)

        let rightBtn = $(`<div class="${index.ordiBtn}" style="margin-left: auto"><label>下一页</label></div>`)
        leftBtn.on("click",this.LeftPage.bind(this))
        rightBtn.on("click",this.RightPage.bind(this))
        root.append(leftBtn)
        this.UpdatePageShow()
        root.append(this.pageShowText)
        root.append(rightBtn)
        return root
    }

    private LeftPage() {
        this.index = (this.index + this.pages.length - 1) % this.pages.length
        this.targetPage.empty()
        this.targetPage.append(this.pages[this.index])
        this.UpdatePageShow()
    }

    private RightPage() {
        this.index = (this.index + this.pages.length + 1) % this.pages.length
        this.targetPage.empty()
        this.targetPage.append(this.pages[this.index])
        this.UpdatePageShow()
    }

    private UpdatePageShow() {
        this.pageShowText.empty()
        this.pageShowText.append($(`<span>页 ${this.index + 1}/${this.pages.length}</span>`))
    }
}