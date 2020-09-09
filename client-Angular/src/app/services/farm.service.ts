import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farm } from '../common/farm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmService {



  private baseUrl = 'http://localhost:5000/api/farms'

  constructor(private httpClient: HttpClient) { }

  // Read
  getFarms() {
    return this.httpClient.get<Farm[]>(`${this.baseUrl}`);
  }

  createFarm(farm: Farm) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<Farm>(this.baseUrl, farm, httpOptions);
  }

  updateFarm(id:string, farm: Farm) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.put<Farm>(`${this.baseUrl}`+'/'+id, farm, httpOptions);
  }

  getFarmById(id:string){
    return this.httpClient.get<Farm>(`${this.baseUrl}`+'/'+id);
  }

  deleteFarm(id:string){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.delete(`${this.baseUrl}`+'/remove/'+id);
   // return this.httpClient.delete(`${this.baseUrl}`+'/'+id);
  }
}