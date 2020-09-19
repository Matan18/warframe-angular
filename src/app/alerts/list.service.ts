import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAlerts } from './Alerts';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  param: string = '/alerts';

  constructor(
    private http: HttpClient
  ) { }

  getAlerts(baseUrl: string): Observable<IAlerts[]> {
    return this.http.get<IAlerts[]>(baseUrl + this.param)
  }
}
