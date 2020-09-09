import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pond } from '../common/pond';

@Injectable({
  providedIn: 'root'
})
export class PondService {



  private baseUrl = 'http://localhost:5000/api/ponds'

  constructor(private httpClient: HttpClient) { }

 
  
  // Read
  getPonds() {
    return this.httpClient.get<Pond[]>(`${this.baseUrl}`);
  }

  getPondById(id:string) {
    return this.httpClient.get<Pond>(`${this.baseUrl}`+'/'+id);
  }

  createPond(pond: Pond) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<Pond>(this.baseUrl, pond, httpOptions);
  }

  updatePond(id:string, pond: Pond) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.put<Pond>(`${this.baseUrl}`+'/'+id, pond, httpOptions);
  }

  getPondsById(id:string){
    return this.httpClient.get<Pond[]>(`${this.baseUrl}`+'/farm/'+id);
  }

  deletePond(id:string){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.delete(`${this.baseUrl}`+'/remove/'+id);
  }
}

