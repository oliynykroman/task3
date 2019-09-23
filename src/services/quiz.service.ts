import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Quiz } from '../app/models/quiz.model';

const api = environment.apiDomain
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public getTodoList() {
    return this.http.get<Quiz[]>(`${api}/quiz`);
  }
}
