import {TaskView} from "@/views/TaskView";
import {CourseHomeworkController} from "@/controller/CourseHomeworkController";
import {FinishCourseController} from "@/controller/FinishCourseController";
import {user} from "@/main";
import {MissionService} from "@/services/MissionService";
import {NoPage} from "@/utils/window";

export class SceneTaskView extends TaskView {
    sceneId: string;
    loadComplete: number
    constructor() {
        super();
        this.sceneId = ""
        this.loadComplete = 0 //Suspend
    }


    build(sceneid:string): this {
        this.sceneId = sceneid
        super.fihHomework = new CourseHomeworkController().buildWithoutLessonId()
        super.ficCourse = new FinishCourseController()
        new MissionService(user).buildWithSceneId(sceneid).then((res)=>{
            this.loadComplete = 1
            super.mission = res
        }).catch(()=>{
            this.loadComplete = -1
        })
        return this
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
                    resolv(NoPage())
                }
            })

        })
    }
}