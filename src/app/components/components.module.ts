import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
