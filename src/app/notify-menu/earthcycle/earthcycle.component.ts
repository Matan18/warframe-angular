import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IEarthCycle } from './EarthCycle';
import { SearchService } from './search.service';

@Component({
  selector: 'app-earthcycle',
  templateUrl: './earthcycle.component.html',
  styleUrls: ['./earthcycle.component.sass']
})
export class EarthcycleComponent implements OnChanges {

  @Input() baseUrl: string;
  constructor(
    private searchService: SearchService
  ) { }

  earthCycleInfo: IEarthCycle;

  ngOnChanges(): void {
    this.searchService.getEarthInfos(this.baseUrl).subscribe(earthInfos =>
      this.earthCycleInfo = earthInfos
    )
  }

}
