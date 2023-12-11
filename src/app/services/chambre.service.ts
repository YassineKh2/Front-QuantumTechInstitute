import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://localhost:8083/angular/api/chambre/'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  addChambre(chambre: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"addchambre", chambre);
  }

  updateChambre(chambre: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+"updatechambre"}`, chambre);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"all");
  }

  findById(idChambre: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+"findById"}/${idChambre}`);
  }

  delete(idChambre: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+"deletechambre"}/${idChambre}`);
  }
}
