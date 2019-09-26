import { Quiz } from "./quiz.model"

export class LeftSide {
    description: string
    quizList: Quiz<any>[];
    constructor(description: string, quizList: Quiz<any>[]) {
        this.description = description;
        this.quizList = quizList;
    }
}