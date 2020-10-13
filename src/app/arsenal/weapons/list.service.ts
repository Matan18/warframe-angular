import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeapon } from './Weapon';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  private param: string = 'weapons';

  getWeapons(baseUrl: string): Observable<IWeapon[]> {
    return this.http.get<IWeapon[]>(baseUrl + this.param);
  }
}
