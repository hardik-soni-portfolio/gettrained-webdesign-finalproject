import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  enrolledCourses: Array<any>;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe(
      (res:any) => {
        this.enrolledCourses = res.body;
      },
      err => {

      }
    );
  }

}
