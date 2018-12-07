import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
  providers: [CourseService]
})
export class CreateContentComponent implements OnInit {
  @Output() content = new EventEmitter<any>();
  textContent: Array<String>;
  text: String;
  slide_content: any;
  courseService: CourseService;

  constructor( courseService: CourseService) {
    this.courseService = courseService;
    this.textContent = courseService.selectedSlide.content;
   }

  ngOnInit() {
  }
  onAddText() {
    this.textContent.push(this.text);
  }
  onRemoveText() {
    this.textContent.pop();
  }
  onSubmit(form: NgForm) {
    this.slide_content = {'text': this.textContent, 'value': form.value };
    this.content.emit();
  }
}
