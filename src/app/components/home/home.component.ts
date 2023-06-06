import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map, of, tap } from 'rxjs';


export interface client {
  nome: string;
  sexo: string;
  idade: number;
  salario: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}

  // frutas: string[] = []
  // constructor(){
  //   of('banana', 'limao', 'arnalds', 'pera', 'macaco').pipe(

  //     tap(console.log),
  //     map(fruta => fruta.toUpperCase()),
  //     tap(console.log
  //     ),
  //     filter(fruta => fruta.startsWith('B') ||fruta.startsWith('M'))

  //     ).subscribe( res => {
  //       this.frutas.push(res)
  //     })
  // 

 

  clientes!: client[];

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource!: MatTableDataSource<any>;
  ngOnInit() {

    

    this.homeService.getClients().subscribe((clientes) => {
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
    });
  }
}
