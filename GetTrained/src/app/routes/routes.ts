import { ActivateComponent } from '../components/activate/activate.component';
import { RegisterComponent } from './../components/register/register.component';
import { UserComponent } from './../components/user/user.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegisterComponent}]
  },
  {
    path: 'activate/:token', component: ActivateComponent
  }
];
