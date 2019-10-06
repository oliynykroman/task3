import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QuizService } from '../../../services/quiz.service'
import { ActivatedRoute } from '@angular/router';
import { QuizStructure } from '../../models/quiz-structure.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions: QuizStructure[] = [];
  public id: number = 0;

  private subscription: Subscription;
  
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.quizService.getQuestions().subscribe(data => this.questions = data);
  }
  nextQuiz() {

  }
}
