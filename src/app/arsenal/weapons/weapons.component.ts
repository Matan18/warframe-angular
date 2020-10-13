import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from './list.service';
import { IWeapon } from './Weapon';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.sass']
})
export class WeaponsComponent implements OnInit {

  @Input() baseUrl: string;
  @Output() exit = new EventEmitter();
  constructor(
    private listService: ListService
  ) { }

  weapons: IWeapon[];

  ngOnInit(): void {
    this.listService.getWeapons(this.baseUrl).subscribe(weapons =>
      this.weapons = weapons
    )
  }

  onClick() {
    this.exit.emit()
  }
}
