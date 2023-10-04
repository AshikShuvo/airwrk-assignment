export type AnswerHistogram={
    [key:string]:number
}
export type CorrectAnswer=number[];
export type QuestionAnswerHistory={
    num:number;
    answers_histogram:AnswerHistogram;
    correct_answers:CorrectAnswer
}