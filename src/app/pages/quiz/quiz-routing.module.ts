import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';


const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: ':id',
        component: QuizFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
