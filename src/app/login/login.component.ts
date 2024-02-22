import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
constructor(private readonly _userService:UserService, private readonly _formBuilder: FormBuilder, private readonly _router:Router) {


  this.loginForm = this._formBuilder.group({
    login: this._formBuilder.control('', Validators.required),
    password : this._formBuilder.control('', Validators.required)
  });
}

login(){

  this._userService.login(this.loginForm.value).subscribe({
    next:(response) => {
      this._router.navigate(['bienvenue'])
    },
    error: (err) => {
      if(err.error.status === 403){
        alert(err.error.message())
      }
    }
  });
}

}
