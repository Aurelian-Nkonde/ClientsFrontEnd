import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { ClientInterface } from 'src/app/client-interface';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  client?: ClientInterface;

  constructor(
    private service: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void{
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getClient(Number(id)).subscribe(data => this.client = data);
  }

}
