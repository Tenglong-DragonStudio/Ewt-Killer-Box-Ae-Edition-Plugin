import { View } from "./pub_view";
import { ExamPaperHomeworkService } from "../services/ExamPaperHomeworkService";
import { CourseHomeworkController } from "@/controller/CourseHomeworkController";
import { ProgressBar } from "../component_classes/progress_bar";
import { IQuestion, Option, OptionQuestion } from "../pojo/option";
import { Paper } from "../pojo/fih_objects";
import { QuestionComponentDesc } from "../pojo/QuestionCompont";
import { delay } from "@/utils/stringutil";
import { ordiBtn } from "@/css/index.css";
import { homework_style, circle_styles, mstyle } from "../utils/style_manager";
import { exam_img, unlock_svg } from "../utils/resources";
import { dict } from "@/type";

export class HomeworkView extends View {
    private homeworkController: CourseHomeworkController;
    private allQues = 0;
    private ques = 0;
    private paperId: string;
    private progress_s?: ProgressBar;
    private progress_text_f?: JQuery<HTMLElement>;
    private progress_text_p?: JQuery<HTMLElement>;
    private quesMainComponent: JQuery<HTMLElement> = $();
    private quesSideComponent: JQuery<HTMLElement> = $();
    private quesGroup: QuestionComponentDesc[] = [];
    private first_question_btn: JQuery<HTMLElement> = $();
    private selected_question_btn: JQuery<HTMLElement> = $();
    // 使用一个固定 id 的容器，保证委托事件绑定后不会因页面切换而丢失
    private parentContainer: JQuery<HTMLElement> = $("<div id='homework-view-container'></div>");
    private root_component: JQuery<HTMLElement> = $();

    constructor(paperid: string | number, bizcode: string | number, platform: string | number, homeworkid?: string | number) {
        super();
        this.paperId = paperid.toString();
        this.homeworkController = new CourseHomeworkController();
        if (homeworkid === undefined) {
            this.homeworkController.addHomeworkWithPaperId(paperid.toString());
        } else {
            this.homeworkController.addHomeworkInstance(
                new ExamPaperHomeworkService(paperid.toString(), bizcode.toString(), platform.toString(), parseInt(homeworkid.toString()))
            );
        }
    }

    public async surfaceComponent(): Promise<JQuery<HTMLElement>> {
        this.root_component = $("<div></div>");
        await this.homeworkController.papers[0].getPaperInfo();
        const available = await this.homeworkController.papers[0].getPaperAVL();
        if (!available) {
            this.parentContainer.append(this.lockView());
        } else {
            await this.refreshToF();
        }
        this.root_component.append(this.parentContainer, this.getFuncBtns());

        // 委托绑定：在 parentContainer 上统一绑定“填充”和“交卷”按钮的事件
        this.parentContainer.on("click", ".hw-fill-choice-btn", (e) => {
            const btn = $(e.currentTarget);
            this.handleFillChoice(btn);
        });
        this.parentContainer.on("click", ".hw-submit-btn", (e) => {
            const btn = $(e.currentTarget);
            this.handleSubmit(btn);
        });
        // 委托绑定：题目选择按钮委托于 quesSideComponent
        this.quesSideComponent.on("click", ".hw-ques-btn", (e) => {
            const btn = $(e.currentTarget);
            const idx = btn.data("index");
            if (idx === undefined) return;
            const qDesc = this.quesGroup[idx];
            if (this.selected_question_btn.is(btn)) return;
            if (this.selected_question_btn) {
                this.selected_question_btn.removeClass(homework_style.bodyQuesOptionDotClicked);
            }
            this.selected_question_btn = btn.addClass(homework_style.bodyQuesOptionDotClicked);
            this.quesMainComponent.empty().append(qDesc.parentComp || "", qDesc.comp);
            $(`.${homework_style.analyzeContainer}`).css("display", "none").slideUp();
            $(`.${homework_style.analyzeBack}`).html("<label>展开</label>");
        });

        return this.root_component;
    }

    private async refreshToF() {
        this.parentContainer.empty();
        const paper = await this.homeworkController.papers[0].getPaper();
        const selfPaper = await this.homeworkController.papers[0].getSelfPaper();
        const body = this.getBodyComponent();
        if (paper instanceof Paper && selfPaper instanceof Paper) {
            const head = this.getHeadComponent(selfPaper);
            this.getComponentGroup(paper.questions);
            this.surfaceQuestionsComponent();
            // 模拟点击第一个题目
            this.first_question_btn.trigger("click");
            this.parentContainer.append(head, body);
        }
    }

    private getFuncBtns() {
        const foot_func = $(`<div class='${homework_style.footFunc}'></div>`);
        const left = $(`<div class='${homework_style.footFuncLeft}'></div>`);
        const right = $(`<div class='${homework_style.footFuncRight}'></div>`);
        // 创建按钮时只添加对应的类，事件由委托统一处理
        const fill_choice_btn = $(`<div class='${homework_style.homeworkSubmitBtn} hw-fill-choice-btn'><label>填充所有题目...</label></div>`);
        const submit_btn = $(`<div class='${homework_style.homeworkSubmitBtn} hw-submit-btn'><label>一键交卷</label></div>`);
        left.append(fill_choice_btn);
        right.append(submit_btn);
        foot_func.append(left, right);
        return foot_func;
    }

