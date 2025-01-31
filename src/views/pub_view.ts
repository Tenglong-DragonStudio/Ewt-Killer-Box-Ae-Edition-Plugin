
export abstract class View {
    protected lock:boolean;
    elements:Array<JQuery<Element>>;

    constructor() {
        this.lock = false
        this.elements = [];
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

    abstract surfaceComponent() : Promise<JQuery<HTMLElement>> | JQuery<HTMLElement>;
}