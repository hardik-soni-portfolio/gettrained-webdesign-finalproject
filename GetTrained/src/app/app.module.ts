import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatDividerModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatChipsModule,  MatSelectModule, MatOptionModule, MatTableModule,MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { appRoutes } from './routes/routes';
import { ActivateComponent } from './components/activate/activate.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QueryComponent } from './components/query/query.component';
import { QuerylistComponent } from './components/querylist/querylist.component';
import { AddqueryComponent } from './components/addquery/addquery.component';
import { ListCategoryComponent } from './components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './components/createCategory/createCategory.component';
import {CategoryService} from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ActivateComponent,
    LoginComponent,
    HomeComponent,
    QueryComponent,
    QuerylistComponent,
    AddqueryComponent,
    CreateCategoryComponent,
    ListCategoryComponent
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
    MatSnackBarModule,
    MatToolbarModule, 
    MatDividerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
