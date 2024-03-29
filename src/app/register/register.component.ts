import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CourseService} from "../services/course.service";
import {Course} from "../Models/course";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  array!: Course[];


  $destroyed = new Subject<Boolean>()

  constructor(private readonly _userSecurity: UserService, private readonly _formBuilder: FormBuilder, private readonly _router: Router, private readonly _courseService: CourseService) {

    this.registerForm = this._formBuilder.group({
      numeroMatricule:this._formBuilder.control('', Validators.required),
      nom: this._formBuilder.control('', Validators.required),
      prenom:this._formBuilder.control('', Validators.required),
      titre:this._formBuilder.control('', Validators.required),
      login :this._formBuilder.control('', Validators.required),
      password :this._formBuilder.control('', Validators.required),
      numero :this._formBuilder.control('', Validators.required),
      rue :this._formBuilder.control('', Validators.required),
      codePostal:this._formBuilder.control('', Validators.required),
      ville :this._formBuilder.control('', Validators.required),
      coursEnseignesId:this._formBuilder.control('', Validators.required),


    })

  }

  register(){

    this._userSecurity.register(this.registerForm.value).subscribe(()=>console.log("Enregistré!"))
  }

  ngOnInit() {
    this._courseService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur)=> this.array=valeur,
      error:(err)=>console.log(err.error()),
      complete:()=>console.log("chargement des cours complet")
    })
  };
  ngOnDestroy(){

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

}
