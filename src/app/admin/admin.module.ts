import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { 
    path: 'admin-home', component: HomeComponent ,
    children:[
      {path:'login',component:LoginComponent},
      {path:'add-user',component:AddUserComponent},
    ]
},
];

@NgModule({
  imports: [
    BrowserModule,
  RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent, HomeComponent, AddUserComponent]
})
export class AdminModule { }
