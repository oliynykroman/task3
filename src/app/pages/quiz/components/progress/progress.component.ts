import { Component, OnInit, Input } from '@angular/core';
import { QuizAnswers } from '../../../../models/quiz-answers.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() answers: QuizAnswers[] = [];
  constructor() { }

  ngOnInit() {

  }

}
