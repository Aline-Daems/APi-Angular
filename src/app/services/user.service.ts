import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDTO, loginForm, registerForm, User} from "../Models/user";

import {UrlApil} from "../urlApil";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userConnected = new BehaviorSubject<string | null>(null)
 //  url = "localhost:8080/"
  constructor(private readonly _httpClient: HttpClient,
              @Inject(UrlApil) private  _url: string) {


  }

  getAll(){

    return this._httpClient.get<User[]>(this._url+"all")
  }

  login(loginForm: loginForm){

    // on retourne une méthode POST car requete POST envoyée par le back end + en donne l'URL. Variable _url instanciée dans le provider pour mettre en valeur l'url du site + le endpoint et on passe le formulaire
   // On fait un .pipe pour transformer le flux de donnée
    return this._httpClient.post<AuthDTO>(this._url+'auth/login', loginForm).pipe(
      tap(data =>{
        // on set l'item du localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("login", data.login)
        this.userConnected.next(data.login)

      })

    )



  }
/*  isAuthenticated(){
    return this.isAuthenticated.value;
  }*/
  register(registerForm : registerForm){
    return this._httpClient.post(this._url+'professors/create', registerForm)

    // bug manque l'id du cours dans le register form

  }
}
