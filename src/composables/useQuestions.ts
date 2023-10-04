import {QuestionAnswerHistory} from "../service/types.ts";
import {computed, ref} from "vue";

export default function useQuestions(questionAnswerHistory:QuestionAnswerHistory[]){
    const store=questionAnswerHistory;
    const selectedQuestionNum=ref<number>();
    const selectedQuestion=computed(()=>{
        if(selectedQuestionNum.value===undefined){
            return null;
        }
        return store.find(question=>{
            return question.num===selectedQuestionNum.value;
        })
    });
    const setSelectedQuestionNum=(num:number):void=>{
        selectedQuestionNum.value=num;
    }
    return {
        setSelectedQuestionNum,
        selectedQuestion
    }
}