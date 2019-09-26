import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuizService } from '../../../services/quiz.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions: any[] = [];
  constructor(private quizService: QuizService) {
  }
  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }
  nextQuiz() {

  }
}
