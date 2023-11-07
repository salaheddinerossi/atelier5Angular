import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Station} from "../models/Station";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseURL = 'http://localhost:8080/station/';
  constructor(private http:HttpClient,private router:Router) { }

  getAllStations():Observable<Station[]> {
    return this.http.get<Station[]>(`${this.baseURL}`)
  }

  deleteStation(id:String){
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

  editStation(station:Station){
    return this.http.put(`${this.baseURL}`,station,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    })
  }

  getStation(id:String){
    return this.http.get<Station>(this.baseURL+id);
  }

  addStation(station:Station){
    return this.http.post(`${this.baseURL}`,station,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    });
  }

}
