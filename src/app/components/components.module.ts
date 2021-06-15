import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ItemClassificacaoComponent } from './item-classificacao/item-classificacao.component';
import { MenuComponent } from './menu/menu.component';
import { OopsComponent } from './oops/oops.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent,
    OopsComponent,
    ItemClassificacaoComponent,
    PerfilComponent
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    BuscaComponent,
    TabsComponent,
    OopsComponent,
    ItemClassificacaoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
