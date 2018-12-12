import { MatDialog } from '@angular/material';
import { CourseService } from './../../services/course.service';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RemoveSlideDialogComponent } from './../remove-slide-dialog/remove-slide-dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course-area',
  templateUrl: './create-course-area.component.html',
  styleUrls: ['./create-course-area.component.scss']
})
export class CreateCourseAreaComponent implements OnInit {
  @Output() content = new EventEmitter<Array<Content>>();
  @Output() numberOfSlides = new EventEmitter<number>();
  courseContent: Array<Content> = [];
  counter: Array<Number> = [1];
  constructor(private courseService: CourseService, public dialog: MatDialog ) {
   }

  ngOnInit() {
  }

  addSlide(content: Content) {
    this.courseContent.push(content);
  }
  resetContentFields() {
    this.courseService.selectedSlide = {
      id: 0,
      title: '',
      content: [],
      image: '',
      video: ''
    };
  }
  addNewSlide() {
    this.counter.push(1);
    this.resetContentFields();
  }
  removeSlide() {
    if (this.counter.length === 1) {
      this.dialog.open(RemoveSlideDialogComponent, {
        width: '250px'
      });
    } else {
      this.counter.pop();
      this.courseContent.pop();
    }
  }
  createCourseContent() {
    this.courseService.selectedCourse.course_contents = this.courseContent;
    localStorage.setItem('slides', JSON.stringify(this.courseContent.length));
  }
}
