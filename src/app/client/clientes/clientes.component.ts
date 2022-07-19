import { Component, OnInit } from '@angular/core';
import { Cliente } from '../module/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {_id: '1', nome: 'Anderson Matos', cpf: '86126665546', telefone: '73981344354', endereco: 'Rua das Andorinhas 653 - Moisés Reis' }
];
  displayedColumns = ['_id', 'nome', 'cpf', 'telefone', 'endereco'];

  constructor() { }

  ngOnInit(): void {
  }

}
