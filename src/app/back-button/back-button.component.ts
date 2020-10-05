import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.sass']
})
export class BackButtonComponent implements OnInit {

  @Input() value: string;
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    this.click.emit(event)
  }

}
