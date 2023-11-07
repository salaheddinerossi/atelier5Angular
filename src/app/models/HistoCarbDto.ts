import {Carburant} from "./Carburant";
import {Station} from "./Station";

export interface HistoCarbDto{
    id:String,
    prix:number,
    date:string,
    carburantId:string,
    stationId:String
}
