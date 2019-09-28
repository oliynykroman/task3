import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quiz } from '../../../../models/quiz.model';

@Component({
  selector: 'app-quiz-element',
  templateUrl: './quiz-element.component.html',
  styleUrls: ['./quiz-element.component.scss']
})
export class QuizElementComponent implements OnInit {

  @Input() question: Quiz<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() {

  }
  ngOnInit() { 
    console.log(this.question);
  }
}
