import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, pipe } from "rxjs";
import { Agents } from "../interfaces/agent.interface";

@Injectable({providedIn:'root'})
export class AgentsService{
//'https://zillow-com1.p.rapidapi.com/'/propertyExtendedSearch?location=${location}&home_type=${home_type}//
    private apiUrl: string='../../assets/data/agents.json'

  constructor(private http: HttpClient){
  }
  
  

  loadAgents(): Observable<Agents[]>{
    const url=`${this.apiUrl}`
   return this.http.get<Agents[]>(url)
  }
}