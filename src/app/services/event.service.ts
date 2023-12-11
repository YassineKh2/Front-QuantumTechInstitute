import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Event} from "../models/Event";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http:HttpClient) { }
  getAllEvents():Observable<Event[]>{
    return this._http.get<Event[]>("http://localhost:8083/angular/api/event/getAllEvents");
  }
  AddEvent(event: Event): Observable<Event> {
    return this._http.post<Event>("http://localhost:8083/angular/api/event/addEvent", event);
  }
  deleteEvent(idEvent: number): Observable<Event> {
    return this._http.delete<Event>(`http://localhost:8083/angular/api/event/deleteEvent/${idEvent}`);

  }

  getEventById(id: number): Observable<Event> {
    return this._http.get<Event>(`http://localhost:8083/angular/api/event/getById/${id}`);
  }

  modifyEvent(event: Event): Observable<Event> {
    return this._http.put<Event>(`http://localhost:8083/angular/api/event/updateEvent`,event);
  }
}
