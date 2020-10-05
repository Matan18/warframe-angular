import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarvoDetailComponent } from './darvo-detail/darvo-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatformComponent } from './platform/platform.component';
import { ArsenalComponent } from './arsenal/arsenal.component';
import { MenuComponent } from './arsenal/menu/menu.component';
import { WarframesComponent } from './arsenal/menu/warframes/warframes.component';
import { WeaponsComponent } from './arsenal/menu/weapons/weapons.component';

@NgModule({
  declarations: [
    AppComponent,
    DarvoDetailComponent,
    PlatformComponent,
    ArsenalComponent,
    MenuComponent,
    WarframesComponent,
    WeaponsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
