import { Component, Input, OnChanges } from '@angular/core';
import { IArbitrationData } from './Arbitration';
import { SearchService } from './search.service';

@Component({
  selector: 'app-arbitration',
  templateUrl: './arbitration.component.html',
  styleUrls: ['./arbitration.component.sass']
})
export class ArbitrationComponent implements OnChanges {

  @Input() baseUrl: string;
  constructor(
    private searchService: SearchService
  ) { }

  arbitration: IArbitrationData;

  ngOnChanges(): void {
    this.searchService.getArbitration(this.baseUrl).subscribe(arbitration =>
      this.arbitration = arbitration
    )
  }


  countDown(date: string): Date {
    //colocar como repetitivo
    const expiry = new Date(date);
    const now = new Date(Date.now());
    const diff =
      new Date(expiry.getFullYear() - now.getFullYear(),
        expiry.getMonth() - now.getMonth(),
        expiry.getDate() - now.getDate(),
        expiry.getHours() - now.getHours(),
        expiry.getMinutes() - now.getMinutes(),
        expiry.getSeconds() - now.getSeconds()
      )
    return diff
  }

}
