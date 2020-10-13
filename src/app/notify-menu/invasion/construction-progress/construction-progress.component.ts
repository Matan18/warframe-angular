import { Component, Input, OnChanges } from '@angular/core';
import { IConstructionProgress } from './ConstructionProgress';
import { SearchService } from './search.service';

@Component({
  selector: 'app-construction-progress',
  templateUrl: './construction-progress.component.html',
  styleUrls: ['./construction-progress.component.sass']
})
export class ConstructionProgressComponent implements OnChanges {

  @Input() baseUrl:string;
  constructor(
    private searchService:SearchService
  ) { }

  constructionProgress:IConstructionProgress;

  ngOnChanges(): void {
    this.searchService.getConstructionProgress(this.baseUrl).subscribe(construction=>
      this.constructionProgress=construction
      )
  }

}
