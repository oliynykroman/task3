import { Component, OnInit, Input } from '@angular/core';
import { QuizTransformService } from '../../../../../services/quiz-transform.service';
import { FormGroup } from '@angular/forms';
import { Quiz } from '../../../../models/quiz.model';
import { QuizStructure } from '../../../../models/quiz-structure.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  @Input() questions: QuizStructure[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuizTransformService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);
  }

}
