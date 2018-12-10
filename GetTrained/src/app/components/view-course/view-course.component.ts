import { Course } from "./../../models/course.model";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-view-course",
  templateUrl: "./view-course.component.html",
  styleUrls: ["./view-course.component.scss"]
})
export class ViewCourseComponent implements OnInit {
  // course: any;
  course_title = "Introduction to R";
  isnextDisabled: Boolean;
  isprevDisabled: Boolean;
  current_page = 0;
  course_description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
  courseContents = [
    {
      title: "Setting up python",
      text: ['text1', 'text2'],
      imagepath: `assets/img1.png`,
      videopath: `L4QSwT8WhmM`
    },
    {
      title: "Setting up R",
      text: ['text3', 'text4'],
      imagepath: `assets/img2.png`,
      videopath: `6wD4V0rvlDI`
    },
    {
      title: "Starting with hello world",
      text: ['text5', 'text6'],
      imagepath: `assets/img3.png`,
      videopath: `PH_5lXxSpww`
    }

  ];
  textarray = ['xsad', 'sdasdas'];
  // video = `6wD4V0rvlDI`;
  video = `6wD4V0rvlDI`;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.courseContents);
    this.checkDisability();
  }

  dispalyCourse(getCourse: any) {
    this.courseContents = getCourse;
  }

  getEmbedURL(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + video
    );
  }
  dec_page(current_page) {
    current_page = current_page - 1;
    this.current_page = current_page;
    this.checkDisability();
    console.log('in dec page');
    console.log(current_page);
  }
  inc_page(current_page) {
    current_page = current_page + 1;
    this.current_page = current_page;
    this.checkDisability();
    console.log('in inc page');
    console.log(current_page);
  }
  checkDisability() {
    if (this.current_page === 0) {
      this.isprevDisabled = true;
    } else {
      this.isprevDisabled = false;
    }
    if (this.current_page === (this.courseContents.length - 1)) {
      this.isnextDisabled = true;
    } else {
      this.isnextDisabled = false;
    }
  }
}
