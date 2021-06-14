import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificacaoPage } from './notificacao.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [NotificacaoPage],
  exports: [NotificacaoPage]
})
export class NotificacaoPageModule { }
