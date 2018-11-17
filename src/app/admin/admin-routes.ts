import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';

export const routes: Routes = [  
    {path: 'login', component: LoginComponent },
    // {path: 'dashboard' ,canActivate:[AuthguardGuard],component: HomeComponent ,
    {path: 'dashboard' ,canActivate:[AuthguardGuard],component: HomeComponent ,
     children:[
      {path:'add-user',component:AddUserComponent},
      {path:'add-category',component:AddCategoryComponent}
     ]
    },
  ];