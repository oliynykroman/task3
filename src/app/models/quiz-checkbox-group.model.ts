import { Quiz } from "./quiz.model";

export class QuizCheckBox extends Quiz<string> {
    controlType = 'checkbox';
    options: { value: string, label: string, content?: ''}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}