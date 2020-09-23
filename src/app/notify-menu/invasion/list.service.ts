import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvasions } from './Invasion';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(
    private http: HttpClient
  ) { }
  param: string = '/invasions'

  getInvasions(baseUrl: string): Observable<IInvasions[]> {
    return this.http.get<IInvasions[]>(baseUrl + this.param)
  }

}
