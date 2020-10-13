import { Component, Input, OnChanges } from '@angular/core';
import { ICetusStatus } from './CetusStatus';
import { SearchService } from './search.service';

@Component({
  selector: 'app-cetus-status',
  templateUrl: './cetus-status.component.html',
  styleUrls: ['./cetus-status.component.sass']
})
export class CetusStatusComponent implements OnChanges {

  @Input() baseUrl: string;

  constructor(
    private searchService: SearchService
  ) { }

  cetusStatus: ICetusStatus;
  worldCycle = {
    day: {
      name: 'Dia',
      opposite: 'noite'
    },
    night: {
      name: 'Noite',
      opposite: 'dia'
    },
  }

  ngOnChanges(): void {
    this.searchService.getCetus(this.baseUrl).subscribe(cetusStatus =>
      this.cetusStatus = cetusStatus
    )
  }
}

