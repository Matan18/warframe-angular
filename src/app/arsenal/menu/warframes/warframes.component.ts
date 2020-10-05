import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.sass']
})
export class WarframesComponent implements OnInit {

  @Input() baseUrl: string;
  constructor() { }

  @Output() exit=new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.exit.emit()
  }
}
