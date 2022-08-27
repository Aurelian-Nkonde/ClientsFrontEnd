import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/client-interface';
import { ClientService } from 'src/app/client.service';


@Component({
  selector: 'app-lists-client',
  templateUrl: './lists-client.component.html',
  styleUrls: ['./lists-client.component.css']
})
export class ListsClientComponent implements OnInit {

  clients: ClientInterface[] = [];

  constructor(private service: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void{
    this.service.getClients().subscribe(data => this.clients = data);
  }

}
