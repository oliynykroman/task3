import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuizService } from '../../../services/quiz.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions: any[] = [];
  public id: number = 0;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.questions = this.quizService.getQuestions();
  }
  nextQuiz() {

  }
}
