import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuscaModule } from './busca/busca.module';
import { CalendarioModule } from './calendario/calendario.module';
import { ClassificacaoPageModule } from './classificacao/classificacao.module';
import { ContaPageModule } from './conta/conta.module';
import { GrupoModule } from './grupo/grupo.module';
import { InicioModule } from './inicio/inicio.module';
import { NotificacaoPageModule } from './notificacao/notificacao.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    BuscaModule,
    ClassificacaoPageModule,
    NotificacaoPageModule,
    CalendarioModule,
    GrupoModule,
    ContaPageModule
  ]
})
export class PagesModule { }
