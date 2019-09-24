import { Quiz } from "./quiz.model";

export class QuizInput extends Quiz<string> {
    controlType = 'textbox';
    type: string;
}