import { Component, Input, OnChanges } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnChanges {

  @Input() baseUrl: string;
  constructor(
    private listService:ListService
  ) { }

  ngOnChanges(): void {
    console.log("Alert",this.baseUrl)
  }

}
