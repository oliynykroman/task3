import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuizElementComponent } from './components/quiz-element/quiz-element.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [QuizComponent, QuizFormComponent, QuizElementComponent,],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
