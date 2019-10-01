export class QuizAnswers {
    question_id: number;
    right_answer: string;
    user_answer:string;
    status: string;
    constructor(question_id: number, right_answer: string, user_answer: string, status: string){
        this.question_id = question_id || 0;
        this.right_answer = right_answer || '';
        this.user_answer = user_answer || '';
        this.status = status || '';
    }
}