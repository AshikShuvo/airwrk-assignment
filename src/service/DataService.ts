import getInputData from "../../public/InputData.ts";
import {AnswerHistogram, CorrectAnswer, QuestionAnswerHistory} from "./types.ts";

class DataService{
    private readonly questionHistory:QuestionAnswerHistory[]=[];
    constructor() {
        const inputData:any=getInputData();
        Object.keys(inputData).forEach((key) => {
            const item = inputData[key];
            Object.keys(item).forEach(q=>{
                const qItem=item[q];
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


}
export default DataService;