import getInputData from "../../public/InputData.ts";
import {AnswerHistogram, CorrectAnswer, DataPoint, QuestionAnswerHistory} from "./types.ts";
class DataService{
    private readonly questionHistory:QuestionAnswerHistory[]=[];
    constructor() {
        const inputData:any=getInputData();
        Object.keys(inputData).forEach((key) => {
            const item = inputData[key];
            Object.keys(item).forEach(q=>{
                const qItem=item[q];
                delete qItem.answers_histogram["null"]
                const question = {
                    num: qItem.num as number,
                    answers_histogram: qItem.answers_histogram as AnswerHistogram,
                    correct_answers: qItem.correct_answers as CorrectAnswer,
                };
                this.questionHistory.push(question)
            })

        });
    }
    getQuestionHistory(){
        return this.questionHistory;
    }
    private getStat(question:QuestionAnswerHistory){
        const totalNumberOfAttempted=Object.keys(question.answers_histogram).reduce((acc,cur)=>{
            return acc+question.answers_histogram[cur];
        },0);
        const totalNumberOfCorrectAttempt=Object.keys(question.answers_histogram).reduce((acc,cur)=>{
            return acc + (question.correct_answers.includes(cur)?question.answers_histogram[cur]:0);
        },0)
        const totalNumberOfWrongAttempt=Object.keys(question.answers_histogram).reduce((acc,cur)=>{
            return acc + (question.correct_answers.includes(cur)?0:question.answers_histogram[cur]);
        },0)
        return {
            totalNumberOfAttempted,
            totalNumberOfCorrectAttempt,
            totalNumberOfWrongAttempt
        }
    }
    getRatioOfWrongRightAnswerInPercentage(){
        const correctAnswerRatioEachQuestion:DataPoint[]=[];
        const wrongAnswerRatioEachQuestion:DataPoint[]=[];
        this.questionHistory.forEach(question=>{
            const {
                totalNumberOfAttempted,
                totalNumberOfCorrectAttempt,
                totalNumberOfWrongAttempt
            }=this.getStat(question);
            const correctAnswerDataPoint:DataPoint={
                label:question.num,
                y:(totalNumberOfCorrectAttempt*100)/totalNumberOfAttempted
            }
            const wrongAnswerDataPoint = {
                label:question.num,
                y:(totalNumberOfWrongAttempt*100)/totalNumberOfAttempted
            }
            correctAnswerRatioEachQuestion.push(correctAnswerDataPoint);
            wrongAnswerRatioEachQuestion.push(wrongAnswerDataPoint);
        })
        return {
            correctAnswerRatioEachQuestion,
            wrongAnswerRatioEachQuestion
        }

    }
}
export default DataService;