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
  alerts: IAlerts[]=[]

  ngOnChanges(): void {
    this.listService.getAlerts(this.baseUrl).subscribe(alerts =>
      this.alerts = alerts)

  }

  countDown(date: string) {
    const expiry = new Date(date);
    const now = new Date(Date.now());
    const diff = new Date(
      expiry.getFullYear() - now.getFullYear(),
      expiry.getMonth() - now.getMonth(),
      expiry.getDate() - now.getDate(),
      expiry.getHours() - now.getHours(),
      expiry.getMinutes() - now.getMinutes(),
      expiry.getSeconds() - now.getSeconds()
    )
    return diff
  }

}
