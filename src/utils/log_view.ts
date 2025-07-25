import {View} from "../views/view";
import {log_style} from "./style_manager";
import {log} from "../main";

export class LogView extends View {
    table_dic: Array<{
        name:string,
        width:string,
    }> = [{
        name: "等级",
        width: "20%"
    },{
        name: "时间",
        width: "20%"
    },{
        name: "详细信息",
        width: "60%"
    }]

    async surfaceComponent(): Promise<JQuery<HTMLElement>> {

        let root = $(`<div></div>`)

        root.append(`<div class="${log_style.title}">
            <img width="90px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nO2YzUtVQRjGf6FRYl+koBLIjT4UdCmJILQTAiVF8i8IglbuWkUSQX+CiK50Idgy0oVoECFBgaAYQX5gbQxCcFGRlSMDz4HhcuWSd+bcc2UeGM6c9515n3nOec+cmYGIyoIJVF4CZ06CEAPMAmfTFuITrpjXwDmv0csgZEfXRaDWM0eqQlqAr6q/BS545ilIGipmDtjQ/QegzjNXQdJQMZuBz7ItA/We+QqShorZCKzJ/hFoqlQhFg3AinyfgCtpkIaKeRl4L/8WcDUN0lAxLwHv1GYbuJYGaaiYF4EltfsC3EiDNFTMWmDB+Xm2p0F6nJj/W775IPWJUhaamRJSlnGYKMQvTHwjQkytSkutFuAR0FvA1yTfCNB2xLrqPvAMeAjUlDCOoigWYFD+qTx7Tj+wpP8voMvx3wZ2Hf/vIqcqplxCxmV/DjxRfc55E99lmwDuAPdKHEcQIaeBPeCP1kv2yGdfT93eD6vPvMdxBBHSLNumY0v25a3AC9UfeBxHECEdsq06tlXZbgFvVO/Vx55w2FiZEnJTNnugkGBdtpyzNB8Cup0dYeaEnAf+Aj+AaqBKs9aBZqZR9Xmq9o+zKgTnqdvZaEB1u3216HE2S9ezJsQ4pVv5f6DyT9c+9TkFTKut9f3MgpBOYCav2JnJol8n7q+Au3n9qvShT+r/Mqa3cxTi6jdBXP16hokbKyGmlmeYmFpCTC3PMDG1hJhaWU0tk5FybJwYIRGkjEPrQLvKeIirLQAAAABJRU5ErkJggg==">
        日志</div>`)

        let table_c = $(`<div class="${log_style.logTableContainer}"></div>`)
        let table = $(`<table class="${log_style.logTable}"></table>`)

        let th = $("<thead></thead>")
        let tr = $(`<tr></tr>`)
        for(let i of this.table_dic) {
            tr.append(`<th style="font-weight: bolder;width: ${i.width}"> ${i.name} </th>`)
        }
        th.append(tr)


        let tbody = $(`<tbody style="line-height: 23px"></tbody>`)
        for(let i of log.log_txt) {
            tr = $("<tr></tr>")
            tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[0].width}">${log.dic[i.level]}</td>`))
            tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[1].width}">${i.time}</td>`))
            tr.append($(`<td style="line-height: 13px;text-align:center;font-weight: bolder;width: ${this.table_dic[2].width}">${i.content}</td>`))
            tbody.append(tr)
        }


        table.append(th)
        table.append(tbody)
        table_c.append(table)
        root.append(table_c)

        table_c[0].scrollTop = table_c[0].scrollHeight
        let bottom = $(`<div class="${log_style.bottom}">
    注意:若出现问题,请<span style="color: red">将此页面的截图发送给作者，并打开Github的Issue.</span>
        <a href="https://github.com/SudoSuBash/EWT-Killer-Box-Full/issues" class="${log_style.bottomA}"
            style="">点击去到github页面的issue发送议题</a></div>`)
        root.append(bottom)
        return Promise.resolve(root);
    }

    async onCreate() {

    }

    async AfterCreate() {
        const c = document.querySelector(`.${log_style.logTableContainer}`) as Element;
        if (c) c.scrollTop = c.scrollHeight;
    }
}