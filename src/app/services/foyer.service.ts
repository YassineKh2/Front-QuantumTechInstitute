import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Foyer} from "../models/Foyer";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private _http:HttpClient) { }
  getAllFoyers():Observable<Foyer[]>{
    return this._http.get<Foyer[]>("http://localhost:8083/angular/api/getAllFoyers");
  }
  AddFoyer(foyer: Foyer): Observable<Foyer> {
    return this._http.post<Foyer>("http://localhost:8083/angular/api/addFoyer", foyer);
  }
  deleteFoyer(foy: Foyer): Observable<Foyer> {
    return this._http.delete<Foyer>(`http://localhost:8083/angular/api/deleteFoyer/${foy.idFoyer}`);
  }

  getFoyerById(id: number): Observable<Foyer> {
    return this._http.get<Foyer>(`http://localhost:8083/angular/api/getFoyerById/${id}`);
  }

  modifyFoyer(uni: Foyer): Observable<Foyer> {
    return this._http.put<Foyer>(`http://localhost:8083/angular/api/updateFoyer`,uni);
  }

}
