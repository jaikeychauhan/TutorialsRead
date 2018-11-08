import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule} from './admin/admin.module';
import { UsersModule} from './users/users.module';

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes : Routes =[
  // {path: '', loadChildren:()=> System.import('./users').then((comp:any)=> comp.default)},
  // {path: 'Courses', loadChildren:()=> System.import('./users').then((comp:any)=> comp.default)},
  // {path: 'admin-home', loadChildren:()=> System.import('./admin').then((comp:any)=> comp.default)}
  {path: '', loadChildren: './users/users.module#UsersModule'},
   {path: 'Courses',loadChildren: './users/users.module#UsersModule'},
   {path: 'admin-home', loadChildren:'./admin/admin.module#AdminModule'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
