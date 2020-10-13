import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArbitrationData } from './Arbitration';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }
  private param: string = "/arbitration"

  getArbitration(baseUrl: string): Observable<IArbitrationData> {
    return this.http.get<IArbitrationData>(baseUrl + this.param)
  }


}
