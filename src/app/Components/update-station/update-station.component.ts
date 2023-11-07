import {Component, OnInit} from '@angular/core';
import {StationService} from "../../services/station.service";
import {Station} from "../../models/Station";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit{

  station:Station={
    id:"",
    nom:"",
    addresse:"",
    ville:""
  }
  constructor(private stationService:StationService,private route:ActivatedRoute,private router:Router) {
  }


    ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
      console.log(id)
    if (id){
      this.stationService.getStation(id).subscribe(
          staion =>{

            this.station=staion
          },error => {
            console.error("error : " + error)
          }
      )
    }
  }

  updateStation(){
    this.stationService.editStation(this.station).subscribe(
        () => {

          this.router.navigate(["/staion"])
        },error =>
        {
          console.error("error : " + error)
        }
    );
  }

  cancel(){
      this.router.navigate(["/station"])
  }

}
