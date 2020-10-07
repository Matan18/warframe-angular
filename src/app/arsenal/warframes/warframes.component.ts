import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from './list.service';
import { IWarframe } from './Warframe';

@Component({
  selector: 'app-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.sass']
})
export class WarframesComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }

  @Output() exit = new EventEmitter();
  warframes: IWarframe[]

  ngOnInit(): void {
    this.listService.getWarframes(this.baseUrl).subscribe(warframes =>
      this.warframes = warframes
    )
  }

  onClick() {
    this.exit.emit()
  }
}
