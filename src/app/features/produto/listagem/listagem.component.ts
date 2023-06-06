import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produtos } from '../models/produto.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

   produtos: Produtos = [];

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((product) => {

     this.produtos = product
     console.log(this.produtos);
     
    });
   
  }

}
