import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioModule } from './inicio/inicio.module';
import { BuscaModule } from './busca/busca.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    BuscaModule
  ]
})
export class PagesModule { }
