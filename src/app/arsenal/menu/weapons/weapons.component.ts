import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.sass']
})
export class WeaponsComponent implements OnInit {

  @Input() baseUrl:string;
  constructor() { }

  @Output() exit=new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.exit.emit()
  }
}
