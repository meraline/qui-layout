import Question from "./Question";


export default interface QuestionGroup {
    readonly id: number;
    readonly title: string;
    readonly questions: Question[];
}