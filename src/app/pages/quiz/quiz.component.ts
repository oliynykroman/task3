import { Component, OnInit, Input } from '@angular/core';
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

  public id: number = 0;
  public answers: QuizAnswers[] = [];
  public question: QuizStructure = new QuizStructure;
  public loadQuizError: boolean = false;
  startQuiz: boolean = true;

  private subscription: Subscription;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (+this.route.snapshot.paramMap.get('id') >= 0) {
      this.startQuiz = false;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadQuiz() {
    this.subscription = this.quizService.getAnswers().subscribe(
      data => {
        this.answers = data;
      },
      error => {
        this.loadQuizError = true;
      }
    );
  }
  startQuizButton() {
    this.startQuiz = !this.startQuiz;
    this.loadQuiz();
  }
}
