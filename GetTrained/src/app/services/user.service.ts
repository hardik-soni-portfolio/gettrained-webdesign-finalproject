import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }
  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }
  activate(token: String) {
    return this.http.put(environment.apiBaseUrl + '/activate/' + token, token);
  }
  loginUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/login', { 'email': user.email, 'password': user.password });
  }
  getUsers() {
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }
  updateUser(req: any) {
    console.log("user.service");
    return this.http.put(environment.apiBaseUrl + '/updateprogress', req );
  }
}
