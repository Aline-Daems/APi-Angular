import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UrlApil} from "./urlApil";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { RegisterComponent } from './register/register.component';
import {authInterceptor} from "./interceptor/auth.interceptor";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    LoginComponent,
    BienvenueComponent,
    RegisterComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

    {provide : UrlApil, useValue:"http://localhost:8080/"},
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
