import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private apiUrl = 'http://localhost:8083/angular/api/bloc/'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  addBloc(bloc: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"addbloc", bloc);
  }

  updateBloc(idBloc: number, bloc: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${idBloc}`, bloc);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"all");
  }

  findById(idBloc: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${idBloc}`);
  }

  delete(idBloc: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+"delete"}/${idBloc}`);
  }
}
