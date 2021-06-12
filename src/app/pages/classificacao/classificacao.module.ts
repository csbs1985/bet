import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassificacaoPageRoutingModule } from './classificacao-routing.module';

import { ClassificacaoPage } from './classificacao.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassificacaoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClassificacaoPage]
})
export class ClassificacaoPageModule {}
