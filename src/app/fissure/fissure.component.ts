import { Component, Input, OnInit } from '@angular/core';
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
  fissures:IFissure[]

  ngOnInit(): void {
    this.listService.getFissures(this.baseUrl).subscribe(fissures=>
      this.fissures=fissures
      )
  }

}
