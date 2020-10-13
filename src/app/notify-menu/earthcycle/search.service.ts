import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEarthCycle } from './EarthCycle';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  private param: string = "/earthCycle"

  getEarthInfos(baseUrl: string): Observable<IEarthCycle> {
    return this.http.get<IEarthCycle>(baseUrl + this.param)
  }
}
