import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArcane } from './Arcane';
import { ListService } from './list.service';

@Component({
  selector: 'app-arcanes',
  templateUrl: './arcanes.component.html',
  styleUrls: ['./arcanes.component.sass']
})
export class ArcanesComponent implements OnInit {

  @Input() baseUrl: string;
  @Output() exit = new EventEmitter();
  constructor(
    private listService: ListService
  ) { }
  arcanes: IArcane[];

  ngOnInit(): void {
    this.listService.getArcanes(this.baseUrl).subscribe(arcanes =>
      this.arcanes = arcanes.map(arcane=>{
        arcane.selected=false
        return arcane
      })
    )
  }

  onSelect(regex: string) {
    this.arcanes.map(arcane => {
      if(arcane.selected===true){
        arcane.selected=false
        return arcane
      }
      arcane.selected = false
      if (arcane.regex === regex) {
        arcane.selected = true
      }
      return arcane
    })
  }

  onClick() {
    this.exit.emit()
  }
}
