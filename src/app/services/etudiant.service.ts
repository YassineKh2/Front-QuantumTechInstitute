import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  login(etudiant: Etudiant): Observable<Etudiant> {
    return this._http.post<Etudiant>("http://localhost:8083/angular/api/etudiant/login", etudiant);
  }
  etudiantProfileDetail(etudiant: Etudiant): Observable<Etudiant> {
    return this._http.post<Etudiant>("http://localhost:8083/angular/api/etudiant/getEtudiantDetail", etudiant);
  }
  uploadFile(formData: FormData): Observable<string> {
    const options = {
      headers: new HttpHeaders({}),
      responseType: 'text' as 'json', // Set the responseType to 'text'
    };

    return this._http.post<string>(`http://localhost:8083/angular/api/etudiant/upload-file`, formData, options);
  }
  UpdateEtudiantProfile(etudiant: Etudiant): Observable<Etudiant> {
    return this._http.put<Etudiant>("http://localhost:8083/angular/api/etudiant/updateEtudiant", etudiant);
  }
  searchEtudiantsByNomEt(nomEt: string): Observable<Etudiant[]> {
    const searchUrl = `http://localhost:8083/angular/api/etudiant/search/${nomEt}`;
    return this._http.get<Etudiant[]>(searchUrl);
  }
  generatePdf(etudiant: Etudiant): Observable<Blob> {
    return this._http.post("http://localhost:8083/angular/api/etudiant/generate", etudiant, { responseType: 'blob' });
  }
  verifyEmail(email: string): Observable<Etudiant[]> {
    const searchUrl = `http://localhost:8083/angular/api/etudiant/verifyEmail/${email}`;
    return this._http.get<Etudiant[]>(searchUrl);
  }
}
