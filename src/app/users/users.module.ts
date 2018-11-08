import { BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'Courses', component: CoursesComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [CoursesComponent]
})
export class UsersModule { }
