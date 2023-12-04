import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../models/Reclamation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private _http:HttpClient) { }
  AddReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this._http.post<Reclamation>("http://localhost:8083/angular/api/reclamation/addReclamation", reclamation);
  }
  getListReclamation(idEtudiant: number): Observable<Reclamation[]> {
    const Url = `http://localhost:8083/angular/api/reclamation/listReclamation/${idEtudiant}`;
    return this._http.get<Reclamation[]>(Url);
  }
  UpdateReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this._http.put<Reclamation>("http://localhost:8083/angular/api/reclamation/updateReclamation", reclamation);
  }
  getreclamationByID(idReclamation: number): Observable<Reclamation> {
    const Url = `http://localhost:8083/angular/api/reclamation/getReclamationById/${idReclamation}`;
    return this._http.get<Reclamation>(Url);
  }
  getAllReclamations():Observable<Reclamation[]>{

    return this._http.get<Reclamation[]>("http://localhost:8083/angular/api/reclamation/getAllReclamation");
  }
  deleteReclamation(idReclamation: number | undefined): Observable<Reclamation> {
    const Url = `http://localhost:8083/angular/api/reclamation/deleteReclamation/${idReclamation}`;
    return this._http.delete<Reclamation>(Url);
  }
  searchReclamationByTitre(titre: string): Observable<Reclamation[]> {
    const searchUrl = `http://localhost:8083/angular/api/reclamation/search/${titre}`;
    return this._http.get<Reclamation[]>(searchUrl);
  }
}
