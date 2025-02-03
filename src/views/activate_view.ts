import { activateLeftBarContainerElement } from "@/css/activate.css";
import { UserInfoInterface } from "@/dao/UserInfoDao";
import { addCloseWindowTimeout, updateUserInfo, user } from "@/main";
import { check_ok_img, donate_img, fail_img, gift_card_img, wechat_pay_img, zfb_img } from "@/utils/resources";
import { activate_style, mstyle, shop_style } from "@/utils/style_manager";
import { closeWindow } from "@/utils/window";
import {View} from "@/views/pub_view";
import { dict } from "../type";
import { ShopItem } from "@/pojo/shopitems";
import { activateInfoBox, activateInfoKvV } from "@/css/index.css";

interface SelectBoxElement {
    ():JQuery<HTMLElement>
}

interface SelectBoxElementAsync {
    ():Promise<JQuery<HTMLElement>>
}
export class ActivateView extends View {
    right:JQuery<HTMLElement>;
    selected_page: number
    userInfo:UserInfoInterface
    selected_element: JQuery<HTMLElement>

    constructor() {
        super();
        this.userInfo = new UserInfoInterface();
        this.selected_element = $()
        this.selected_page = 0;
        let right = $(`<div class="${activate_style.activatePage}">从左边选择一个页面以继续.</div>`)
        this.right = right
    }
    surfaceComponent(): JQuery<HTMLElement> {
        let root = $(`<div style="display:flex;"></div>`);
        
        let leftbar = $(`<div class="${activate_style.activateLeftBar}"></div>`)

        leftbar.append($(`<div class="${activate_style.activateLeftBarTitle}">激活</div>`))
        this.pushElement(leftbar)

        
        let func_container = $(`<div class="${activate_style.activateLeftBarContainer}"></div>`)
        let img = $(gift_card_img)
        img.css("height","20px")
        img.css("width","20px")
        func_container.append(this.leftBarElement(img,"礼品卡兑换",()=>{return this.CodeActiveBox()},1))
        func_container.append(this.leftBarElement($(donate_img),"商城",()=>{return this.PurchaseBox()},2))
        leftbar.append(func_container)

        let r = $(`<div class="${activateInfoBox}" style="
    margin: 0 10px;
    margin-top: auto;
    margin-bottom: 10px;
"></div>`)
        r.append($(`<div style="display: flex;font-size: 11px;font-weight: bold;"><div>操作消耗点数</div</div>`))
        r.append($(`<div style="display: flex"><div>刷课</div><div class="${activateInfoKvV}">2</div>`))
        r.append($(`<div style="display: flex"><div>填写选择题</div><div class="${activateInfoKvV}">1</div>`))
        r.append($(`<div style="display: flex"><div>解锁试卷解析</div><div class="${activateInfoKvV}">2</div>`))
        
        leftbar.append(r)
        root.append(leftbar)
        root.append(this.right)
        return root;
    }

    private leftBarElement(svg:JQuery<Element>,text:string,page:SelectBoxElement,page_id:number) {
        let c = $(`<div class="${activateLeftBarContainerElement}"></div>`)
        c.append(svg)
        c.append($(`<div class="${activate_style.activateLeftBarContainerElementText}">${text}</div>`))
        c.on('click',()=>{
            this.SwitchPage(c,page(),page_id)
        })
        return c;
    }

    private async leftBarElementAsync(svg:JQuery<Element>,text:string,page:SelectBoxElementAsync,page_id:number) {
        let c = $(`<div class="${activateLeftBarContainerElement}"></div>`)
        c.append(svg)
        c.append($(`<div class="${activate_style.activateLeftBarContainerElementText}">${text}</div>`))
        c.on('click',async ()=>{
            this.SwitchPage(c,await page(),page_id)
        })
        return c;
    }

    private SwitchPage(btn:JQuery<HTMLElement>,page:JQuery<HTMLElement>,id:number) {
        if(this.selected_page == id)  return
        this.selected_element.removeClass(activate_style.activateEnabledSelection)
        this.selected_element = btn
        this.selected_element.addClass(activate_style.activateEnabledSelection)
        this.right.empty();
        this.right.append(page)
        this.selected_page = id
    }

