import { UserService } from 'src/app/services/user.service';
// import { UserService } from './../../services/user.service';
import { Course } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  // course: any;
  course_title = 'course title';
  req: any;
  isnextDisabled: Boolean;
  isprevDisabled: Boolean;
  courseid = '5c09fcd8639e7b21f0067836';
  current_page = 0;
  progress = 0;
  course_description = 'course description';
  course = [
    {
      text: ['text1', 'text2'],
      imagepath: `assets/img1.png`,
      videopath: `L4QSwT8WhmM`
    },
    {
      text: ['text3', 'text4'],
      imagepath: `assets/img2.png`,
      videopath: `6wD4V0rvlDI`
    },
    {
      text: ['text5', 'text6'],
      imagepath: `assets/img3.png`,
      videopath: `PH_5lXxSpww`
    }

  ];
  textarray = ['xsad', 'sdasdas'];
  // video = `6wD4V0rvlDI`;
  video = `6wD4V0rvlDI`;
  constructor(private sanitizer: DomSanitizer, private userService: UserService) {}

  ngOnInit() {
    console.log(this.course);
    this.checkDisability();
  }

  dispalyCourse(getCourse: any) {
    this.course = getCourse;
  }

  getEmbedURL(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + video
    );
  }
  dec_page(current_page) {
    current_page = current_page - 1;
    this.current_page = current_page;
    this.checkDisability();
    // console.log('in dec page');
    // console.log(current_page);
    // console.log(this.progress);
  }
  inc_page(current_page) {
    if (current_page === this.progress) {
        this.progress = this.progress + 1;
      }
    // console.log("progress"+this.progress);
    current_page = current_page + 1;
    this.current_page = current_page;
    this.checkDisability();
    // console.log('in inc page');
    // console.log(current_page);
  }
  checkDisability() {
    if (this.current_page === 0) {
      this.isprevDisabled = true;
    } else {
      this.isprevDisabled = false;
    }
    if (this.current_page === (this.course.length - 1)) {
      this.isnextDisabled = true;
    } else {
      this.isnextDisabled = false;
    }
  }


update() {
this.req = {'current_page': this.current_page,'course_id': this.courseid, 'progress': this.progress, 'user_id': localStorage.getItem('id')};
// this.userService.updateUser(this.req).subscribe( res => {
//   // this.showSuccessMessage = true;
//   // setTimeout(() => this.showSuccessMessage = false, 4000);
//   //  this.resetForm(form);
//   console.log('successfully updated');
//  },
//  err => {
//   //  if (err.status === 422) {
//   //    this.serverErrorMessage = err.error.join('<br/>');
//   //  } else {
//   //    this.serverErrorMessage = 'Error occured while submitting the form';
//   //  }
//   console.log(err);
//  }
// );
this.userService.updateUser(this.req).subscribe(( data: any ) => {
  if ( data.success ) {
    console.log('success');
  } else {
    console.log('failure');
  }
});

}

}
