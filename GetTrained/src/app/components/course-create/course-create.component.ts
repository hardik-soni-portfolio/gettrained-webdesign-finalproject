import { Course } from './../../models/course.model';
import { Router } from '@angular/router';
import { Content } from './../../models/content.model';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './../../services/course.service';
import { CategoryService } from '../../services/category.service';
import { UserService } from '../../services/user.service';
import { Category } from 'src/app/models/category.model';
import { NgForm } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { interceptingHandler } from '@angular/common/http/src/module';
import { User } from 'src/app/models/user.model';

export interface Learner {
  name: String;
}

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
  providers: [CourseService]
})

export class CourseCreateComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  req: any;
  course: Course;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  courseService: CourseService;
  constructor(courseService: CourseService, private categoryService: CategoryService, private userService: UserService,private router: Router) {
    this.courseService = courseService;
    this.categoryService = categoryService;
    this.userService = userService;
  }

  categories: Category[];
  users : User[];
  learners: Learner[];
  
   addContent() {
     this.router.navigate(['createCourseContent']);
  }
   onSubmit(form: NgForm) {
    form.value.course_created_by = localStorage.getItem('id');
    form.value.course_contents = this.courseService.selectedCourse.course_contents;
    console.log(form.value);
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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add email
    if ((value || '').trim()) {
      this.learners.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  resetForm(form: NgForm) {
    this.courseService.selectedCourse = {
      course_title: '',
      course_description: '',
      course_category: '',

      course_learners: [],
      course_created_date: '',
      course_modified_date: '',
      course_contents: [],

      course_status: '',
      course_created_by: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

  fetchCategories() {
    this.categoryService
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
        console.log('Data requested...');
        console.log(this.categories);
      });
  }

  fetchUsers() {
    this.userService
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
        console.log('Data requested...');
        console.log(this.users);
      });
  }

  ngOnInit() {
    this.fetchCategories();
    this.fetchUsers();
  }

}
