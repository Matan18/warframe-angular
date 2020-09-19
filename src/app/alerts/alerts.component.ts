import { Component, Input, OnChanges } from '@angular/core';
import { IAlerts } from './Alerts';
import { ListService } from './list.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnChanges {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }
  alerts: IAlerts[]

  ngOnChanges(): void {
    this.listService.getAlerts(this.baseUrl).subscribe(alerts =>
      this.alerts = alerts)

  }

}
