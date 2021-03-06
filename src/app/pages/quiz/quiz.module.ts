import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuizElementComponent } from './components/quiz-element/quiz-element.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressComponent } from './components/progress/progress.component';
import { EscapeHtmlPipe } from 'src/pipes/keep-html.pipe';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TotalComponent } from './components/total/total.component';
@NgModule({
  declarations: [QuizComponent, QuizFormComponent, QuizElementComponent, ProgressComponent, EscapeHtmlPipe, SubmitButtonComponent, TotalComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule,

  ]
})
export class QuizModule { }
