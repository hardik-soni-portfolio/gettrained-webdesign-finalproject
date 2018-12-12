import urlParser from 'js-video-url-parser';
import { Content } from './../../models/content.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() content = new EventEmitter<Content>();
  textContent: Array<String>;
  text: String;
  slide_content: Content;
  video: String;
  title: String;
  constructor() {
    this.slide_content = new Content();
  }

  ngOnInit() {
    this.textContent = [];
  }
  onAddText() {
    this.textContent.push(this.text);
  }
  onRemoveText() {
    this.textContent.pop();
  }
  onFileSelected(event) {
    console.log(event);
    this.slide_content.image = event.target.value;
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
