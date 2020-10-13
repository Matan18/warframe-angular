import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarvoDetailComponent } from './darvo-detail/darvo-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatformComponent } from './header/platform/platform.component';
import { BackButtonComponent } from "./back-button/back-button.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DarvoDetailComponent,
    PlatformComponent,
    BackButtonComponent,
    HeaderComponent
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
