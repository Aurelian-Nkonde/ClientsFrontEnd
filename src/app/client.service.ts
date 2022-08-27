import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientInterface } from './client-interface';
import { CLIENTS } from './client-model';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = "https://localhost:7031/api/home";

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientInterface[]>{
    return this.http.get<ClientInterface[]>(this.url);
  }

  getClient(id: number): Observable<ClientInterface>{
    let newUrl = `${this.url}/${id}`;
    return this.http.get<ClientInterface>(newUrl);
  }

  deleteClient(id: number): Observable<unknown>{
    let newUrl = `${this.url}/${id}`;
    return this.http.delete(newUrl);
  }

  createClient(data: ClientInterface): Observable<ClientInterface>{
    return this.http.post<ClientInterface>(this.url, data);
  }
}
