import {Inject, Injectable} from '@angular/core';
import {Course, CourseForm} from "../Models/course";
import {HttpClient} from "@angular/common/http";
import {UrlApil} from "../urlApil";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private readonly _httpClient: HttpClient, @Inject(UrlApil) private  _url:string) { }

  newCourse(courseForm : CourseForm){

    return this._httpClient.post(this._url+'course/create', courseForm)
  }

  getAll(){
    return this._httpClient.get<Course[]>(this._url+'course/all')
  }
}
