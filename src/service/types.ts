export type AnswerHistogram={
    [key:string]:number
}
export type CorrectAnswer=string[];
export type QuestionAnswerHistory={
    num:number;
    answers_histogram:AnswerHistogram;
    correct_answers:CorrectAnswer
}
export type DataPoint={
    label:number;
    y:number;
}