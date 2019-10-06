import { Quiz } from "./quiz.model";

export class QuizStructure {
    id: number;
    questionTitle: string;
    quizPosition: string;
    quizDescription: string;
    quizList: Quiz[];
  
}