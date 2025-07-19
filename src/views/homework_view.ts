import {View} from "./pub_view";
import {ExamPaperHomeworkService} from "../services/ExamPaperHomeworkService";
import {circle_styles, homework_style, mstyle} from "../utils/style_manager";
import {ProgressBar} from "../component_classes/progress_bar";
import {IQuestion, Option, OptionQuestion} from "../pojo/option";
import {exam_img, unlock_svg} from "../utils/resources";
import {IPaper, Paper} from "../pojo/fih_objects";
import {QuestionComponentDesc } from "../pojo/QuestionCompont";
import app_config from "../app_config";
import {CourseHomeworkController, IHomeworkController} from "@/controller/CourseHomeworkController";
import {delay} from "@/utils/stringutil";
import { ordiBtn } from "@/css/index.css";
import {dict} from "@/type";

export class HomeworkView extends View {
    private homeworkController : CourseHomeworkController;
    private allQues : number;
    private ques : number;
    private paperId: string;

    private progress_s?: ProgressBar;
    private progress_text_f? : JQuery<HTMLElement>
    private progress_text_p? : JQuery<HTMLElement>

    private quesMainComponent : JQuery<HTMLElement>= $();
    private quesSideComponent : JQuery<HTMLElement>=$();
    private quesGroup : Array<QuestionComponentDesc>;
    private first_question_btn : JQuery<HTMLElement> = $();//第一道题目的序号
    private parentContainer: JQuery<HTMLElement>
    private selected_question_btn : JQuery<HTMLElement> = $(); //选中的按钮 

    private root_component: JQuery<HTMLElement>;
    constructor(paperid:string | number,bizcode:string | number,platform:string | number,homeworkid?: string | number) {
        super();
        if(homeworkid==undefined) {
            this.homeworkController=new CourseHomeworkController()
            this.homeworkController.addHomeworkWithPaperId(paperid.toString())
        } else {
            this.homeworkController = new CourseHomeworkController();
            this.homeworkController.addHomeworkInstance(new ExamPaperHomeworkService(
                <string>paperid,
                <string>bizcode,
                <string>platform,
                parseInt(homeworkid.toString())
            ));
        }

        this.paperId = paperid.toString()
        this.allQues = 0
        this.ques = 0
        this.progress_s = undefined
        this.progress_text_f = undefined
        this.progress_text_p = undefined
        this.quesGroup = [];

        this.parentContainer = $(`<div></div>`)
        this.root_component = $()
    }

    public async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        let root = $(`<div></div>`)
        this.root_component = root
        await this.homeworkController.papers[0].getPaperInfo()
        
        
        let avl = await this.homeworkController.papers[0].getPaperAVL();

