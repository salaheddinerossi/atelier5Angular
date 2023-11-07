import {Carburant} from "./Carburant";
import {Station} from "./Station";

export interface HistoCarb{
    id:String,
    prix:number,
    date:string,
    carburant:Carburant,
    station:Station
}
