import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Input() baseUrl: string;
  constructor() { }
  selectedMenu: string = 'main'

  ngOnInit(): void {
  }

  onClick(value: string) {
    this.selectedMenu = value
  }

}
