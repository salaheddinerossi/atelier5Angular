import { Component } from '@angular/core';
import {Station} from "../../models/Station";
import {StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import {HistoCarbService} from "../../services/histo-carb.service";
import {HistoCarb} from "../../models/HistoCarb";

@Component({
  selector: 'app-histocarb-list',
  templateUrl: './histocarb-list.component.html',
  styleUrls: ['./histocarb-list.component.css']
})
export class HistocarbListComponent {


  histocarbs:HistoCarb[]=[];

  constructor(private histocarbService:HistoCarbService,private router:Router)  {
  }

  ngOnInit(): void {
    this.histocarbService.getAllHistocarbs().subscribe(
        histocarbs => {
          this.histocarbs=histocarbs;
        }
    )
  }


  editHistocarb(id:String) {
    this.router.navigate(["/update-histocarb/"+id])
  }

  deleteHistocarb(id:String) {
    this.histocarbService.deleteHistocarb(id);
  }


}
