import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService} from './user.service'
import { AuthguardGuard } from './authguard.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { routes } from './admin-routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent, HomeComponent, AddUserComponent, AddCategoryComponent],
  providers:[UserService,AuthguardGuard]
})
export class AdminModule { }
