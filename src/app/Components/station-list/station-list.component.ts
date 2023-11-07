import {Component, OnInit} from '@angular/core';
import {StationService} from "../../services/station.service";
import {Station} from "../../models/Station";
import {Router} from "@angular/router";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations:Station[]=[];

  constructor(private stationService:StationService,private router:Router)  {
  }

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe(
      stations=>{
        this.stations=stations;
      }
    )
  }


    editStation(id:String) {
      this.router.navigate(["/update-station/"+id])
    }

    deleteStation(id:String) {
      this.stationService.deleteStation(id);
    }


}
