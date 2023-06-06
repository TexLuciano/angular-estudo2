import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Produtos } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  base = 'http://localhost:3001/'

  constructor(private http: HttpClient) {

  }

  getProdutos():Observable<Produtos>{

    return this.http.get<Produtos>(`${this.base}produtos`)
  }

}
