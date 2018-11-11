import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService} from './user.service'
import { AuthguardGuard } from './authguard.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
const routes: Routes = [  
    {path: 'login', component: LoginComponent },
    {path: 'dashboard' ,canActivate:[AuthguardGuard],component: HomeComponent ,
     children:[
      {path:'add-user',component:AddUserComponent},
      {path:'add-category',component:AddCategoryComponent}
      
     ]
    },
    
    
  
];

@NgModule({
  imports: [
    BrowserModule,
  RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent, HomeComponent, AddUserComponent, AddCategoryComponent],
  providers:[UserService,AuthguardGuard]
})
export class AdminModule { }
