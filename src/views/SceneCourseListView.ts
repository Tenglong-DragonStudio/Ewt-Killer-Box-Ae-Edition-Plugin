import {CourseListView} from "@/views/CourseListView";
import {CourseHomeworkController} from "@/controller/CourseHomeworkController";
import {FinishCourseController} from "@/controller/FinishCourseController";
import {user} from "@/main";
import {MissionService} from "@/services/MissionService";

export class SceneCourseListView extends CourseListView {
    sceneId: string;
    loadComplete: number

    constructor(sceneid:string) {
        super("");
        this.sceneId = sceneid
        this.loadComplete = 0 //Suspend
    }


    async onCreate() {
        super.fihHomework = new CourseHomeworkController().buildWithoutLessonId()
        super.ficCourse = new FinishCourseController()
        new MissionService(user).buildWithSceneId(this.sceneId).then((res)=>{
            this.loadComplete = 1
            super.mission = res
        }).catch(()=>{
            this.loadComplete = -1
        })
    }

    async loadData() {
        return await super.loadData()
    }

    async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        return new Promise((resolv,rejekt) => {
            setInterval(async ()=>{
                if(this.loadComplete == 1) {
                    resolv(await super.surfaceComponent())
                } else {
                    resolv($(`<div>当前没有任务.</div>`))
                }
            })

        })
    }
}