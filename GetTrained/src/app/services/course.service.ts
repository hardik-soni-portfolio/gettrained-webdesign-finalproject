import { Content } from './../models/content.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Course } from './../models/course.model';

@Injectable()
export class CourseService {
  selectedSlide: Content = {
    title: '',
    content: [],
    image: '',
    video: ''
  };

  constructor(private http: HttpClient) { }

  selectedCourse: Course = {
    course_title: '',
    course_description: '',
    course_category: '',
    course_learners: '',
    course_created_date: '',
    course_modified_date: '',
    course_contents: [],
    course_status: '',
    course_created_by: ''
  };

  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }
  getCourses() {
    return this.http.get(`${environment.apiBaseUrl}/courses/?userId=${localStorage.getItem('id')}`);
  }

  postCourse(course: Course) {
    return this.http.post(`${environment.apiBaseUrl}/courses`, course);
  }
}
