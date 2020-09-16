import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFissure } from './Fissure';
import { ListService } from './list.service';

@Component({
  selector: 'app-fissure',
  templateUrl: './fissure.component.html',
  styleUrls: ['./fissure.component.sass']
})
export class FissureComponent implements OnInit {

  @Input() baseUrl:string;
  constructor(
    private listService:ListService
  ) { }
  fissures:Observable<IFissure[]>

  ngOnInit(): void {
    this.fissures=this.listService.getFissures(this.baseUrl);
  }

}
