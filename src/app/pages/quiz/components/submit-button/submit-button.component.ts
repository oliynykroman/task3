import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() title: string = 'Submit form';

  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  @Output() nextItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitClick() {
    this.submitForm.emit();
  }

  nextQuizClick() {
    this.nextItem.emit();
  }
}
