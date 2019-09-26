import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Quiz } from '../app/models/quiz.model';
import { QuizInput } from '../app/models/quiz-input.model';
import { QuizDropDown } from '../app/models/quiz-drop-down.model';
import { QuizRadio } from '../app/models/quiz-radio-group.mode';
import { QuizStructure } from '../app/models/quiz-structure.model';

const api = environment.apiDomain
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    let questions: QuizStructure[] = [
      {
        id: 1,
        questionTitle: 'first question',
        left: {
          description: '<p>cdcd</p>',
          quizList: [
            new QuizDropDown({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                { key: 'solid', value: 'Solid' },
                { key: 'great', value: 'Great' },
                { key: 'good', value: 'Good' },
                { key: 'unproven', value: 'Unproven' }
              ],
            }),
            new QuizInput({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true
            }),
          ]
        },
        right: {
          description: '<p>cdcd</p>',
          quizList: [
            new QuizDropDown({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                { key: 'solid', value: 'Solid' },
                { key: 'great', value: 'Great' },
                { key: 'good', value: 'Good' },
                { key: 'unproven', value: 'Unproven' }
              ],
            }),
            new QuizInput({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true
            }),
          ]
        }
      },
      {
        id: 2,
        questionTitle: 'second question',
        left: {
          description: '<p>cdcd</p>',
          quizList: [
            new QuizDropDown({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                { key: 'solid', value: 'Solid' },
                { key: 'great', value: 'Great' },
                { key: 'good', value: 'Good' },
                { key: 'unproven', value: 'Unproven' }
              ],
            }),
            new QuizInput({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true
            }),
          ]
        },
        right: {
          description: '<p>cdcd</p>',
          quizList: [
            new QuizDropDown({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                { key: 'solid', value: 'Solid' },
                { key: 'great', value: 'Great' },
                { key: 'good', value: 'Good' },
                { key: 'unproven', value: 'Unproven' }
              ],
            }),
            new QuizInput({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true
            }),
          ]
        }
      }
    ]
    return questions;
    // let questions: Quiz<any>[] = [



    //   // new QuizDropDown({
    //   //   id: 3
    //   //   key: 'brave',
    //   //   label: 'Bravery Rating',
    //   //   options: [
    //   //     { key: 'solid', value: 'Solid' },
    //   //     { key: 'great', value: 'Great' },
    //   //     { key: 'good', value: 'Good' },
    //   //     { key: 'unproven', value: 'Unproven' }
    //   //   ],
    //   // }),

    //   // new QuizInput({
    //   //   key: 'firstName',
    //   //   label: 'First name',
    //   //   value: 'Bombasto',
    //   //   required: true,
    //   //   order: 1
    //   // }),

    //   // new QuizRadio({
    //   //   key: 'radioGroup',
    //   //   label: 'Radio group name',
    //   //   type: 'radio',
    //   //   required: true,
    //   //   options: [
    //   //     {
    //   //       value: 'one',
    //   //       label: 'one'
    //   //     },
    //   //     {
    //   //       value: 'two',
    //   //       label: 'two'
    //   //     },
    //   //     {
    //   //       value: 'three',
    //   //       label: 'three'
    //   //     }
    //   //   ],
    //   //   order: 4
    //   // }),

    //   // new QuizInput({
    //   //   key: 'emailAddress',
    //   //   label: 'Email',
    //   //   type: 'email',
    //   //   order: 2
    //   // })
    // ];

    
  }
}
