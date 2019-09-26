import { LeftSide } from "./left-side.model";
import { RightSide } from "./right-side.model";

export class QuizStructure {
    id: number;
    questionTitle: string;
    left: LeftSide;
    right: RightSide;
    constructor(id: number, questionTitle: string, left: LeftSide, right: RightSide) {
        this.id = id;
        this.questionTitle = questionTitle;
        this.left = left;
        this.right = right;
    }
}