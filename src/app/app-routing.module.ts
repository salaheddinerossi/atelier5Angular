import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./Components/station-list/station-list.component";
import {CreateStationComponent} from "./Components/create-station/create-station.component";
import {UpdateStationComponent} from "./Components/update-station/update-station.component";

const routes: Routes = [
  {path:"station",component:StationListComponent},
  {path:"add-station",component:CreateStationComponent},
  {path:"update-station/:id",component:UpdateStationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
