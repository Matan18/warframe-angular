import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IDarvoDealsInfo, IDarvoSalesInfo } from './DarvoDeals';
import { ListService } from './list.service';

@Component({
  selector: 'app-darvo-detail',
  templateUrl: './darvo-detail.component.html',
  styleUrls: ['./darvo-detail.component.sass']
})
export class DarvoDetailComponent implements OnChanges {

  deals: Observable<IDarvoDealsInfo[]>;
  sales: Observable<IDarvoSalesInfo[]>;

  @Input() baseUrl: string;

  constructor(
    private listDealsService: ListService
  ) { }

  ngOnChanges() {
    this.deals = this.listDealsService.getDarvoDeals(this.baseUrl);
    this.sales = this.listDealsService.getDarvoSales(this.baseUrl);
  }
}
