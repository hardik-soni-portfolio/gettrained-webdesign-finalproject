
import { Routes } from '@angular/router';
import { AppComponent } from './../app.component';
import { ListCategoryComponent } from './../components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './../components/createCategory/createCategory.component';

export const appRoutes: Routes = [
    { path: 'createCategory', component: CreateCategoryComponent, pathMatch: 'full'},
    { path: 'categories', component: ListCategoryComponent,pathMatch: 'full' },
];