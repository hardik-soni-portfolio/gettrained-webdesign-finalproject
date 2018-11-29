import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './createCategory.component.html',
  styleUrls: ['./createCategory.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    // this.createCategoryForm = this.fb.group({
    //   category_name:
    // });
  }

  ngOnInit() {
  }

}
