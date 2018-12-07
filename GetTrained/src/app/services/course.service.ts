import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

   }


getEnrolledCourses(){
  return this.http.post(`${environment.apiBaseUrl}/enrolledCourses`, localStorage.getItem('id'));
}
}