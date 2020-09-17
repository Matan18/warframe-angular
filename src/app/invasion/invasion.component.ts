import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvasions } from './Invasion';
import { ListService } from './list.service';

@Component({
  selector: 'app-invasion',
  templateUrl: './invasion.component.html',
  styleUrls: ['./invasion.component.sass']
})
export class InvasionComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }

  invasions: IInvasions[];

  ngOnInit(): void {
    this.listService.getInvasions(this.baseUrl).subscribe(invasions=>
      this.invasions=invasions 
      )
  }

}
