import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../models/quiz.model';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { QuizTransformService } from '../../../services/quiz-transform.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

  @Input() questions: Quiz<any>[] = [];
  form: FormGroup;
  payLoad = '';

  private subscription: Subscription;

  constructor(private quizService: QuizTransformService) { }

  ngOnInit() {
    this.form = this.quizService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
