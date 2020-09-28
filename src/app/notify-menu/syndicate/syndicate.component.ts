import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from './list.service';
import { ISyndicate } from './Syndicate';

@Component({
  selector: 'app-syndicate',
  templateUrl: './syndicate.component.html',
  styleUrls: ['./syndicate.component.sass']
})
export class SyndicateComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }

  syndicateList: Observable<ISyndicate[]>

  ngOnInit(): void {
    this.syndicateList = this.listService.getSyndicates(this.baseUrl);
  }

}
