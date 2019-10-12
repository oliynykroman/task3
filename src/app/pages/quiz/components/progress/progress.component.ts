import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuizAnswers } from '../../../../models/quiz-answers.model';
import { Subscription } from 'rxjs';
import { QuizService } from '../../../../../services/quiz.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnDestroy {
  @Input() answers: QuizAnswers[] = [];
  subscription: Subscription;
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.subscription = this.quizService.getMessage().subscribe(message => {
      this.answers = message;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
