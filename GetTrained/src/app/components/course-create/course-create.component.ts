import { Component, OnInit } from '@angular/core';
import { CourseService } from './../../services/course.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
  providers:[CourseService]
})

export class CourseCreateComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  courseService: CourseService;
  constructor( courseService: CourseService) {
    this.courseService = courseService;
   }


   onSubmit(form: NgForm) {
    this.courseService.postCourse(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');
        } else {
          this.serverErrorMessage = 'Error occured while submitting the form';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.courseService.selectedCourse = {
      course_title:'',
      course_description:'',
      course_category:'',
      course_learners:'',
      course_created_date:'',
      course_modified_date:'',
      course_contents:'',
      course_status:''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

  ngOnInit() {
  }

}
