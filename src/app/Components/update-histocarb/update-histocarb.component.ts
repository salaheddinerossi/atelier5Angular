import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoCarbDto } from "../../models/HistoCarbDto";
import {HistoCarbService} from "../../services/histo-carb.service";
import {HistoCarb} from "../../models/HistoCarb";
import {Carburant} from "../../models/Carburant";
import {Station} from "../../models/Station";
import {StationService} from "../../services/station.service";
import {CarburantService} from "../../services/carburant.service";

@Component({
  selector: 'app-update-histocarb',
  templateUrl: './update-histocarb.component.html',
  styleUrls: ['./update-histocarb.component.css']
})
export class UpdateHistocarbComponent implements OnInit {

  carburants: Carburant[]=[];
  stations: Station[]=[];


  histoCarb: HistoCarbDto = {
    id: '',
    prix: 0,
    date: '',
    carburantId: '',
    stationId: ''
  };
  constructor(
      private histoCarbService: HistoCarbService,
      private route: ActivatedRoute,
      private router: Router,
      private stationService:StationService,
      private carburantService:CarburantService
  ) {}

  ngOnInit(): void {
    this.getHistoCarb();
    this.stationService.getAllStations().subscribe(
        stations=>{
          this.stations=stations
        },error1 => {
          console.error(error1)
        }
    )

    this.carburantService.getAllCarburants().subscribe(
        carburants => {
          this.carburants = carburants;
        },error => {
          console.error(error)
        }
    )

  }

  getHistoCarb(): void {
    // Get the id from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    this.histoCarbService.getHistoCarbById(id).subscribe(
        (data: HistoCarb) => {
          this.histoCarb.prix = data.prix;
          this.histoCarb.date = data.date;
          this.histoCarb.carburantId = data.carburant.id;
          this.histoCarb.stationId = data.station.id;
          this.histoCarb.id= data.id

        },
        error => console.error(error)
    );
  }

  onSubmit(): void {
    this.histoCarbService.updateHistoCarb(this.histoCarb).subscribe(

        () => {
            console.log(this.histoCarb);
            this.router.navigate(["/histocarb"])
        },
        error => console.error("Error updating HistoCarb: " + error)
    );
  }
}
