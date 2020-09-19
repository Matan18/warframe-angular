import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICetusStatus } from './CetusStatus';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  private param: string = '/cetusCycle'

  getCetus(baseUrl: string): Observable<ICetusStatus> {
    return this.http.get<ICetusStatus>(baseUrl + this.param)
  }
}
