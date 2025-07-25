import {UUID} from "@/utils/stringutil";


export abstract class View {
    protected lock:boolean;
    elements:Array<JQuery<Element>>;
    viewId: string
    protected forbid_request: boolean

    constructor() {
        this.lock = false
        this.elements = [];
        this.viewId = UUID()
        this.forbid_request = false
    }

    pushElement(ele:JQuery<HTMLElement>) {
        ele.css("position","relative")
        this.elements.push(ele)
    }
    setStatus(lock:boolean) {
        if(lock) {
            for(let i of this.elements) {
                i.prepend($(`<div style='position:absolute;top:0;left:0;height:100%;width:100%;z-index:90;' class="mask"></div>`))
            }
        } else {
            let mask = $(".mask")
            for(let c of mask)
                $(c).remove()
        }
        this.lock = lock;
    }

    getViewId() {
        return this.viewId
    }

    async onDestroy() {
        this.forbid_request = true
    }

    async onCreate() {

    }

    async AfterCreate() {

    }
    abstract surfaceComponent() : Promise<JQuery<HTMLElement>>;
}