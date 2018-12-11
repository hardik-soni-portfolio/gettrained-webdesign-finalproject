import { PreventAccessService } from './services/prevent-access.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDividerModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatChipsModule,  MatSelectModule, MatOptionModule, MatTableModule,MatSnackBarModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { appRoutes } from './routes/routes';
import { ActivateComponent } from './components/activate/activate.component';
import { LoginComponent } from './components/login/login.component';
import { QueryComponent } from './components/query/query.component';
import { QuerylistComponent } from './components/querylist/querylist.component';
import { AddqueryComponent } from './components/addquery/addquery.component';
import { ListCategoryComponent } from './components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './components/createCategory/createCategory.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ActivateComponent,
    LoginComponent,
    QueryComponent,
    QuerylistComponent,
    AddqueryComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    NavbarComponent,
    CourseCreateComponent,
    CourseListComponent,
    ViewCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatMenuModule,
    NgxMatSelectSearchModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PreventAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
