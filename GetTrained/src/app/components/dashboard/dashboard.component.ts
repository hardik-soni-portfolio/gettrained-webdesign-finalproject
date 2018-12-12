import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  // template: `
  //   <h1>{{enrolledCourses}}</h1>
   
    
})
export class DashboardComponent implements OnInit {
  enrolledCourses: any[];
  constructor(private courseService: CourseService) { }

//   ngOnInit() {
//     this.courseService.getEnrolledCourses(localStorage.getItem('id')).subscribe(
//       (res:any) => {
//         this.enrolledCourses = res.body;
//         console.log(this.enrolledCourses);
//         console.log("In ts of front end",this.enrolledCourses);
//       },
//       err => {

//       }
//     );
//   }

// }

ngOnInit() {
  this.courseService.getEnrolledCourses(localStorage.getItem('id')).subscribe(
    (data:any[]) => {
      this.enrolledCourses = data;
      console.log(this.enrolledCourses);
      console.log("In ts of front end",this.enrolledCourses);
    },
    err => {

    }
  );
}

}
