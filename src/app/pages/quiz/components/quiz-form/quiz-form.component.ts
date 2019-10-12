import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizService } from '../../../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizTransformService } from '../../../../../services/quiz-transform.service';
import { QuizStructure } from '../../../../models/quiz-structure.model';
import { QuizAnswers } from '../../../../models/quiz-answers.model';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public payLoad = '';
  public correctAnswer = '';
  public result: boolean = false;
  public id: number = 0;
  public questionsArray: QuizStructure[] = [];
  public question: any;
  public answers: QuizAnswers[] = [];



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
        this.id = +linkId.get('id');
        this.question = this.questionsArray[this.id];
        this.form = this.quizTransformService.toFormGroup(this.question);
      }
      );
    });
    this.subscription = this.quizService.getAnswers().subscribe(data => {
      this.answers = data;
    })
  }

  onSubmit() {
    this.correctAnswer = JSON.stringify(this.answers[this.id].rightAnswer[0])
    this.payLoad = JSON.stringify(this.form.value);
    this.result = this.correctAnswer === this.payLoad;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
