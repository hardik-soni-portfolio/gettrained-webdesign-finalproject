import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  id : any;

  constructor(private http: HttpClient) {
    this.id = localStorage.getItem('id');

   }


getEnrolledCourses(){
  return this.http.get(`${environment.apiBaseUrl}/dashboard/`+ this.id);
}
}