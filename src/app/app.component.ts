import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Warframe';
  platform='pc';
  url='https://api.warframestat.us/';
  baseUrl=this.url+this.platform;

  changePlatform(value:string){
    this.platform=value;
    this.baseUrl=this.url+this.platform;
  }
}
