import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.sass']
})
export class WarframesComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    listService: ListService
  ) { }

  @Output() exit = new EventEmitter();

  ngOnInit(): void {

  }

  onClick() {
    this.exit.emit()
  }
}
