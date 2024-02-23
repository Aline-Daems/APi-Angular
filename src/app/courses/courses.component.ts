import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlApil} from "../urlApil";
import {CourseForm} from "../Models/course";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courseForm: FormGroup;
  constructor(private readonly _courseSecurity: CourseService, private readonly _formBuilder: FormBuilder, private readonly _router: Router) {

  this.courseForm = this._formBuilder.group({
    mnemonique: this._formBuilder.control('', Validators.required),
    intitule: this._formBuilder.control('', Validators.required),
    resume:this._formBuilder.control('', Validators.required),
    sectionId:this._formBuilder.control('', Validators.required),
    professeurTitulaireId:this._formBuilder.control('', Validators.required)
  })
  }


  newCourse(){
    this._courseSecurity.newCourse(this.courseForm.value).subscribe(()=>console.log("Enregistré!"))!

  }
}
