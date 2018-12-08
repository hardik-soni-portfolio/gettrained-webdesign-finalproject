import { CourseService } from './../../services/course.service';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course-area',
  templateUrl: './create-course-area.component.html',
  styleUrls: ['./create-course-area.component.scss']
})
export class CreateCourseAreaComponent implements OnInit {
  @Output() content = new EventEmitter<Array<Content>>();
  courseContent: Array<Content>;
  counter: Array<Number> = [1];
  constructor(private courseService: CourseService ) {
    console.log(courseService.getSelectedCourse());
   }

  ngOnInit() {
    console.log(this.courseService.getSelectedCourse());
  }

  addSlide(content: Content) {
    this.courseContent.push(content);
  }
  addNewSlide() {
    this.counter.push(1);
  }
  createCourseContent() {
    this.courseService.selectedCourse.course_contents = this.courseContent;
  }
}
