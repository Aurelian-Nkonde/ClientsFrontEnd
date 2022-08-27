import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  @Input() id?: number;

  constructor(private service: ClientService) { }

  ngOnInit(): void {
  }

  deleteClient(): void{
    this.service.deleteClient(Number(this.id)).subscribe();
  }

}
