import { Component, Input, OnInit } from '@angular/core';
import { IKuva } from './Kuva';
import { ListService } from './list.service';

@Component({
  selector: 'app-kuva',
  templateUrl: './kuva.component.html',
  styleUrls: ['./kuva.component.sass']
})
export class KuvaComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }

  kuvas: IKuva[]=[]

  ngOnInit(): void {
    this.listService.getKuvas(this.baseUrl)
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
