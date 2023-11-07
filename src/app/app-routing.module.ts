import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./Components/station-list/station-list.component";
import {CreateStationComponent} from "./Components/create-station/create-station.component";
import {UpdateStationComponent} from "./Components/update-station/update-station.component";
import {CarburantListComponent} from "./Components/carburant-list/carburant-list.component";
import {CreateCarburantComponent} from "./Components/create-carburant/create-carburant.component";
import {UpdateCarburantComponent} from "./Components/update-carburant/update-carburant.component";

const routes: Routes = [
  {path:"station",component:StationListComponent},
  {path:"add-station",component:CreateStationComponent},
  {path:"update-station/:id",component:UpdateStationComponent},
  {path:"carburant",component:CarburantListComponent},
  {path:"add-carburant",component:CreateCarburantComponent},
  {path:"update-carburant/:id",component:UpdateCarburantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
