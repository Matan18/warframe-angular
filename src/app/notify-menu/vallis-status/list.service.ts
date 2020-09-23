import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVallisStatus } from "./VallisStatus";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  param: string = "/vallisCycle"

  getVallisStatus(baseUrl: string): Observable<IVallisStatus> {
    return this.http.get<IVallisStatus>(baseUrl + this.param)

  }
}
