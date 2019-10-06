import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuizTransformService } from '../../../../../services/quiz-transform.service';
import { FormGroup } from '@angular/forms';
import { QuizStructure } from '../../../../models/quiz-structure.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit, OnDestroy {

  public formFields: FormGroup;
  public payLoad = '';
  public id: number = 0;
  public question: QuizStructure = new QuizStructure;
  public filteredQuestion: QuizStructure = new QuizStructure;

  private subscription: Subscription;

  constructor(
    private quizTransformService: QuizTransformService,
    private quizService: QuizService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.quizService.getQuestions(this.id).subscribe(data => this.question = data);
    this.formFields = this.quizTransformService.toFormGroup(this.question);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.formFields.value);
    console.log(this.payLoad);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
