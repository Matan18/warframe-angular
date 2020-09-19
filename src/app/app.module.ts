import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarvoDetailComponent } from './darvo-detail/darvo-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatformComponent } from './platform/platform.component';
import { NotifyMenuComponent } from './notify-menu/notify-menu.component';
import { CetusStatusComponent } from "./notify-menu/cetus-status/cetus-status.component";

@NgModule({
  declarations: [
    AppComponent,
    DarvoDetailComponent,
    PlatformComponent,
    NotifyMenuComponent,
    CetusStatusComponent,
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