    private async handleFillChoice(btn: JQuery<HTMLElement>) {
        if (btn.hasClass(homework_style.homeworkSubmitBtn)) {
            btn.removeClass(homework_style.homeworkSubmitBtn)
                .addClass(homework_style.submitUnclickable)
                .html("<label>请等待填充...</label>");
            await this.homeworkController.FillOptionsAll();
            let finished = false;
            while (true) {
                const dat:dict = await this.homeworkController.GetTask();
                if (dat["all"] === dat["do"]) {
                    btn.text("填写完成!");
                    finished = true;
                    break;
                } else if (dat["state"] >= 0) {
                    btn.text(`进度 ${Math.round(dat["progress"] * 1000) / 10}%`);
                } else {
                    btn.text(`填写失败.(${dat["code"]})`);
                    break;
                }
                await delay(100);
            }
            if (finished) {
                this.ques = this.allQues = 0;
                const p = await this.homeworkController.papers[0].getSelfPaper();
                if (p instanceof Paper) {
                    this.getDidCount(p.questions);
                }
                if (this.progress_s) {
                    this.progress_s.slideValue(this.ques / this.allQues);
                }
                btn.html("<label>填写成功!刷新界面以继续...</label>");
            }
        }
    }

    private async handleSubmit(btn: JQuery<HTMLElement>) {
        if (btn.hasClass(homework_style.homeworkSubmitBtn)) {
            btn.removeClass(homework_style.homeworkSubmitBtn)
                .addClass(homework_style.submitUnclickable)
                .html("<label>请等待交卷...</label>");
            await this.homeworkController.FinishAll();
            let finished = false;
            while (true) {
                const dat:dict = await this.homeworkController.GetTask();
                if (dat["all"] === dat["do"]) {
                    btn.text("交卷完成!");
                    finished = true;
                    break;
                } else if (dat["state"] >= 0) {
                    btn.text(`交卷中...进度 ${Math.round(dat["progress"] * 1000) / 10}%`);
                } else {
                    btn.text("交卷失败.(-1)");
                    break;
                }
                await delay(100);
            }
            if (finished) {
                btn.html("<label>交卷成功!5秒后关闭页面...</label>");
                setTimeout(() => {
                    window.close();
                }, 5000);
            }
        }
    }

    private getBodyComponent() {
        const answerMainComponent = $(`<div class='${homework_style.bodyComponent}'></div>`);
        const questionArea = $(`<div class='${homework_style.bodyQuesAreaComponent}'></div>`);
        const questionOptionsArea = $(`<div class='${homework_style.bodyQuessComponent}'></div>`);
        answerMainComponent.append(questionArea, questionOptionsArea);
        this.quesMainComponent = questionArea;
        this.quesSideComponent = questionOptionsArea;
        return answerMainComponent;
    }

    private surfaceQuestionsComponent() {
        this.quesGroup.forEach((qDesc, index) => {
            const btn = $(`
                <div class='${homework_style.bodyQuesOptionDot} hw-ques-btn' data-index='${index}'>
                    <div style='transform: scale(0.75)'>${qDesc.index}</div>
                </div>
            `);
            if (index === 0) {
                this.first_question_btn = btn;
            }
            this.quesSideComponent.append(btn);
        });
    }
    
    /**
     * 递归获取题目组件组
     */
    private getComponentGroup(ques: IQuestion[], parentComp?: JQuery<HTMLElement>, prefix?: string) {
        for (let index = 0; index < ques.length; index++) {
            const questionNo = index + 1;
            const quesNoName = prefix !== undefined ? prefix + questionNo : questionNo.toString();
            const comp = this.getAnswerComponent(ques[index], quesNoName);
            if (ques[index].childQuestions.length !== 0) {
                this.getComponentGroup(ques[index].childQuestions, comp, quesNoName + "-");
            } else {
                const qcdesc = new QuestionComponentDesc(comp, quesNoName, parentComp);
                this.quesGroup.push(qcdesc);
            }
        }
    }