        if(!avl) {
            this.parentContainer.append(this.lockView())
        } else {
            await this.refreshToF();
        }
        this.root_component.append(this.parentContainer)
        this.root_component.append(this.getFuncBtns())
        return root;
    }

    private async refreshToF() {
        this.parentContainer.empty();
        let paper = await this.homeworkController.papers[0].getPaper()
        let selfpaper = await this.homeworkController.papers[0].getSelfPaper();
        let body = this.getBodyComponent();
        if(paper instanceof Paper && selfpaper instanceof Paper) {
            let head = this.getHeadComponent(selfpaper)
            this.getComponentGroup(paper.questions)
            this.surfaceQuestionsComponent()
            this.first_question_btn.click()

            this.parentContainer.append(head)
            this.parentContainer.append(body)
        } 
    }
    private getFuncBtns() {
        let foot_func = $(`<tndiv class='${homework_style.footFunc}'></tndiv>'`)
        let left = $(`<div class='${homework_style.footFuncLeft}'></div>`)
        let right= $(`<div class='${homework_style.footFuncRight}'></div>`)
        let fill_choice_btn =  $(`<div class='${homework_style.homeworkSubmitBtn}'><label>填充所有题目...</label></div>`)

        left.append(fill_choice_btn)
        foot_func.append(left)
        foot_func.append(right)

        fill_choice_btn.click(async ()=>{
            if(fill_choice_btn.hasClass(`${homework_style.homeworkSubmitBtn}`)) {
                fill_choice_btn.removeClass(`${homework_style.homeworkSubmitBtn}`)
                fill_choice_btn.addClass(`${homework_style.submitUnclickable}`)
                fill_choice_btn.html("<label>请等待填充...</label>")
                let res = await this.homeworkController.FillOptionsAll()
                if(res["code"] != 200) {
                    fill_choice_btn.removeClass(`${homework_style.submitUnclickable}`)
                    fill_choice_btn.addClass(`${homework_style.homeworkSubmitBtn}`)
                    fill_choice_btn.text(`错误:`+res["message"]+`,重新点击以继续`)
                    return
                }

                let finish = false
                while (true) {
                    let dat:dict = await this.homeworkController.GetTask()
                    dat=dat["data"]
                    if(dat == undefined) {
                        fill_choice_btn.text(`错误:无效的任务.`)
                        break
                    } else if(dat["errcode"] != 0) {
                        fill_choice_btn.text(`错误:代码为${dat["errcode"]}/点击重试`)
                        break
                    } else if(dat["all"] == dat["do"]) {
                        fill_choice_btn.text(`填写完成!`)
                        finish=true
                        break
                    } else if(dat["all"] > dat["do"]){
                        dat["progress"] = parseInt(String(dat["do"] / dat["all"] * 1000)) / 10
                        fill_choice_btn.text(`进度:${dat["progress"] * 1000}%`)
                    }
                    await delay(100)
                }

                if(finish) {
                    this.ques = this.allQues = 0
                    let p = await this.homeworkController.papers[0].getSelfPaper();
                    if(p instanceof Paper) {
                        this.getDidCount(p.questions) //重新计算数量
                    }
                    if (this.progress_s instanceof ProgressBar) {
                        this.progress_s.slideValue(this.ques / this.allQues)
                    }
                    fill_choice_btn.html("<label>填写成功!刷新界面以继续...</label>")
                } else {
                    fill_choice_btn.addClass(`${homework_style.homeworkSubmitBtn}`)
                    fill_choice_btn.removeClass(`${homework_style.submitUnclickable}`)
                }
            }
        })

        return foot_func
    }

    private getBodyComponent() {
        let answerMainComponent = $(`<div class='${homework_style.bodyComponent}'></div>`)
        let questionArea = $(`<div class='${homework_style.bodyQuesAreaComponent}'></div>`)
        let questionOptionsArea = $(`<div class='${homework_style.bodyQuessComponent}'></div>`)
        answerMainComponent.append(questionArea)
        answerMainComponent.append(questionOptionsArea)

        this.quesMainComponent = questionArea;
        this.quesSideComponent = questionOptionsArea
        return answerMainComponent
    }

    private surfaceQuestionsComponent() {
        let c = 0;
        for(let i of this.quesGroup) {
            let btn = $(`
            <div class='${homework_style.bodyQuesOptionDot}'>
                <div style='transform: scale(0.75)'>${i.index}</div>
            </div>
            `)

            if(c == 0) {
                this.first_question_btn = btn
            }

            btn.click(()=>{
                if(this.selected_question_btn==btn) return;
                this.selected_question_btn.removeClass(`${homework_style.bodyQuesOptionDotClicked}`)
                this.selected_question_btn = btn
                this.selected_question_btn.addClass(`${homework_style.bodyQuesOptionDotClicked}`)
                
                this.quesMainComponent.empty()
                if(i.parentComp != null) {
                    this.quesMainComponent.append(i.parentComp)
                }
                this.quesMainComponent.append(i.comp)

                $(`.${homework_style.analyzeContainer}`).css("display","none")
                $(`.${homework_style.analyzeContainer}`).slideUp()
                $(`.${homework_style.analyzeBack}`).html("<label>展开</label>")//点击其他按钮,收回解析

            })
            this.quesSideComponent.append(btn)
            c+=1
        }
    }
    
    /**
     * 获得整张试卷的显示控件.
     * @param ques 试卷题目总数
     * @param parentComp 试卷父题目的组件(可选)
     * @param prefix 题目前缀
     */
    private getComponentGroup(ques: IQuestion[],parentComp?:JQuery<HTMLElement>,prefix?: string) {
        for(let index = 0;index < ques.length;index++) {
            let questionNo = index+1;
            let quesNoName = prefix != undefined ? prefix + questionNo :questionNo.toString()
            let comp = this.getAnswerComponent(ques[index],quesNoName)
            let qcdesc;
            if(ques[index].childQuestions.length != 0) 
                this.getComponentGroup(ques[index].childQuestions,comp,quesNoName+"-")
            else {
                if(parentComp != undefined)
                    qcdesc = new QuestionComponentDesc(comp,quesNoName,parentComp)
                else
                    qcdesc = new QuestionComponentDesc(comp,quesNoName)
                this.quesGroup.push(qcdesc)
            } 
        }
    }

    private getAnswerComponent(question:IQuestion,questionNo:string) {
        let answerComponent = $(`<div class='${homework_style.homeworkQuesComponent}' id='${questionNo}'></div>`)
        let titleComponent = $(`<div class='${homework_style.homeworkQuesTitleComponent} ${homework_style.homeworkQuesComponentEle}'></div>`)
        let number = $(`<div class='${circle_styles.quesNumberCircle}'>No.${questionNo}</div>`)
        let score = $(`<div class='${circle_styles.quesNumberCircle}'>${question.score}分</div>`)
        let title_left =  $(`<div class='${homework_style.homeworkQuesTitleLeft}'></div>`)
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesId}'>ID:${question.id}</div>`))
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesType}'>${question.cateName}</div>`))
        titleComponent.append(number)
        if(question.score != undefined && question.score != 0)
            titleComponent.append(score)
        titleComponent.append(title_left)

        let content = $(`<div class='${homework_style.homeworkQuesContent}'></div>`)
        content.append($(`<div>${question.questionContent}</div>`))

        answerComponent.append(titleComponent)
        answerComponent.append(content)

        if((<OptionQuestion>question).options.length != 0) {

            let optionsBox = $(`<div class='${homework_style.homeworkQuesOptions}'></div>`)
            for(let i of (<OptionQuestion>question).options) {
                optionsBox.append(this.getOptionBox(i,question.rightAnswer?.indexOf(i.choice) != -1))
            }
            answerComponent.append(optionsBox)
        } else if (question.rightAnswer.length != 0) {
            let c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
            let analTitle = $(`<div class='${homework_style.quesParse}'>答案</div>`)
            let analcontent = $(`<div class='${homework_style.answerContainer}'></div>`)
            for(let i of question.rightAnswer) {
                analcontent.append("<div>"+i+"</div>")
            }
            c.append(analTitle)
            c.append(analcontent)
            answerComponent.append(c)
        }

        if(question.analyse.length != 0) {
            let c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
            let analTitle = $(`<div class='${homework_style.quesParse}'>解析</div>`)
            let analyzeC = $(`<div class='${homework_style.analyzeBack}'><label>展开</label></div>`)
            let analcontent = $(`<div class='${homework_style.analyzeContainer}'>${question.analyse}</div>`)
            
            this.quesMainComponent.on("click",`.${homework_style.analyzeBack}`,()=>{
                analcontent.slideToggle(app_config.animate.analyze_slide_toggle,()=>{
                    if(analcontent.css("display") == "none") {
                        analyzeC.html("<label>展开</label>")
                    } else  {
                        analyzeC.html("<label>收起</label>")
                    }
                })
            })

            analTitle.append(analyzeC)
            c.append(analTitle)
            c.append(analcontent)
            answerComponent.append(c)
            analcontent.slideUp(0)
        }
        return answerComponent
    }

    private getOptionBox(optionques:Option,right:boolean) {
        let option_box_root = $(`<div class='${homework_style.homeworkOptionBox}'></div>`)

        let opt_box_left = $(`<div 
                class='${homework_style.optionBoxOptionText} 
                        ${right ? homework_style.optionBoxOptionCorrectText : homework_style.optionBoxOptionNotCorrectText}'
                        >${optionques.choice} </div>`)
        let opt_right = $(`<div class='${homework_style.optionBoxOptionContent}'>${optionques.option}</div>`)
        option_box_root.append(opt_box_left)
        option_box_root.append(opt_right)

        return option_box_root
    }

    private getHeadComponent(paperinfo: IPaper) {
        //标题栏
        let titleUp = $(`<div class='${homework_style.homeworkComponent}' style='align-items:center;'></div>`)

        let image = $(`<div class='${homework_style.titleUpComponentImage}'></div>`)
        image.append($(`<img style='height: 100%;width: 120px' class='${homework_style.titleUpComponentImage}' src="${exam_img}"/>`))

        let bsinfo = $(`<div class='${homework_style.titleUpBasicInfo}'></div>`)
        bsinfo.append($(`<div class='${homework_style.titleUpContent}'>${paperinfo.title}</div>`))
        bsinfo.append($(`<div class='${homework_style.titleUpId}'>id:${this.paperId}</div>`))

        let foot = $(`<div class='${homework_style.titleUpProgressDetail}'></div>`)
        this.getDidCount(paperinfo.questions)
        //计算答题数量
        let prog = Math.round(this.ques / this.allQues * 100) / 100;
        let progressc = $(`<div class='${homework_style.titleUpProgress}'>进度:</div>`)
        this.progress_s = new ProgressBar(prog,{"margin-top":"2px"})
        //布置进度条

        progressc.append(this.progress_s.show())
        foot.append(this.progress_text_f || $())
        foot.append(this.progress_text_p || $())
        bsinfo.append(progressc)
        bsinfo.append(foot)
        titleUp.append(image)
        titleUp.append(bsinfo)
        
        this.progress_s.slideFromZero()
        return titleUp;
    }

    private lockView() {
        let root = $(`<div class="${homework_style.lockedC}"></div>`)
        root.append(unlock_svg)
        root.append($(`<div style="
    font-size: 25px;
    font-weight: bold;
">解锁此试卷</div>`))
        root.append($(`<div style="text-align: center;">需要花费 2 点数解锁此试卷的解析.<br>在此次解锁之后,下次将不用再次解锁这份试卷,而可以直接看到解析.</div>`))
        let btn = $(`<div class="${ordiBtn}">解锁</div>`)
        root.append(btn)

        btn.on("click",()=>{
            btn.text("请等待...")
            btn.off("click")
            this.refreshToF();
        })
        return root
    }
    private getDidCount(question:IQuestion[]){
        for(let i of question) {
            if(i.childQuestions.length != 0)
                this.getDidCount(i.childQuestions)
            else {
                if(i.myAnswer != null && i.myAnswer.length != 0)
                    this.ques += 1
                this.allQues += 1
            }
        }
        let prog = Math.round(this.ques / this.allQues * 100) / 100;
        if(this.progress_text_f != undefined)
            this.progress_text_f.text(`完成题目数量:${this.ques}/${this.allQues} (小题)`)
        else
            this.progress_text_f = $(`<div>完成题目数量:${this.ques}/${this.allQues} (小题)</div>`)
        if (this.progress_text_p != undefined)
            this.progress_text_p.text(`${prog * 100}%`)
        else
            this.progress_text_p = $(`<div class="${homework_style.titleUpProgressDetailRight}">${prog * 100}%</div>`)
    }

}