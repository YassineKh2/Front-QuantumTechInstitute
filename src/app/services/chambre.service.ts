import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://localhost:9090/api/items/chambres'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  addChambre(chambre: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, chambre);
  }

  updateChambre(idChambre: number, chambre: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${idChambre}`, chambre);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  findById(idChambre: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${idChambre}`);
  }

  delete(idChambre: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${idChambre}`);
  }
}
