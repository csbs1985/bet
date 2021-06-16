import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CadastrarPoliticaPage } from './cadastrar-politica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [CadastrarPoliticaPage],
  exports: [CadastrarPoliticaPage]
})
export class CadastrarPoliticaPageModule { }
