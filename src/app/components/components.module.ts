import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
