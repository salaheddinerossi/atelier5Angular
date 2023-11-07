import { Component } from '@angular/core';
import {Station} from "../../models/Station";
import {StationService} from "../../services/station.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent {
  station:Station={
    id:"",
    nom:"",
    ville:"",
    addresse:""
  };

  constructor(private stationService:StationService,private router:Router) {
  }

  onSubmit(){
    this.stationService.addStation(this.station).subscribe(
        data => {
        this.router.navigate(["/station"])
      },error =>
        {
          console.error("the error is: " + error)
        }
    )
  }




}
