export interface User {

  nom: string
}


export interface loginForm{
  login: string;
  password: string
}

export interface registerForm{
    nom:string;
    titre:string;
    prenom:string;
    numeroMatricule:string;
    login:string;
    password:string;
    numero:string;
    rue:string;
    ville:string;
}


export interface AuthDTO {

  login:string;
  token : string;

}
