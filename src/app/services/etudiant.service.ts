import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/Etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private _http:HttpClient) { }
  getAllEtudiants():Observable<Etudiant[]>{

    return this._http.get<Etudiant[]>("http://localhost:8083/angular/api/etudiant/getAllEtudiant");
  }
  AddEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this._http.post<Etudiant>("http://localhost:8083/angular/api/etudiant/addEtudiant", etudiant);
  }
}
