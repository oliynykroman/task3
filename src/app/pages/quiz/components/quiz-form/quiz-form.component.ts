import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { QuizTransformService } from '../../../../../services/quiz-transform.service';
import { FormGroup } from '@angular/forms';
import { QuizStructure } from '../../../../models/quiz-structure.model';
import { QuizService } from '../../../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from '../../../../models/quiz.model';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public payLoad = '';
  public id: number = 0;
  public questionsArray: QuizStructure[] = [];
  public question:any;

  private subscription: Subscription;

  constructor(
    private quizService: QuizService,
    private quizTransformService: QuizTransformService,
    private route: ActivatedRoute) {
  }
 
  ngOnInit() {
    this.subscription = this.quizService.getQuestions().subscribe(data => {
      this.questionsArray = data;
      this.route.paramMap.subscribe(linkId => {
        this.question = this.questionsArray[+linkId.get('id')];
        this.form = this.quizTransformService.toFormGroup(this.question);
      }
      );
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
