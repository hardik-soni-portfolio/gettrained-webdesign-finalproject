import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe(
      
    );
  }

}
