import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFissure } from './Fissure';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http:HttpClient
  ) { }

  private param:string='/fissures'

  getFissures(baseUrl:string):Observable<IFissure[]>{
    return this.http.get<IFissure[]>(baseUrl+this.param);
  }
}
