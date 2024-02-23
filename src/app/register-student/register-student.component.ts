import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";
import {Course} from "../Models/course";
import {CourseService} from "../services/course.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent implements OnInit, OnDestroy{

  studentForm: FormGroup;
  array!: Course[];
  $destroyed = new Subject<Boolean>()
  constructor(private readonly _studentService: StudentService, private readonly _formBuilder: FormBuilder, private readonly _router:Router, private readonly _courseService: CourseService) {

    this.studentForm = this._formBuilder.group({
      numeroMatricule:this._formBuilder.control('', Validators.required),
      nom: this._formBuilder.control('', Validators.required),
      prenom:this._formBuilder.control('', Validators.required),
      login :this._formBuilder.control('', Validators.required),
      password :this._formBuilder.control('', Validators.required),
      numero :this._formBuilder.control('', Validators.required),
      rue :this._formBuilder.control('', Validators.required),
      codePostal:this._formBuilder.control('', Validators.required),
      ville :this._formBuilder.control('', Validators.required),
      coursSuivisId:this._formBuilder.control('', Validators.required),
      filiereChoisieId:this._formBuilder.control('', Validators.required)

    })
  }

  newStudent(){
    this._studentService.newStudent(this.studentForm.value).subscribe(()=>("Nouveau étudiant enregistré"))
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
