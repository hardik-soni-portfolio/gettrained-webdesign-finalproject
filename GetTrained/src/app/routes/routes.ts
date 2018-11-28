import { ActivateComponent } from '../components/activate/activate.component';
import { RegisterComponent } from './../components/register/register.component';
import { UserComponent } from './../components/user/user.component';
import { Routes } from '@angular/router';
import { AddqueryComponent} from './../components/addquery/addquery.component';
import { QueryComponent} from './../components/query/query.component';
import { QuerylistComponent} from './../components/querylist/querylist.component';

export const appRoutes: Routes = [
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegisterComponent}]
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
  }
];
