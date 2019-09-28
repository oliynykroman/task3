import { Quiz } from "./quiz.model";

export class QuizStructure {
    id: number;
    questionTitle: string;
    quizPosition: string;
    quizDescription: string;
    quizList: Quiz<any>[];
    constructor(options: {
        id?: number,
        questionTitle?: string,
        quizPosition?: string,
        quizDescription?: string,
        quizList?: Quiz<any>[]
    } = {}) {
        this.id = options.id || -1;
        this.questionTitle = options.questionTitle || '';
        this.quizPosition = options.quizPosition || '';
        this.quizDescription = options.quizDescription || '';
        this.quizList = options.quizList || [];
    };
}