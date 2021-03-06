import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { QuizStructure } from '../app/models/quiz-structure.model';
import { QuizAnswers } from '../app/models/quiz-answers.model';
import { Subject, Observable } from 'rxjs';

const api = environment.apiDomain;

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<QuizStructure[]>(`${api}/questions`);
  }
  getAnswers() {
    return this.http.get<QuizAnswers[]>(`${api}/answers`);
  }
  getResult(): Observable<any> {
    return this.subject.asObservable();
  }

  updateAnswer(id, status, updatedArray?) {
    this.subject.next(updatedArray);
    return this.http.patch<QuizAnswers>(`${api}/answers/${id}`, status);
  }
}
