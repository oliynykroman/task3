import { Component, OnInit, Output } from '@angular/core';
import { QuizAnswers } from '../../models/quiz-answers.model';
import { Subscription } from 'rxjs';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { QuizStructure } from '../../models/quiz-structure.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public id:number =0;
  public answers: QuizAnswers[] = [];
  public question:QuizStructure = new QuizStructure;

  private subscription: Subscription;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.quizService.getAnswers().subscribe(data => this.answers = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
