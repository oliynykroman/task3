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
  progress = [];
  getQuestions() {
    let questions: QuizStructure[] = [
      {
        id: 1,
        questionTitle: 'first question',
        quizPosition: 'left',
        quizDescription: '<p>Хто то браття???.</p><img src="https://upload.wikimedia.org/wikipedia/commons/1/10/%D0%92%D1%96%D0%B7%D0%B8%D1%82_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B4%D0%BE_%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D0%B9_%D0%84%D0%A1_%D1%96_%D0%9D%D0%90%D0%A2%D0%9E_%D1%83_%D0%91%D1%80%D1%8E%D1%81%D1%81%D0%B5%D0%BB%D1%96%2C_2019%2C_16_%28cropped%29.jpg" width="250" height="auto"/>',
        quizList: [
          new QuizRadio({
            key: 'question1',
            label: 'Може то:',
            options: [
              { value: 'v1', label: 'якийсь торчок' },
              { value: 'v2', label: 'Monica Zelensky' },
              { value: 'v3', label: 'mr. President' },
              { value: 'v4', label: 'Найвеличніший (може)' },
            ],
          })
        ]
        // new QuizRadio({
        //   key: 'question2',
        //   label: 'Може то:',
        //   options: [
        //     { value: 'v1', label: 'якийсь торчок' },
        //     { value: 'v2', label: 'Monica Zelensky' },
        //     { value: 'v3', label: 'mr. President' },
        //     { value: 'v4', label: 'Найвеличніший (може)' },
        //   ],
        // }),
        // new QuizRadio({
        //   key: 'question3',
        //   label: 'Може то:',
        //   options: [
        //     { value: 'v1', label: 'якийсь торчок' },
        //     { value: 'v2', label: 'Monica Zelensky' },
        //     { value: 'v3', label: 'mr. President' },
        //     { value: 'v4', label: 'Найвеличніший (може)' },
        //   ],
        // })
      }
    ]

// {
//   id: 2,
//     questionTitle: 'second question',
//       left: {
//     description: '<p>cdcd</p>',
//       quizList: [
//         new QuizDropDown({
//           key: 'brave',
//           label: 'Bravery Rating',
//           options: [
//             { key: 'solid', value: 'Solid' },
//             { key: 'great', value: 'Great' },
//             { key: 'good', value: 'Good' },
//             { key: 'unproven', value: 'Unproven' }
//           ],
//         }),
//         new QuizInput({
//           key: 'firstName',
//           label: 'First name',
//           value: 'Bombasto',
//           required: true
//         }),
//       ]
//   },
//   right: {
//     description: '<p>cdcd</p>',
//       quizList: [
//         new QuizDropDown({
//           key: 'brave',
//           label: 'Bravery Rating',
//           options: [
//             { key: 'solid', value: 'Solid' },
//             { key: 'great', value: 'Great' },
//             { key: 'good', value: 'Good' },
//             { key: 'unproven', value: 'Unproven' }
//           ],
//         }),
//         new QuizInput({
//           key: 'firstName',
//           label: 'First name',
//           value: 'Bombasto',
//           required: true
//         }),
//       ]
//   }
// }
return questions;
  }
checkAnswer(index, status) {

}
getProgress() {

}
}
