import { Component, OnInit } from '@angular/core';
import { HistoCarbDto } from "../../models/HistoCarbDto";
import { Router } from "@angular/router";
import {Carburant} from "../../models/Carburant";
import {Station} from "../../models/Station";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CarburantService} from "../../services/carburant.service";
import {StationService} from "../../services/station.service";
import {HistoCarbService} from "../../services/histo-carb.service";

@Component({
  selector: 'app-create-histocarb',
  templateUrl: './create-histocarb.component.html',
  styleUrls: ['./create-histocarb.component.css']
})
export class CreateHistocarbComponent implements OnInit {
  histoCarb: HistoCarbDto = {
    id: '',
    prix: 0,
    date: '',
    carburantId: '',
    stationId: ''
  };

  carburants: Carburant[]=[];
  stations: Station[]=[];

  constructor(private carburantService:CarburantService,private stationService:StationService,private histoCarbService: HistoCarbService, private router: Router) {}

  ngOnInit(): void {
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

  onSubmit(): void {
    this.histoCarbService.addHistocarb(this.histoCarb).subscribe(
        () => {
          this.router.navigate(["/histocarb"]);
        }
    );
  }
}
