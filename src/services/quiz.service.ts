import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { QuizStructure } from '../app/models/quiz-structure.model';
import { QuizAnswers } from '../app/models/quiz-answers.model';

const api = environment.apiDomain;

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<QuizStructure[]>(`${api}/questions`);
  }
  getAnswers() {
    return this.http.get<QuizAnswers[]>(`${api}/answers`);
  }

  updateAnswer() {

  }
}
