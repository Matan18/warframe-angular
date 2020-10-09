import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKuva } from './Kuva';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }
  param: string = '/kuva'

  getKuvas(baseUrl: string): Observable<IKuva[]> {
    return this.http.get<IKuva[]>(baseUrl + this.param);
  }
}
