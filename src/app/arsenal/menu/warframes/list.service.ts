import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  param: string = '/warframes'

  getWarframes(baseUrl: string) {
    return this.http.get(baseUrl + this.param)
  }
}
