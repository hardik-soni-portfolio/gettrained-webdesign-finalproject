import { PreventAccessService } from './../services/prevent-access.service';

import { ActivateComponent } from '../components/activate/activate.component';
import { RegisterComponent } from './../components/register/register.component';
import { UserComponent } from './../components/user/user.component';
import { Routes, CanActivate } from '@angular/router';
import { AppComponent } from './../app.component';
import { LoginComponent } from '../components/login/login.component';
import { AddqueryComponent } from './../components/addquery/addquery.component';
import { QueryComponent } from './../components/query/query.component';
import { QuerylistComponent } from './../components/querylist/querylist.component';
import { ListCategoryComponent } from './../components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './../components/createCategory/createCategory.component';

export const appRoutes: Routes = [
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegisterComponent }]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: AppComponent, canActivate: [PreventAccessService]
  },
  {
    path: 'activate/:token', component: ActivateComponent
  },
  {
    path: 'addquery',
    component: AddqueryComponent,
    pathMatch: 'full',
    canActivate: [PreventAccessService]
  },
  {
    path: 'queries',
    component: QuerylistComponent,
    pathMatch: 'full',
    canActivate: [PreventAccessService]
  },
  {
    path: 'query/:id',
    component: QueryComponent,
    pathMatch: 'full',
    canActivate: [PreventAccessService]
  },
  {
    path: 'createCategory',
    component: CreateCategoryComponent,
    pathMatch: 'full',
    canActivate: [PreventAccessService]
  },
  {
    path: 'categories',
    component: ListCategoryComponent,
    pathMatch: 'full',
    canActivate: [PreventAccessService]
  },
];

