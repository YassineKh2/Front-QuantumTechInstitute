import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universite} from "../models/Universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private _http:HttpClient) { }
  getAllUniversites():Observable<Universite[]>{
    return this._http.get<Universite[]>("http://localhost:8083/angular/api/universite/getAllUniversites");
  }
  AddUniversite(uni: Universite): Observable<Universite> {
    return this._http.post<Universite>(`http://localhost:8083/angular/api/universite/addUniversite/${uni.imageUni}`, uni);
  }
  deleteUniversite(uni: Universite): Observable<Universite> {
    return this._http.delete<Universite>(`http://localhost:8083/angular/api/universite/deleteUniversite/${uni.idUniversite}`);
  }

  getUniversiteById(id: number): Observable<Universite> {
    return this._http.get<Universite>(`http://localhost:8083/angular/api/universite/getUniversiteById/${id}`);
  }

  modifyUniversite(uni: Universite): Observable<Universite> {
    return this._http.put<Universite>(`http://localhost:8083/angular/api/universite/updateUniversite`,uni);
  }

  uploadImageUni(formData: FormData): Observable<string> {
    const options = {
      headers: new HttpHeaders({}),
      responseType: 'text' as 'json', // Set the responseType to 'text'
    };
    return this._http.post<string>(`http://localhost:8083/angular/api/universite/uploadImageUniversite`, formData, options);
  }


}
