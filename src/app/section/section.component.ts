import {Component, OnDestroy, OnInit} from '@angular/core';
import {sectionForm} from "../Models/section";
import {SectionService} from "../services/section.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CourseService} from "../services/course.service";
import {Subject, takeUntil} from "rxjs";
import {Course} from "../Models/course";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit, OnDestroy{

  sectionForm : FormGroup;
  $destroyed = new Subject<Boolean>()

  array!: Course[];
  constructor(private readonly _sectionService: SectionService, private readonly _formBuilder:FormBuilder, private readonly _router:Router, private readonly _courseService: CourseService) {

  this.sectionForm = this._formBuilder.group({

    code: this._formBuilder.control('', Validators.required),
    nom:this._formBuilder.control('', Validators.required),
    professeurDirigeantId:this._formBuilder.control('', Validators.required),

    coursId:this._formBuilder.control('', Validators.required)

  })
  }

  newSection(){
    this._sectionService.newSection(this.sectionForm.value).subscribe(()=>("Section enregistrée !!"))
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
