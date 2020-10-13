import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { syndicateList } from "./Mock";
import { ISyndicate } from './Syndicate';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) {
    this.observable = new Observable((observer) => {
      observer.next(syndicateList)
    })
  }

  observable: Observable<ISyndicate[]>

  param: string = '/syndicateMissions'

  getSyndicates(baseUrl: string): Observable<ISyndicate[]> {
    return this.http.get<ISyndicate[]>(baseUrl + this.param)
  }
}
