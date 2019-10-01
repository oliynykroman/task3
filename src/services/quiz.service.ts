import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { QuizRadio } from '../app/models/quiz-radio-group.mode';
import { QuizStructure } from '../app/models/quiz-structure.model';
import { QuizCheckBox } from '../app/models/quiz-checkbox-group.model';
import { QuizAnswers } from '../app/models/quiz-answers.model';

const api = environment.apiDomain;

const answers: QuizAnswers[] = [
// {
//   question_id: 1,
//   right_answer: 'test',


// }
]
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
        quizDescription: '<p>Who is this men???.</p><img src="https://upload.wikimedia.org/wikipedia/commons/1/10/%D0%92%D1%96%D0%B7%D0%B8%D1%82_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B4%D0%BE_%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D0%B9_%D0%84%D0%A1_%D1%96_%D0%9D%D0%90%D0%A2%D0%9E_%D1%83_%D0%91%D1%80%D1%8E%D1%81%D1%81%D0%B5%D0%BB%D1%96%2C_2019%2C_16_%28cropped%29.jpg" width="250" height="auto"/>',
        quizList: [
          new QuizRadio({
            key: 'question1',
            label: 'Seems like this is:',
            required: true,
            options: [
              { value: 'v1', label: 'mr. Trump' },
              { value: 'v2', label: 'mr. Zelensky' },
              { value: 'v3', label: 'mr. Poroshenko' },
              { value: 'v4', label: 'mr. Putin' },
            ],
          })
        ]
      },
      {
        id: 2,
        questionTitle: 'second question',
        quizPosition: 'right',
        quizDescription: '<p>Find second president of Ukraine.</p>',
        quizList: [
          new QuizRadio({
            key: 'question2',
            label: 'Selec photo bellow:',
            required: true,
            options: [
              { value: 'v1', label: 'L. Kravchuk', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Leonid_Kravchuk_2013-06-18.JPG/800px-Leonid_Kravchuk_2013-06-18.JPG" width="200" height="auto" />' },
              { value: 'v2', label: 'L. Kuchma', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Leonid_Kuchma.jpg" width="200" height="auto" />' },
              { value: 'v3', label: 'V. Yanukovich', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Viktor_Yanukovych_27_April_2010-1.jpeg?uselang=ru" width="200" height="auto" />' },
              { value: 'v4', label: 'P. Poroshenko', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Official_portrait_of_Petro_Poroshenko.jpg/800px-Official_portrait_of_Petro_Poroshenko.jpg" width="200" height="auto" />' },
            ],
          })
        ]
      },
      {
        id: 3,
        questionTitle: 'thirdt question',
        quizPosition: 'left',
        quizDescription: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hiOjK992bPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        quizList: [
          new QuizCheckBox({
            key: 'question3',
            label: 'The song is:',
            required: true,
            options: [
              { value: 'v1', label: 'T. Lindemann "Steh auf"' },
              { value: 'v2', label: 'Lindemann  band "Steh auf"' },
              { value: 'v3', label: 'T. Lindemann "Mathematik"' },
              { value: 'v4', label: 'T. Lindemann "Skills in pills"'}
            ],
          })
        ]
      }
    ]

    return questions;
  }
  
  checkAnswer(index, status) {

  }
  getProgress() {

  }
}
