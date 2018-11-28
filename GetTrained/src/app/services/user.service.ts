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
}