import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlApil} from "../urlApil";
import {sectionForm} from "../Models/section";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private readonly _httpClient: HttpClient, @Inject(UrlApil) private _url:string) { }

  newSection(sectionForm : sectionForm){
    return this._httpClient.post(this._url+'section/create', sectionForm)
  }
}
