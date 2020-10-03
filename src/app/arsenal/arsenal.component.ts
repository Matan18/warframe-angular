import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.sass']
})
export class ArsenalComponent implements OnInit {

  @Input() baseUrl: string;
  constructor() { }

  menuItems = MenuItems;
  selectedItem: string;

  ngOnInit(): void {
    this.menuItems.map(item=>{
      if(item.selected){
        this.selectedItem=item.type
      }
    })
  }

  onItemClick(id: number) {
    this.menuItems.map(item => {
      item.selected = false
      if (item.id == id) {
        this.selectedItem = item.type
        item.selected = true
      }
    })

  }

}

interface IMenuItem {
  id: number;
  name: string;
  type: string;
  selected: boolean;
}

const MenuItems: IMenuItem[] = [
  {
    id: 0,
    name: 'Principal',
    type: 'main',
    selected: true
  },
  {
    id: 1,
    name: 'robot',
    type: 'companion',
    selected: false,
  },
  {
    id: 2,
    name: 'archwing',
    type: 'archwing',
    selected: false
  }
]
