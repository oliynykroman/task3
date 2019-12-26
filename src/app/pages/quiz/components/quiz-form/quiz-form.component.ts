import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizService } from '../../../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizTransformService } from '../../../../../services/quiz-transform.service';
import { QuizStructure } from '../../../../models/quiz-structure.model';
import { QuizAnswers } from '../../../../models/quiz-answers.model';
import { TouchSequence } from 'selenium-webdriver';


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
  public pageId: number = 0;
  public nextPage: number = 0;

  private subscription: Subscription;

  constructor(
    private quizService: QuizService,
    private quizTransformService: QuizTransformService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.quizService.getQuestions().pipe().subscribe(data => {
      this.questionsArray = data;
      this.route.paramMap.subscribe(params => {
        this.id = +params.get('id');
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
    this.answers[this.id].questionStatus = this.result ? 'correct' : 'not_correct';
    this.quizService.updateAnswer(this.id, { 'questionStatus': this.result ? 'correct' : 'not_correct', 'userAnswer': [this.form.value] }, this.answers).subscribe(
      success => {
        alert(`Answer saved :)`);
      },
      error => alert(`Oooops something wrong. Please try again later`)
    )
  }
  nextQuiz() {
    this.form.reset();
    this.payLoad = '';
    if (this.id < this.answers.length - 1) {
      this.id++;
      this.nextPage = this.id;
    } else {
      this.nextPage = this.answers.length - 1;
    }

    this.router.navigate(['/quiz/' + this.nextPage]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
