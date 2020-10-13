import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() onChangePlatform = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  changeFunction(value: string) {
    this.onChangePlatform.emit(value);
  }

}
