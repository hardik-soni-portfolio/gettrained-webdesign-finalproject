
import { ActivateComponent } from '../components/activate/activate.component';
import { RegisterComponent } from './../components/register/register.component';
import { UserComponent } from './../components/user/user.component';
import { Routes } from '@angular/router';
import { AppComponent } from './../app.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { AddqueryComponent} from './../components/addquery/addquery.component';
import { QueryComponent} from './../components/query/query.component';
import { QuerylistComponent} from './../components/querylist/querylist.component';
import { ListCategoryComponent } from './../components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './../components/createCategory/createCategory.component';

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
  },
  {
    path: 'addquery',
    component: AddqueryComponent,
    pathMatch : 'full'
  },
  {
    path: 'queries',
    component: QuerylistComponent,
    pathMatch : 'full'
  },
  {
    path: 'query/:id',
    component: QueryComponent,
    pathMatch : 'full'
  },
  { path: 'createCategory', component: CreateCategoryComponent, pathMatch: 'full'},
  { path: 'categories', component: ListCategoryComponent,pathMatch: 'full' },
];

