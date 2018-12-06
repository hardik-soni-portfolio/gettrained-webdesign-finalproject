import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoCategories() {
    this.router.navigate(['categories']);
  }
  gotoCreateFeedback() {
    this.router.navigate(['addquery']);
  }
  gotoViewFeedback() {
    this.router.navigate(['queries']);
  }
  logout() {
    this.router.navigate(['login']);
  }
}
