import { Quiz } from "./quiz.model";

export class QuizRadio extends Quiz<string> {
    controlType = 'radio';
    options: { value: string, label:string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}