import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-notify-menu',
  templateUrl: './notify-menu.component.html',
  styleUrls: ['./notify-menu.component.sass']
})
export class NotifyMenuComponent implements OnInit {

  @Input() baseUrl: string;
  menuItems = new Observable<IItemList[]>(observer => {
    itemList.map(item => {
      if (item.selected) {
        this.selectedValue = item.name
      }
    })
    observer.next(itemList)
    observer.complete()
  }
  )
  selectedValue: string;

  constructor() { }


  ngOnInit(): void {
  }

  onItemClick(id: number) {
    this.menuItems = this.menuItems.pipe(map(items => items.map((item, index) => {
      if (index === id) {
        if (item.selected) {
          item.selected = false
          this.selectedValue = ''
          return item
        }
        item.selected = true
        this.selectedValue = item.name
      } else {
        item.selected = false
      }
      return item
    })
    ))

  }
}

interface IItemList {
  name: string,
  id: number,
  selected: boolean
}

const itemList: IItemList[] = [
  {
    id: 0,
    name: 'World-Cycles',
    selected: false
  },
  {
    id: 1,
    name: 'Events',
    selected: false
  },
  {
    id: 2,
    name: 'Alertas/Arbritragens',
    selected: false
  },
  {
    id: 3,
    name: 'Invasions',
    selected: false
  },
  {
    id: 4,
    name: 'Syndicato',
    selected: false
  },
  {
    id: 5,
    name: 'Fissures',
    selected: false
  }
]
