import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConstructionProgress } from './ConstructionProgress';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http:HttpClient
  ) { }

  private param:string= "/constructionProgress";

  getConstructionProgress(baseUrl:string): Observable<IConstructionProgress>{
    return this.http.get<IConstructionProgress>(baseUrl+this.param)

  }
}
