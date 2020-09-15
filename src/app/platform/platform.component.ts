import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPlatform } from "./Platform";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.sass']
})
export class PlatformComponent implements OnInit {

  @Output() onChangePlatform = new EventEmitter<string>();

  platformOptions: IPlatform[] = [
    {
      name: "PC",
      initial: "pc"
    },
    {
      name: "PS4",
      initial: "ps4"
    },
    {
      name: "Xbox One",
      initial: "xb1"
    },
    {
      name: "Nintendo Switch",
      initial: "swi"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeFunction(value: string) {
    this.onChangePlatform.emit(value);
  }

}
