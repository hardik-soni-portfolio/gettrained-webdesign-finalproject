import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule, MatToolbarModule, MatButtonModule, MatSelectModule,MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatChipsModule, MatSnackBarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {appRoutes} from './routes/routes';
import { AppComponent } from './app.component';
import { ListCategoryComponent } from './components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './components/createCategory/createCategory.component';

import {CategoryService} from './services/category.service';

// const routes: Routes = [
//   {path: 'createCategory', component:CreateCategoryComponent},
//   {path: 'listCategory', component: ListCategoryComponent},
//   {path: '', redirectTo: 'list', pathMatch: 'full'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
