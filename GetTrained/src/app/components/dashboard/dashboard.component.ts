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
  constructor(private courseService: CourseService, private router: Router) { }

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
      this.contentLenght = this.enrolledCourses.contents.length;
      console.log(this.enrolledCourses);
      console.log("In ts of front end",this.enrolledCourses);
    },
    err => {

    }
  );
}

  gotoView(course) {
    localStorage.setItem('course', JSON.stringify(course));
    this.router.navigate(['dashboard/'+ course.course._id]);
  }

}
