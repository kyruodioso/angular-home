import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Slides } from "../interfaces/slides.interface";

@Injectable({providedIn:'root'})
export class SlidesService{
//'https://zillow-com1.p.rapidapi.com/'/propertyExtendedSearch?location=${location}&home_type=${home_type}//
    private apiUrl: string='../../assets/data/slides.json'

  constructor(private http: HttpClient){
  }
  
  

  loadSlide(): Observable<Slides[]>{
    const url=`${this.apiUrl}`
   return this.http.get<Slides[]>(url);        
  }
}