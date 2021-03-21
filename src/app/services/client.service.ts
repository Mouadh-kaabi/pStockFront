import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SERVICE_UM } from '../app.constants';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  

  choixmenu: string = 'A' ; 

 

  constructor(private http:HttpClient) { }

  
  createData(client:Client)
  {
    return this.http.post(`${SERVICE_UM}/client/inscription`,client,{responseType:'text'as 'json'})
  }

  getAllClient(){
    return this.http.get<Client[]>(`${SERVICE_UM}/client/all`);
  }

  


deleteClient(id: number): Observable<any> {  
  return this.http.delete(`${SERVICE_UM}/client/delete/${id}`, { responseType: 'text' });  
}  

}
