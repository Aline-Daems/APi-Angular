import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenueComponent} from "./bienvenue/bienvenue.component";
import {LoginComponent} from "./login/login.component";

import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:'bienvenue', component: BienvenueComponent},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
