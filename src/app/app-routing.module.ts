import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then(mod => mod.QuizModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)
  },
  {
    path: '',
    redirectTo: '/quiz', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
