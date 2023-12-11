import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../models/Club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private _http:HttpClient) { }
  getAllClubs():Observable<Club[]>{
    return this._http.get<Club[]>(" http://localhost:8083/angular/api/club/getAllClubs");
  }
  AddClub(c: Club): Observable<Club> {
    return this._http.post<Club>("http://localhost:8083/angular/api/club/addClub", c);
  }
  deleteClub(idClub: number): Observable<Club> {
    return this._http.delete<Club>(`http://localhost:8083/angular/api/club/deleteClub/${idClub}`);
  }

  getClubById(id: number): Observable<Club> {
    return this._http.get<Club>(`http://localhost:8083/angular/api/club/getClubById/${id}`);
  }

  modifyClub(c: Club): Observable<Club> {
    return this._http.put<Club>(`http://localhost:8083/angular/api/club/updateClub`,c);
  }
}
