import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenueComponent} from "./bienvenue/bienvenue.component";
import {LoginComponent} from "./login/login.component";

import {RegisterComponent} from "./register/register.component";
import {CoursesComponent} from "./courses/courses.component";
import {SectionComponent} from "./section/section.component";
import {StudentService} from "./services/student.service";
import {RegisterStudentComponent} from "./register-student/register-student.component";

const routes: Routes = [
  {path:'bienvenue', component: BienvenueComponent},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent},
  {path:'course', component:CoursesComponent},
  {path:'section', component:SectionComponent},
  {path:'student', component:RegisterStudentComponent},
  {path:'', component:LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
