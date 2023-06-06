import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [CadastroComponent, ListagemComponent],

  imports: [CommonModule, ProdutoRoutingModule, MatCardModule,BrowserModule ],
})
export class ProdutoModule {}
