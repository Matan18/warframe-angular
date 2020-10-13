import { Component, Input, OnInit } from '@angular/core';
import { IInvasions } from './Invasion';
import { ListService } from './list.service';

@Component({
  selector: 'app-invasion',
  templateUrl: './invasion.component.html',
  styleUrls: ['./invasion.component.sass']
})
export class InvasionComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }

  cores = {
    Grineer: "#bd2b32",
    Corpus: "#2b5168",
    Infestado: "#418257"
  }

  invasions: IInvasions[];

  ngOnInit(): void {
    this.listService.getInvasions(this.baseUrl).subscribe(invasions =>
      this.invasions = invasions
    )
  }
 
  gradient(attackingFaction: string, deffendinFaction: string, completion: number): string {
    if (completion > 100) {
      return `linear-gradient(to right, ${this.cores[attackingFaction]} 100%, ${this.cores[attackingFaction]} 100% )`
    }
    if (completion < 0) {
      return `linear-gradient(to right, ${this.cores[deffendinFaction]} 100%, ${this.cores[deffendinFaction]} 100% )`
    }
    return `linear-gradient(to right, ${this.cores[attackingFaction]} ${completion}%, ${this.cores[deffendinFaction]} ${completion}% )`
  }
}
