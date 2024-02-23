import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlApil} from "../urlApil";
import {studentForm} from "../Models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly _httpClient:HttpClient, @Inject(UrlApil) private  _url:string) { }


  newStudent(studentForm: studentForm){

    return this._httpClient.post(this._url+'student/create', studentForm)

  }

}


