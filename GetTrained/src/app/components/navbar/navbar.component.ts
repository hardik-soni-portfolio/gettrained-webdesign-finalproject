import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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