    private CodeActiveBox() {
        let root = $(`<div class="${activate_style.activatePageContainer}"></div>`)
        let img = $(gift_card_img)
        img.css("height","100px")
        img.css("width","100px")
        root.append(img)
        root.append($(`<div class="${activate_style.activateByCodeText}">礼品卡兑换</div>`))

        let box = $(`<div style="width: 300px;"></div>`)
        box.append($(`<div style="font-size: 10px;">输入礼品卡代码</div>`))

        let input = $(`<input type="text" class="${activate_style.activateByCodeInput}" placeholder="Example:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX">`)
        box.append(input)
        root.append(box)

        let status_text = $(`<div class="${activate_style.activateByCodeStatus}"></div>`)
        let click_btn = $(`<div class="${mstyle.ordiBtn}" style="
    font-size: 10px;">点此兑换</div>`)
        root.append(status_text)
        root.append(click_btn)
        input.on("input",()=>{
            status_text.text("")
        })
        click_btn.on("click",async ()=>{
            let val = input.val();
            input.attr("contenteditable", "false")
            status_text.css("color","green")
            status_text.text("请等待...")
            const matchreg = /^([a-zA-Z0-9]{5}\-){4}([a-zA-Z0-9]{5})$/
            if(val == undefined || val.toString() == "") {
                status_text.css("color","red")
                status_text.text("E:请输入礼品卡代码.")
                input.attr("contenteditable", "true")
                return
            } else if(val.toString().match(matchreg) == null) {
                status_text.css("color","red")
                status_text.text("E:请输入正确的礼品卡代码.")
                input.attr("contenteditable", "true")
                return
            }
            let data = await this.userInfo.UserCodeActive(val.toString())
            status_text.text("")
            status_text.css("color","red")
            if(data["code"] != 200) {
                input.attr("contenteditable", "true")
                status_text.text("E:"+data.message)
            } else {
                this.selected_page = 0
                this.right.empty();
                this.right.append($(`
                    ${check_ok_img}
                    <div style="
    font-size: 20px;
    font-weight: bolder;
">成功激活</div>
    <div>已经成功通过此礼品卡兑换 ${data["data"]["count"]} 个操作点.</div>
    <div>5 秒后将关闭此窗口.</div>
                    `))
                await updateUserInfo();
                let tid = addCloseWindowTimeout(()=>{
                    closeWindow();
                },5000)
            }
        })


        return root
    }

    private PurchaseBox() {
        let selected_sid = -1,selected_container:JQuery<HTMLElement> | null = null;
        let root = $(`<div class="${shop_style.shopBaseElement}"></div>`)
        root.append($(`<div class="${shop_style.shopTop}">商城</div>`))
        root.append($(`<div class="${shop_style.shopSubTitle}">以下是商城中您可以买到的所有商品.</div>`))

        
        let container = $(`<div class="${shop_style.shopContainer}"></div>`)
        

        root.append(container)
        
        setTimeout(async ()=>{
            let all_goods:dict = await this.userInfo.GetAllGoods();
            let item:ShopItem[] = []
            if(all_goods["code"] != 0) {
                let data = all_goods["data"]
                for(let i of data) {
                    item.push({
                        img: i["picture"],
                        title: i["name"].toString(),
                        price: i["money"],
                        sid: i["goodid"]
                    })
                }
            }
            for(let i of item) {
                let box = this.GetItemsBox(i.img,i.title,i.price)
                container.append(box)
                box.on('click',()=>{
                    selected_sid = i.sid
                    if(selected_container != null) {
                        selected_container.removeClass(shop_style.shopItemSelected)
                    }
                    selected_container = box
                    selected_container.addClass(shop_style.shopItemSelected)
                })
            }
        })
        let tail = $(`<div class="${shop_style.shopPayFooter}"></div>`)
        
        let zfbbtn = $(`<div class="${mstyle.ordiBtn} ${shop_style.shopPaywayImg}">${zfb_img} 支付宝</div>`)
        let wxbtn = $(`<div class="${mstyle.ordiBtn} ${shop_style.shopPaywayImg}" >${wechat_pay_img} 微信</div>`)
    
        let text_status = $(`<div style="
            margin: 5px 0;
            font-size: 10px;
        ">点击下面任意一个支付方式以进行支付</div>`)
        tail.append(zfbbtn)
        tail.append(wxbtn)
        root.append(text_status)
        root.append(tail)


        zfbbtn.on('click',async ()=>{
            let res = await pay(2,this.userInfo);
            if(res!=-1) {
                this.setStatus(true)
                root.empty();
                root.append(this.payPage(res["qrcode"],res["payId"],"支付宝",res["price"]));
            }})
        wxbtn.on('click',async ()=>{
            let res = await pay(1,this.userInfo);
            if(res!=-1) {
                this.setStatus(true)
                root.empty();
                root.append(this.payPage(res["qrcode"],res["payId"],"微信",res["price"]));
            }
        })
        
        async function pay(way:number,uinfo:UserInfoInterface) {
            if(selected_sid == -1) {
                text_status.css("color","red")
                text_status.text("请先选择一个商品后再继续.")
                return -1;
            } else {
                let res = await uinfo.Purchase(selected_sid,way)
                if(res["code"] != 200) {
                    text_status.text("错误:"+res["message"])
                    return -1;
                } else {
                    return res["data"];
                }
            }
        }


        return root
    }
    
