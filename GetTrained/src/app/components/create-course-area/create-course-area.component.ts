import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course-area',
  templateUrl: './create-course-area.component.html',
  styleUrls: ['./create-course-area.component.scss']
})
export class CreateCourseAreaComponent implements OnInit {
  components: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.components = document.getElementsByTagName('app-create-content');
    this.components.forEach(element => {

    });
  }
}
