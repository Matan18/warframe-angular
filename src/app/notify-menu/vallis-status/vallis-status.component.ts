import { Component, Input, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { IVallisStatus } from './VallisStatus';

@Component({
  selector: 'app-vallis-status',
  templateUrl: './vallis-status.component.html',
  styleUrls: ['./vallis-status.component.sass']
})
export class VallisStatusComponent implements OnInit {

  @Input() baseUrl: string;
  constructor(
    private listService: ListService
  ) { }
  vallisStatus: IVallisStatus;

  ngOnInit(): void {
    this.listService.getVallisStatus(this.baseUrl).subscribe(observer =>
      this.vallisStatus = observer
    )
  }

}
