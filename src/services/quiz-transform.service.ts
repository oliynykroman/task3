import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizStructure } from '../app/models/quiz-structure.model';
<<<<<<< HEAD
import { Subject } from 'rxjs';
=======
import { Quiz } from '../app/models/quiz.model';
>>>>>>> a7b4ecb233824719eaa65105aab642bbd5a78f77


@Injectable({
  providedIn: 'root'
})
export class QuizTransformService {

  constructor() { }

  toFormGroup(question: QuizStructure) {
    let group: any = {};
    question.quizList.forEach(formItem => {
      group[formItem.key] = formItem.required ? new FormControl(formItem.options.value || '', Validators.required) : new FormControl(formItem.options.value || '');
    });
<<<<<<< HEAD

=======
>>>>>>> a7b4ecb233824719eaa65105aab642bbd5a78f77
    return new FormGroup(group);
  }

}
