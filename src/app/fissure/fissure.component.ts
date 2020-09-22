import { Component, Input, OnInit } from '@angular/core';
import { IFissure } from './Fissure';
import { ListService } from './list.service';

@Component({
  selector: 'app-fissure',
  templateUrl: './fissure.component.html',
  styleUrls: ['./fissure.component.sass']
})
export class FissureComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }
  fissures: IFissure[]

  ngOnInit(): void {
    this.listService.getFissures(this.baseUrl).subscribe(fissures =>
      this.fissures = fissures
    )
  }

  countDown(date: string) {
    const expiry = new Date(date);
    const now = new Date(Date.now());
    const diff = new Date(
      expiry.getFullYear() - now.getFullYear(),
      expiry.getMonth() - now.getMonth(),
      expiry.getDate() - now.getDate(),
      expiry.getHours() - now.getHours(),
      expiry.getMinutes() - now.getMinutes(),
      expiry.getSeconds() - now.getSeconds()
    )
    return diff
  }

}
