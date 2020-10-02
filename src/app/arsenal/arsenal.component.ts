import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.sass']
})
export class ArsenalComponent implements OnInit {

  @Input() baseUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
