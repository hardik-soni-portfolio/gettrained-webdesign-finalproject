import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Course } from './../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  id : any;




getEnrolledCourses(){
  return this.http.get(`${environment.apiBaseUrl}/dashboard/`+ this.id);
}

  constructor(private http: HttpClient) {
    this.id = localStorage.getItem('id');
   }

  selectedCourse: Course = {
    course_title: '',
    course_description: '',
    course_category: '',
    course_learners: '',
    course_created_date: '',
    course_modified_date: '',
    course_contents: '',
    course_status: '',
    course_created_by: ''
  };


  getCourses() {
    return this.http.get(`${environment.apiBaseUrl}/courses/?userId=${localStorage.getItem("id")}`);
  }

  postCourse(course: Course) {
    return this.http.post(`${environment.apiBaseUrl}/courses`, course);
  }

}