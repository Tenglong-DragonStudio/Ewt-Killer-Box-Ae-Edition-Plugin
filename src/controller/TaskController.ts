import {APIServerDao} from "@/dao/api_server_dao";
import {MyTask} from "@/pojo/MyTask";

export class TaskController {
    taskDao: APIServerDao
    public constructor() {
        this.taskDao = new APIServerDao()
    }

    public async GetUserTasks():Promise<Array<MyTask>> {
        let c = await this.taskDao.GetUserTasks();
        return c.data["tasks"];
    }

    public async CancelTasks(tid:string): Promise<boolean> {
        let c = await this.taskDao.CancelTask(tid);
        return c["code"] == 200
    }

    public async DeleteTasks(tid:string): Promise<boolean> {
        let c = await this.taskDao.DeleteTask(tid);
        return c["code"] == 200
    }
}