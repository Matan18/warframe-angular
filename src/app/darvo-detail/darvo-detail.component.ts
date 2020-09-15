import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IDarvoDealsInfo } from './DarvoDeals';
import { ListService } from './list.service';

@Component({
  selector: 'app-darvo-detail',
  templateUrl: './darvo-detail.component.html',
  styleUrls: ['./darvo-detail.component.sass']
})
export class DarvoDetailComponent implements OnChanges {

  deals: Observable<IDarvoDealsInfo[]>

  @Input() baseUrl: string;

  constructor(
    private listDealsService: ListService
  ) { }

  ngOnChanges() {
    this.deals = this.listDealsService.getDarvoDeals(this.baseUrl);
  }
}
