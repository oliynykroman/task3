import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizStructure } from '../app/models/quiz-structure.model';


@Injectable({
  providedIn: 'root'
})
export class QuizTransformService {

  constructor() { }

  toFormGroup(question: QuizStructure) {
    let group: any = {};
    console.log(question);
    question.quizList.forEach(formItem => {
      // group[formItem.key] = formItem.required ? new FormControl(formItem.value || '', Validators.required) : new FormControl(formItem.value || '');
      group[formItem.key] = formItem.required ? new FormControl(formItem.options.value || '', Validators.required) : new FormControl(formItem.options.value || '');
    });
  
    return new FormGroup(group);
  }

}
