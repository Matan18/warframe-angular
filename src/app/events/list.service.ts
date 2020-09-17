import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvents } from './Events';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http:HttpClient
  ) { }

  private param:string='/events'
  
  getEvents(baseUrl:string):Observable<IEvents[]>{
    return this.http.get<IEvents[]>(baseUrl+this.param);
  }
}
