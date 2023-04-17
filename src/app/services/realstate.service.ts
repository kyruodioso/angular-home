import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Property } from "../interfaces/property.interface";

@Injectable({providedIn:'root'})
export class RealstateService{
//'https://zillow-com1.p.rapidapi.com/'/propertyExtendedSearch?location=${location}&home_type=${home_type}//
    private apiUrl: string='../../assets/data/properties.json'

  constructor(private http: HttpClient){
  }
  
  

  loadProperties(): Observable<Property[]>{
    const url=`${this.apiUrl}`
   return this.http.get<Property[]>(url);        
  }
}