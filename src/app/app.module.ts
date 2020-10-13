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
import { NotifyMenuComponent } from './notify-menu/notify-menu.component';
import { CetusStatusComponent } from "./notify-menu/cetus-status/cetus-status.component";
import { AlertsComponent } from './notify-menu/alerts/alerts.component';
import { EarthcycleComponent } from './notify-menu/earthcycle/earthcycle.component';
import { ArbitrationComponent } from './notify-menu/arbitration/arbitration.component';
import { InvasionComponent } from './notify-menu/invasion/invasion.component';
import { ConstructionProgressComponent } from './notify-menu/invasion/construction-progress/construction-progress.component';
import { FissureComponent } from './notify-menu/fissure/fissure.component';
import { VallisStatusComponent } from './notify-menu/vallis-status/vallis-status.component';
import { EventsComponent } from './notify-menu/events/events.component';
import { SyndicateComponent } from './notify-menu/syndicate/syndicate.component';
import { KuvaComponent } from './notify-menu/kuva/kuva.component';

@NgModule({
  declarations: [
    AppComponent,
    DarvoDetailComponent,
    PlatformComponent,
    BackButtonComponent,
    HeaderComponent,
    NotifyMenuComponent,
    CetusStatusComponent,
    AlertsComponent,
    EarthcycleComponent,
    ArbitrationComponent,
    InvasionComponent,
    ConstructionProgressComponent,
    FissureComponent,
    VallisStatusComponent,
    EventsComponent,
    SyndicateComponent,
    KuvaComponent
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
