import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  // template: `
  //   <h1>{{enrolledCourses}}</h1>


})
export class DashboardComponent implements OnInit {
  enrolledCourses: any[];
  contentLenght;
  continue;
  noCourseMessage: String;
  constructor(private courseService: CourseService, private router: Router) {
    this.noCourseMessage = 'You are not enrolled in any courses. Maybe create one!!';
   }


ngOnInit() {  // get enrolled courses
  this.courseService.getEnrolledCourses(localStorage.getItem('id')).subscribe(
    (data: any[]) => {
      this.enrolledCourses = data;
      console.log(this.enrolledCourses);
      console.log('In ts of front end', this.enrolledCourses);
    },
    err => {

    }
  );
}

  gotoView(course) {  // navigate to course
    localStorage.setItem('course', JSON.stringify(course));
    this.router.navigate(['dashboard/' + course.course._id]);
  }

}
