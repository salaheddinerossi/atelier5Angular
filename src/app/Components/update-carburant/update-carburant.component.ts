import { Component } from '@angular/core';
import {StationService} from "../../services/station.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarburantService} from "../../services/carburant.service";
import {Carburant} from "../../models/Carburant";

@Component({
  selector: 'app-update-carburant',
  templateUrl: './update-carburant.component.html',
  styleUrls: ['./update-carburant.component.css']
})
export class UpdateCarburantComponent {

  carburant:Carburant={
    id:"",
    nom:"",
    description:""
  }
  constructor(private carburantService:CarburantService,private route:ActivatedRoute,private router:Router) {
  }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    if (id){
      this.carburantService.getCarburant(id).subscribe(
          carburant =>{

            this.carburant=carburant
          },error => {
            console.error("error : " + error)
          }
      )
    }
  }

  updateCarburant(){
    this.carburantService.editCarburant(this.carburant).subscribe(
        () => {

          this.router.navigate(["/carburant"])
        },error =>
        {
          console.error("error : " + error)
        }
    );
  }

  cancel(){
    this.router.navigate(["/carburant"])
  }


}
