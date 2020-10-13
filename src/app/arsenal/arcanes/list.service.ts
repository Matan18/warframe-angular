import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArcane } from './Arcane';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }
  private param: string = 'arcanes'

  getArcanes(baseUrl: string): Observable<IArcane[]> {
    return this.http.get<IArcane[]>(baseUrl + this.param)

  }
}
