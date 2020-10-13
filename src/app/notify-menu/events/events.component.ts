import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IEvents } from './Events';
import { ListService } from './list.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnChanges {

  @Input() baseUrl: string;

  constructor(
    private listService: ListService
  ) { }

  events: IEvents[];

  ngOnChanges(): void {
    this.listService.getEvents(this.baseUrl).subscribe(events =>
      this.events = events
    )
  }

}
