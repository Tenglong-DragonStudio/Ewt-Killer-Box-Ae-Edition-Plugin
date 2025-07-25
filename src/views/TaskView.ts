import {View} from "@/views/view";
import {
    taskListEachItemTitle,
    taskListElementContainer,
    taskListTitle, taskOperateBtns, taskStatusEachItemContainer,
    taskStatusItemContainer, taskStatusItemLeft, tasksContainer
} from "@/css/task_view.css";
import {dict} from "@/type";
import {getDateTimeFromStamp} from "@/utils/stringutil";
import {ProgressBar} from "@/component_classes/progress_bar";
import {ordiBtn} from "@/css/index.css";
import {TaskController} from "@/controller/TaskController";
import {MyTask} from "@/pojo/MyTask";

export class TaskView extends View {
    taskController: TaskController;
    taskInfos: MyTask[]
    constructor() {
        super();
        this.taskController = new TaskController();
        this.taskInfos = [];
    }
    async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        let root: JQuery<HTMLElement> = $(`<div></div>`);
        root.append($(`<div  class="${taskListTitle}">任务列表</div>`))
        let container: JQuery<HTMLElement> = $(`<div class="${tasksContainer}"></div>`);
        this.taskController.GetUserTasks().then(tasks => {
            this.taskInfos = tasks
            container.empty()
            container.append(this.Tasks())
        })
        let r = setInterval(()=>{
            let forbid_request = this.forbid_request
            this.taskController.GetUserTasks().then(tasks => {
                if(forbid_request) return
                this.taskInfos = tasks
                container.empty()
                container.append(this.Tasks())
            })
        },1500)
        root.append(container)
        return Promise.resolve(root)
    }

    private Tasks() {
        let root: JQuery<HTMLElement> = $(`<div style="width: 100%;text-align: center"></div>`)
        if(this.taskInfos.length != 0) {
            for(let i of this.taskInfos) {
                root.append(this.EachTaskItem(i))
            }
        } else {
            root.append(`<div>目前没有任务.</div>`)
        }

        return root
    }

    private EachTaskItem(
        taskinfo: dict
    ) {

        let prog = taskinfo["prog"]
        let did:number = prog["do"],all:number = prog["all"]
        let startTime = taskinfo["start_time"]
        let tid = taskinfo["tid"]
        let error = taskinfo["error"]

        let progress = parseInt(String(did / all * 1000)) / 10
        if(progress < 0) progress = 1

        let root: JQuery<HTMLElement> = $(`<div class="${taskListElementContainer}"></div>`)
        let statusBar: JQuery<HTMLElement> = $(`<div class="${taskStatusItemContainer}"></div>`)
        statusBar.append(getStatusBarKv("进度", `${progress}%`))
        if(did>=0) {
            if(did == all) statusBar.append(getStatusBarKv("任务状态",`<span style="color:green">完成</span>`))
            else  statusBar.append(getStatusBarKv("任务状态",`进行中`))
        } else {
            statusBar.append(getStatusBarKv("任务状态",`<span style="color:red">错误(${error.message})</span>`))
        }

        statusBar.append(getStatusBarKv("任务数",`${did}/${all}`))
        statusBar.append(getStatusBarKv("任务类型",`${taskinfo["type"]}`))
        statusBar.append(getStatusBarKv("开始时间",`${getDateTimeFromStamp((startTime * 1000).toString())}`))

        root.append($(`<div class="${taskListEachItemTitle}">任务 ${tid}</div>`))
        root.append(statusBar)
        let bar:ProgressBar
        if(error.code == 0) {
            bar = new ProgressBar(progress / 100);
        } else bar = new ProgressBar(progress,{},"red");

        root.append(bar.show());
            root.append(this.getOperateBtns(tid,error))
        return root

        function getStatusBarKv(key:string, value:string) {
            return $(`<div class="${taskStatusEachItemContainer}">
                    <span class="${taskStatusItemLeft}">${key}</span><span>${value}</span>
                </div>`)
        }


    }

    private getOperateBtns(tid:string,error: dict) {
        let root = $(`<div class="${taskOperateBtns}"></div>`)


        if(error.code != 0) {
            let delete_btn = $(`<div class="${ordiBtn}" style="margin-right: 5px;">删除</div>`)
            delete_btn.on('click',async () => {
                await this.taskController.DeleteTasks(tid)
            })
            root.append(delete_btn)
        } else {
            let cancel_btn = $(`<div class="${ordiBtn}">取消</div>`)
            cancel_btn.on("click",async () => {
                await this.taskController.CancelTasks(tid)
            })
            root.append(cancel_btn)
        }

        return root
    }
}