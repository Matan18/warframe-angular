import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IDarvoDealsInfo } from './DarvoDeals';
import { ListService } from './list.service';

@Component({
  selector: 'app-darvo-detail',
  templateUrl: './darvo-detail.component.html',
  styleUrls: ['./darvo-detail.component.sass']
})
export class DarvoDetailComponent implements OnInit {

  deals: Observable<IDarvoDealsInfo[]>

  @Input() count: number;

  constructor(
    private listDealsService: ListService
  ) { }

  ngOnInit(): void {
    this.deals = this.listDealsService.getDarvoDeals();
  }
}
