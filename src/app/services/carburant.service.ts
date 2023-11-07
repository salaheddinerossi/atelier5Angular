import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Station} from "../models/Station";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Carburant} from "../models/Carburant";

@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  private baseURL = 'http://localhost:8080/carburant/';

  constructor(private http:HttpClient) { }

  getAllCarburants():Observable<Carburant[]> {
    return this.http.get<Carburant[]>(`${this.baseURL}`)
  }

  deleteCarburant(id:String){
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

  editCarburant(carburant:Carburant){
    return this.http.put(`${this.baseURL}`,carburant,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    })
  }

  getCarburant(id:String){
    return this.http.get<Carburant>(this.baseURL+id);
  }

  addCarburant(carburant:Carburant){
    return this.http.post(`${this.baseURL}`,carburant,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Expect a text response
    });
  }

}
