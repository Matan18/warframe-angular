import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFissure } from './Fissure';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  order: { [name: string]: number } = {}
  constructor(
    private http: HttpClient
  ) { }
  
  private param: string = '/fissures'

  compare(a: IFissure, b: IFissure): number {
    return a.tierNum - b.tierNum
  }
  getFissures(baseUrl: string): Observable<IFissure[]> {
    return this.http.get<IFissure[]>(baseUrl + this.param).pipe(map(fissures => fissures.sort(this.compare)));
  }

}
