import urlParser from 'js-video-url-parser';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Input() id;
  @Output() content = new EventEmitter<Content>();
  @Output() slide = new EventEmitter<Content>();
  textContent: Array<String>;
  text: String;
  slide_content: Content;
  video: String;
  title: String;
  constructor(private courseService: CourseService) {
    this.slide_content = new Content();
  }

  ngOnInit() {
    this.textContent = [];
    console.log(this.id);
    this.slide_content.id = this.id;
  }
  onAddText() {
    this.textContent.push(this.text);
  }
  onRemoveText(content) {
    const index = this.textContent.indexOf(content);
    this.textContent.splice(index, 1);
  }
  onFileSelected(event) {
    console.log(event);
    const image = event.target.files[0];
    const data = new FormData();
    data.append('myFile', image, image.name);
    this.courseService.postImage(data).subscribe(
      res => {
        console.log(res);
        this.slide_content.image = '/images/' + res;
      }
    );
  }

  onDeleteSlide() {
    this.slide.emit(this.slide_content);
  }
  onSaveSlide() {
    let video = urlParser.parse(this.video);
    if (video === undefined) {
      video = '';
    }
    this.slide_content.title = this.title;
    this.slide_content.content = this.textContent;
    this.slide_content.video = video;
    this.content.emit(this.slide_content);
  }
}
