import { ActivateComponent } from '../components/activate/activate.component';
import { RegisterComponent } from './../components/register/register.component';
import { UserComponent } from './../components/user/user.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegisterComponent}]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'activate/:token', component: ActivateComponent
  }
];
