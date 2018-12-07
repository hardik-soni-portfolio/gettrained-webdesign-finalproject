import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() content = new EventEmitter<any>();
  textContent: Array<String>;
  text: String;
  slide_content: any;
  constructor() { }

  ngOnInit() {
  }
  onAddText() {
    this.textContent.push(this.text);
  }
  onSubmit(form: NgForm) {
    this.slide_content = {'text': this.textContent, 'value': form.value };
    this.content.emit();
  }
}
