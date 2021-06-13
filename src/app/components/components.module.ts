import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { TabsComponent } from './tabs/tabs.component';
import { OopsComponent } from './oops/oops.component';
import { ItemClassificacaoComponent } from './item-classificacao/item-classificacao.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent,
    OopsComponent,
    ItemClassificacaoComponent
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent,
    OopsComponent,
    ItemClassificacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
