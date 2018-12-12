import { UserService } from 'src/app/services/user.service';
// import { UserService } from './../../services/user.service';
import urlParser from 'js-video-url-parser';
import { Course } from './../../models/course.model';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})


export class ViewCourseComponent implements OnInit {

  course_title = 'course title';
  theme: String;
  temp: string;
  req: any;
  type: String;
  videoflag: Boolean;
  imageflag: Boolean;
  textflag: Boolean;


  seeing: string;
  isVideo: boolean;
  isnextDisabled: Boolean;
  isprevDisabled: Boolean;
  courseid = '5c09fcd8639e7b21f0067836';
  current_page = 0;
  progress = 0;
  course_description = 'course description';
  course = [
    {
      title: 'title1',
      text: ['text1', 'text2'],
      image: 'assets/img1.png',
      video: 'https://www.youtube.com/watch?v=L4QSwT8WhmM'
    },
    {
      title: 'title2',
      text: ['text3', 'text4','dwedfaefdwfdew','ewdwedwedwe','dewdqewdqewx','weqxeqw'],
      image: `assets/img1.png`,
      video: ''
    },
    {
      title: 'title3',
      text: [],
      image: `assets/img3.png`,
      video: `https://www.youtube.com/watch?v=PH_5lXxSpww`
    },
    {
      title: 'title4',
      text: ['text5', 'text6'],
      image: ``,
      video: `https://youtube.com/playlist?feature=share&list=PL46F0A159EC02DF82`
    },
    {
      title: 'title5',
      text: [],
      image: `assets/img1.png`,
      video: ''
    },
    {
      title: 'title6',
      text: ['text5', 'text6'],
      image: ``,
      video: ``
    },
    {
      title: 'title7',
      text: [],
      image: ``,
      video: `http://vimeopro.com/staff/frame/video/24069938`
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private userService: UserService,
   
  ) { }

  ngOnInit() {
    this.checkDisability();
    this.check_type(this.course[this.current_page]);
    // console.log(this.temp);
  }


  dispalyCourse(getCourse: any) {
    this.course = getCourse;
  }

  getEmbedURL(video) {
    if (video === '') {
      console.log(this.isVideo+'I AM HERE');
      let obj2 = urlParser.parse('http://vimeopro.com/staff/frame/video/24069938');
      this.temp = urlParser.create({videoInfo: obj2, format: 'embed' });
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
    } else {
    this.seeing = 'unhidden';
    let obj1 = urlParser.parse(video);
    this.temp = urlParser.create({videoInfo: obj1, format: 'embed' });
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.temp);
  }
}
  dec_page(current_page) {
    current_page = current_page - 1;
    this.current_page = current_page;
    this.checkDisability();
    this.check_type(this.course[this.current_page]);
  }
  inc_page(current_page) {
    if (current_page === this.progress) {
      this.progress = this.progress + 1;
      this.checkDisability();
      console.log('hi');
    }
    current_page = current_page + 1;
    this.current_page = current_page;
    this.checkDisability();
    this.check_type(this.course[this.current_page]);
  }
  checkDisability() {
    if (this.current_page === 0) {
      this.isprevDisabled = true;
    } else {
      this.isprevDisabled = false;
    }
    if (this.current_page === this.course.length - 1) {
      this.isnextDisabled = true;
    } else {
      this.isnextDisabled = false;
    }
  }

  update() {
    this.req = {
      current_page: this.current_page,
      course_id: this.courseid,
      progress: this.progress,
      user_id: localStorage.getItem('id')
    };
    this.userService.updateUser(this.req).subscribe((data: any) => {
      if (data.success) {
        console.log('success');
      } else {
        console.log('failure');
      }
    });
  }

  check_type(course) {
    console.log("i am inside");
      if (course.text.length === 0) {
        console.log('empty text');
        this.textflag = false;
      } else {
        console.log(course.text.length);
        this.textflag = true;
      }
      if (course.image === '') {
        console.log('empty');
        this.imageflag = false;
      } else {
        console.log(course.image);
        this.imageflag = true;
      }
      if (course.video === '') {
        console.log('empty video');
        console.log("i am here");
        this.videoflag = false;
      } else {
        console.log(course.video);
        this.videoflag = true;
      }
    this.assign_layout(this.textflag, this.imageflag, this.videoflag);
  }

  assign_layout(isText, isImage, isVideo) {
    console.log("assign");
    if (isText && isImage && isVideo) {
      console.log('all');
      this.type = 'all';
      console.log(this.type);
    } else if ((isText && isImage && !isVideo) || (isText && !isImage && isVideo) || (!isText && isImage && isVideo)) {
      this.type = 'two';
    } else {
      this.type = 'one';
    }
  }
  }
