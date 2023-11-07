import { Component } from '@angular/core';
import {Station} from "../../models/Station";
import {StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import {Carburant} from "../../models/Carburant";
import {CarburantService} from "../../services/carburant.service";

@Component({
  selector: 'app-carburant-list',
  templateUrl: './carburant-list.component.html',
  styleUrls: ['./carburant-list.component.css']
})
export class CarburantListComponent {

  carburants:Carburant[]=[];

  constructor(private carburantService:CarburantService,private router:Router)  {
  }

  ngOnInit(): void {
    this.carburantService.getAllCarburants().subscribe(
        carbutans=>{
          this.carburants=carbutans;
        },error => {
          console.error("error : " + error)
        }
    )
  }


  editCarburant(id:String) {
    this.router.navigate(["/update-carburant/"+id])
  }

  deleteCarburant(id:String) {
    this.carburantService.deleteCarburant(id);
  }

}
