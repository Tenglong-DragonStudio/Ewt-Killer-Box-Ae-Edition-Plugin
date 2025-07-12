import purchaseHistory from "@/css/purchase_history.css";
import { View } from "./pub_view";
import { UserInfoInterface } from "@/dao/UserInfoDao";
import { history_purchase_svg } from "@/utils/resources";

export class PurchaseHistoryView extends View {
    private uInterface: UserInfoInterface;

    table_dic: Array<{
        name:string,
        width:string,
    }> = [{
        name: "支付id",
        width: "20%"
    },{
        name: "商品名",
        width: "20%"
    },{
        name: "价格",
        width: "10%"
    },{
        name: "状态",
        width: "25%"
    },{
        name: "支付时间",
        width: "25%"
    }]

    async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        let val = await this.getOrderItem();
        console.log(val)
        let root =$(`<div class="${purchaseHistory.purchaseHistoryMain}"></div>`)
        root.append(history_purchase_svg)
        root.append($(`<div class="${purchaseHistory.purchaseHistoryText}">历史购买记录</div>`))

        let pare = $(`<div class="${purchaseHistory.purchaseHBuyContainer}"></div>`)

        let table = $(`<table class="${purchaseHistory.purchaseHTable}"></table>`)
        let th = $("<thead></thead>")
        let tr = $(`<tr></tr>`)
        for(let i of this.table_dic) {
            tr.append(`<th style="font-weight: bolder;width: ${i.width}"> ${i.name} </th>`)
        }
        th.append(tr)

        let tbody = $(`<tbody style="line-height: 23px"></tbody>`)
        for(let i of val) {
            tr = $("<tr></tr>")
            tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[0].width}">${i.payid}</td>`))
            tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[1].width}">${i.shop_name}</td>`))
            tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[2].width}">${i.price}</td>`))
            tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[3].width}">${i.status}</td>`))
            tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[2].width}">${i.time}</td>`))
            tbody.append(tr)
        }
        table.append(th)
        table.append(tbody)
        pare.append(table)
        root.append(pare)


        return root
    }
    
    public constructor() {
        super();
        this.uInterface = new UserInfoInterface();
    }

    private async getOrderItem() {
        let dat = await this.uInterface.GetAllOrders();
        return dat["data"]
    }
}