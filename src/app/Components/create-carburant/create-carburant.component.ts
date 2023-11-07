import { Component } from '@angular/core';
import {CarburantService} from "../../services/carburant.service";
import {Router} from "@angular/router";
import {Carburant} from "../../models/Carburant";

@Component({
  selector: 'app-create-carburant',
  templateUrl: './create-carburant.component.html',
  styleUrls: ['./create-carburant.component.css']
})
export class CreateCarburantComponent {


  carburant:Carburant={
    id:"",
    nom:"",
    description:""
  }
  constructor(private carbutantService:CarburantService,private router:Router) {
  }

  onSubmit(){
    this.carbutantService.addCarburant(this.carburant).subscribe(
        data => {
          this.router.navigate(["/carburant"])
        },error =>
        {
          console.error("the error is: " + error)
        }
    )
  }

}
