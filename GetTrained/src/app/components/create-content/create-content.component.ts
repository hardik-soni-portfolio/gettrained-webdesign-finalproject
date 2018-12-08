import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() content = new EventEmitter<Content>();
  textContent: Array<String>;
  text: String;
  slide_content: any;

  constructor( private courseService: CourseService) {
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
  onFileSelected(event) {
    console.log(event);
    this.courseService.selectedSlide.image = event.target.value;
  }
  onSubmit() {
    this.slide_content = {'text': this.textContent, 'title': this.courseService.selectedSlide.title,
  'image': this.courseService.selectedSlide.image, 'video': this.courseService.selectedSlide.video};
    this.content.emit(this.slide_content);
  }
}
