import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWarframe } from './Warframe';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  param: string = 'warframes'

  getWarframes(baseUrl: string): Observable<IWarframe[]> {
    return this.http.get<IWarframe[]>(baseUrl + this.param)
  }
}
