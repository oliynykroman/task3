import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '../app/models/quiz.model';
import { QuizStructure } from 'src/app/models/quiz-structure.model';


@Injectable({
  providedIn: 'root'
})
export class QuizTransformService {

  constructor() { }

  toFormGroup(questions: QuizStructure[]) {
    let group: any = {};
    questions.forEach(question => {
      question.quizList.forEach(formItem =>{
        group[formItem.key] = formItem.required ? new FormControl(formItem.value || '', Validators.required) : new FormControl(formItem.value || '');
      })
      
    });
    return new FormGroup(group);
  }

}