    private getAnswerComponent(question: IQuestion, questionNo: string) {
        const answerComponent = $(`<div class='${homework_style.homeworkQuesComponent}' id='${questionNo}'></div>`);
        const titleComponent = $(`<div class='${homework_style.homeworkQuesTitleComponent} ${homework_style.homeworkQuesComponentEle}'></div>`);
        const number = $(`<div class='${circle_styles.quesNumberCircle}'>No.${questionNo}</div>`);
        const score = $(`<div class='${circle_styles.quesNumberCircle}'>${question.score}分</div>`);
        const title_left = $(`<div class='${homework_style.homeworkQuesTitleLeft}'></div>`);
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesId}'>ID:${question.id}</div>`));
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesType}'>${question.cateName}</div>`));
        titleComponent.append(number);
        if (question.score !== undefined && question.score !== 0) {
            titleComponent.append(score);
        }
        titleComponent.append(title_left);

        const content = $(`<div class='${homework_style.homeworkQuesContent}'></div>`);
        content.append($(`<div>${question.questionContent}</div>`));

        answerComponent.append(titleComponent, content);

        if ((<OptionQuestion>question).options.length !== 0) {
            const optionsBox = $(`<div class='${homework_style.homeworkQuesOptions}'></div>`);
            for (let i of (<OptionQuestion>question).options) {
                optionsBox.append(this.getOptionBox(i, question.rightAnswer?.indexOf(i.choice) !== -1));
            }
            answerComponent.append(optionsBox);
        } else if (question.rightAnswer.length !== 0) {
            const c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
            const analTitle = $(`<div class='${homework_style.quesParse}'>答案</div>`);
            const analcontent = $(`<div class='${homework_style.answerContainer}'></div>`);
            for (let i of question.rightAnswer) {
                analcontent.append("<div>" + i + "</div>");
            }
            c.append(analTitle, analcontent);
            answerComponent.append(c);
        }

        if (question.analyse.length !== 0) {
            const c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
            const analTitle = $(`<div class='${homework_style.quesParse}'>解析</div>`);
            const analyzeC = $(`<div class='${homework_style.analyzeBack}'><label>展开</label></div>`);
            const analcontent = $(`<div class='${homework_style.analyzeContainer}'>${question.analyse}</div>`);
            analTitle.append(analyzeC);
            c.append(analTitle, analcontent);
            answerComponent.append(c);
            analcontent.slideUp(0);
        }
        return answerComponent;
    }

    private getOptionBox(optionques: Option, right: boolean) {
        const option_box_root = $(`<div class='${homework_style.homeworkOptionBox}'></div>`);
        const opt_box_left = $(`<div class='${homework_style.optionBoxOptionText} ${right ? homework_style.optionBoxOptionCorrectText : homework_style.optionBoxOptionNotCorrectText}'>${optionques.choice}</div>`);
        const opt_right = $(`<div class='${homework_style.optionBoxOptionContent}'>${optionques.option}</div>`);
        option_box_root.append(opt_box_left, opt_right);
        return option_box_root;
    }

    private getHeadComponent(paperinfo: Paper) {
        const titleUp = $(`<div class='${homework_style.homeworkComponent}' style='align-items:center;'></div>`);
        const image = $(`<div class='${homework_style.titleUpComponentImage}'></div>`);
        image.append($(`<img style='height: 100%;width: 120px' class='${homework_style.titleUpComponentImage}' src="${exam_img}"/>`));
        const bsinfo = $(`<div class='${homework_style.titleUpBasicInfo}'></div>`);
        bsinfo.append($(`<div class='${homework_style.titleUpContent}'>${paperinfo.title}</div>`));
        bsinfo.append($(`<div class='${homework_style.titleUpId}'>id:${this.paperId}</div>`));
        const foot = $(`<div class='${homework_style.titleUpProgressDetail}'></div>`);
        this.getDidCount(paperinfo.questions);
        const prog = Math.round(this.ques / this.allQues * 100) / 100;
        const progressc = $(`<div class='${homework_style.titleUpProgress}'>进度:</div>`);
        this.progress_s = new ProgressBar(prog, { "margin-top": "2px" });
        progressc.append(this.progress_s.show());
        foot.append(this.progress_text_f || $(), this.progress_text_p || $());
        bsinfo.append(progressc, foot);
        titleUp.append(image, bsinfo);
        this.progress_s.slideFromZero();
        return titleUp;
    }

    private lockView() {
        const root = $(`<div class="${homework_style.lockedC}"></div>`);
        root.append(unlock_svg);
        root.append($(`<div style="font-size: 25px; font-weight: bold;">解锁此试卷</div>`));
        root.append($(`<div style="text-align: center;">需要花费 1 点数解锁此试卷的解析.<br>在此次解锁之后,下次将不用再次解锁这份试卷,而可以直接看到解析.</div>`));
        const btn = $(`<div class="${ordiBtn}">解锁</div>`);
        root.append(btn);
        // 此处可直接绑定（或也改为委托绑定）——此处按钮较少，不易丢失
        btn.on("click", () => {
            btn.text("请等待...").off("click");
            this.refreshToF();
        });
        return root;
    }

    private getDidCount(question: IQuestion[]) {
        for (let i of question) {
            if (i.childQuestions.length !== 0) {
                this.getDidCount(i.childQuestions);
            } else {
                if (i.myAnswer != null && i.myAnswer.length !== 0)
                    this.ques += 1;
                this.allQues += 1;
            }
        }
        const prog = Math.round(this.ques / this.allQues * 100) / 100;
        if (this.progress_text_f) {
            this.progress_text_f.text(`完成题目数量:${this.ques}/${this.allQues} (小题)`);
        } else {
            this.progress_text_f = $(`<div>完成题目数量:${this.ques}/${this.allQues} (小题)</div>`);
        }
        if (this.progress_text_p) {
            this.progress_text_p.text(`${prog * 100}%`);
        } else {
            this.progress_text_p = $(`<div class="${homework_style.titleUpProgressDetailRight}">${prog * 100}%</div>`);
        }
    }
}