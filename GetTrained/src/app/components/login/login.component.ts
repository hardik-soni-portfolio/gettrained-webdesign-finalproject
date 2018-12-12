import { MatDialog, MatDialogRef } from '@angular/material';
import { RemoveSlideDialogComponent } from './../remove-slide-dialog/remove-slide-dialog.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userService: UserService;
  errorMessage: String;
  showErrorMessage: boolean;
  dialogRef: MatDialogRef<RemoveSlideDialogComponent>;
  constructor(userService: UserService, private router: Router, public dialog: MatDialog) {
    this.userService = userService;
   }

   onSubmit(form: NgForm) {
    this.userService.loginUser(form.value).subscribe(
      (res: any) => {
        console.log(res);

        if (res.success) {
          // redirect to main home page
          console.log(res)
          localStorage.setItem('id', res.loggedUser);

          this.router.navigate(['/dashboard']);

          localStorage.setItem('role', res.role);

        } else {
          this.dialog.open(RemoveSlideDialogComponent, {
            width: '250px',
            data: {message: res.message}
          });
        }
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          //this.serverErrorMessage = err.error.join('<br/>');
        } else {
          //this.serverErrorMessage = 'Error occured while submitting the form';
        }
      }
    );
   }

   resetForm(form: NgForm) {
    this.userService.selectedUser = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    form.resetForm();
  }

  ngOnInit() {
    localStorage.clear();
  }

}
