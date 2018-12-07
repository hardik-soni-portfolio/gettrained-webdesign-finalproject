import { Content } from './../models/content.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedSlide: Content = {
    title: '',
    content: [],
    image: '',
    video: ''
  };

  constructor() { }
}
