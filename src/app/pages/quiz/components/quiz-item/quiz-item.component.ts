import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../../../../models/quiz.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {

  @Input() question: Quiz<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() { }

  ngOnInit() {
  }

}