    private payPage(qrcode:string,id:string,way:string,price:string) {
        let root = $(`<div class="${shop_style.shopWaitForPay}"></div>`)
        root.append(`<div style="
    font-size: 35px;
    font-weight: bolder;
">付款环节</div>`)
        let img = $(`<img src="${qrcode}">`)
        img.css("width","100px")
        root.append(img)
        
        let price_text = $(`<div style="
    color: red;
    font-size: 20px;
    margin-top: 7px;
">RMB ${price}</div>`)
        let att = $(`<div style="font-size: 10px;text-align: center;line-height: 12px;">*注:因为一些原因,可能实际付的款比标注的多0.5元以内.<br>这属于正常现象.</div>`)
        root.append(price_text)
        root.append(att)
        let time = 300;
        let f = $(`<div style="text-align:center">请在 ${time} 秒内完成付款.<br>等到付款结束后,此页面将会刷新.</div>`)
        root.append(f)
        let info = $(`<div class="${shop_style.shopPayInfo}">订单ID: ${id}<br>订单付款方式: ${way}</div>`)
        root.append(info)

        let wrong = $(`<div style="
    margin-top: 5px;
    font-size: 10px;
">点错了?</div>`)
        let a = $(`<a href="#" style="
    font-size: 10px;
    color: #1890ff;
    text-decoration: underline;
">点击取消订单</a>`)
        
        wrong.append(a)
        root.append(wrong)

        a.on('click',async ()=>{
            await this.userInfo.CancelOrder(id)
        })

        let c = setInterval(async ()=>{
            if(time > 0) {
                f.empty();
                f.append($(`<div style="margin-top: 3px;text-align:center">请在 ${time-1} 秒内完成付款.<br>等到付款结束后,此页面将会刷新.</div>`))

                let res = await this.userInfo.GetPayStatus(id)
                if(res["code"] != 103) {
                    if(res["code"] == 105) {
                        clearInterval(c);
                        let view = this.GetStatusView(fail_img,`订单号为 ${id} 的订单已经被用户取消.`,"失败")
                        root.empty();
                        root.append(view)
                    } else {
                        time -= 1;
                    }
                } else {
                    clearInterval(c);
                    root.empty();
                    let view = this.GetStatusView(check_ok_img,`订单号为 ${id} 的订单已成功支付.`,"成功",res["data"]["desc"])
                    root.append(view)
                }
            } else {
                clearInterval(c);
                let view = this.GetStatusView(fail_img,`订单号为 ${id} 的订单已经超时,不能继续完成支付.`,"失败")
                root.empty();
                root.append(view)
            }
        },1000)

        return root
    }

    private GetStatusView(img:string,text:string,text2:string,desc?:dict) {
        let root = $(`<div style="
    display: flex;
    align-items: center;
    flex-direction: column;
"></div>`)
        root.append($(img))
        root.append($(`<div style="
    font-size: 30px;
    font-weight: bolder;
">${text2}</div>`))

        let c = $(`<div style="
    text-align: center;
">${text}</div>
</div>`)
        if(desc != undefined) {
            let r = $(`<span ><br><span style="font-size:10px">此订单的的一些详细信息如下:</span></span>`)
            if(desc["important"]) {
                r.append($(`<br><span style="font-size: 14px;
    font-weight: bolder;
    font-family: fantasy;">${desc["important"]}</span>`))
            } 
            if(desc["unimportant"]) {
                r.append($(`<br>${desc["unimportant"]}`))
            }
            c.append(r)
        }
        root.append(c)
        let a = $(`<a href="#" style="
            font-size: 10px;
            color: #1890ff;
            text-decoration: underline;
        ">点击刷新页面</a>`)
                a.on("click",function(){
                    location.reload();
                })
        root.append(a)
        return root
    }
    private GetItemsBox(img:string,title:string,price:number) {
        let root = $(`<div class="${shop_style.shopItem}"></div>`)
        root.append($(`<img src="${img}" class="${shop_style.shopItemImg}">`))
        root.append($(`<div class="${shop_style.shopItemTitle}">${title}</div>`))
        root.append($(`<div class="${shop_style.shopItemPriceText}"><span style="
    font-size: 10px;
">RMB</span><span style="
    margin-left: 4px;
    font-weight: bolder;
">${price}</span></div>`))
        return root
    }


}