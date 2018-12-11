import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
=======
import { Course } from './../models/course.model';
>>>>>>> 9b5480f9b0204740e5ab6a2dc18b39c1bb2fcf33

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  id : any;

<<<<<<< HEAD
  constructor(private http: HttpClient) {
    this.id = localStorage.getItem('id');

   }


getEnrolledCourses(){
  return this.http.get(`${environment.apiBaseUrl}/dashboard/`+ this.id);
}
=======
  constructor(private http: HttpClient) { }

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
>>>>>>> 9b5480f9b0204740e5ab6a2dc18b39c1bb2fcf33
}