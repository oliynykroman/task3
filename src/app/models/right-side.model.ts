import { Quiz } from "./quiz.model"

export class RightSide {
    description: string;
    quizList: Quiz<any>[];
    constructor(description: string, quizList: Quiz<any>[]) {
        this.description = description;
        this.quizList = quizList;
    }
}