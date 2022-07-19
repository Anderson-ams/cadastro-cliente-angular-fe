import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { ClientRoutingModule } from './client-routing.module';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule
  ]
})
export class ClientModule { }
