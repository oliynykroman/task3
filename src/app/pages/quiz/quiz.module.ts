import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuizItemComponent } from './components/quiz-item/quiz-item.component';


@NgModule({
  declarations: [QuizComponent, QuizItemComponent],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
