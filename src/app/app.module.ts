import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationListComponent } from './Components/station-list/station-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { CreateStationComponent } from './Components/create-station/create-station.component';
import { UpdateStationComponent } from './Components/update-station/update-station.component';
import { CreateCarburantComponent } from './Components/create-carburant/create-carburant.component';
import { CarburantListComponent } from './Components/carburant-list/carburant-list.component';
import { UpdateCarburantComponent } from './Components/update-carburant/update-carburant.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    CreateStationComponent,
    UpdateStationComponent,
    CreateCarburantComponent,
    CarburantListComponent,
    UpdateCarburantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
