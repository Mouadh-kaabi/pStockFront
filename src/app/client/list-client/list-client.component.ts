import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients : Client [];
  client : Client ; 
  id:number;
  idClientAnuu : number ;
  constructor(private serviceClient:ClientService,private router : Router) { }

  ngOnInit(): void {

    this.getAllClient();
  }


  getAllClient()
  {
    this.serviceClient.getAllClient().subscribe(
      
      (allClients: Client[]) => {
        this.clients = allClients;
        console.log(this.clients);

        /* this.patients.sort((a, b)=>(
          a.id - b.id
        )); */
      },
      (error) => {
        console.log(error);
      }
    );
  }


  annulerClient(id:number)
  {
    this.serviceClient.deleteClient(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          
          this.getAllClient();
        },  
        error => console.log(error));  

  }


  




}
