import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { Quiz } from '../../../../models/quiz.model';
import { Controll } from '../../../../models/control.model';

@Component({
  selector: 'app-quiz-element',
  templateUrl: './quiz-element.component.html',
  styleUrls: ['./quiz-element.component.scss']
})
export class QuizElementComponent implements OnInit {

  @Input() question: Quiz;
  @Input() questionFields: Controll;
  @Input() form: FormGroup;

  constructor() {

  }
  ngOnInit() {
  }

}
