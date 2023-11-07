import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Station} from "../models/Station";
import {HistoCarb} from "../models/HistoCarb";
import {HistoCarbDto} from "../models/HistoCarbDto";

@Injectable({
  providedIn: 'root'
})
export class HistoCarbService {


  private baseURL = 'http://localhost:8080/histocarb/';
  constructor(private http:HttpClient,private router:Router) { }

  getAllHistocarbs():Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.baseURL}`)
  }

  deleteHistocarb(id:String){
    this.http.delete(`${this.baseURL}${id}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    }).subscribe(
        ()=>{
          location.reload();
        },error => {
          console.log(error);
        }

    );
  }

  updateHistoCarb(histocarb:HistoCarbDto){
    return this.http.put(`${this.baseURL}`,histocarb,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    })
  }

  getHistoCarbById(id:String|null){
    return this.http.get<HistoCarb>(this.baseURL+id);
  }

  addHistocarb(histocarb:HistoCarbDto){
    return this.http.post(`${this.baseURL}`,histocarb,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    });
  }


}
