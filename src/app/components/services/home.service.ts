import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) {}

  private appUrl = 'http://localhost:3000/';

  getClients(): Observable<any> {

    return this.http.get(`${this.appUrl}clientes`)
  }
}
