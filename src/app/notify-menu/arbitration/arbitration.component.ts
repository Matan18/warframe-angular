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

}
