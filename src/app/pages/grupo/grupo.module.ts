import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { GrupoPage } from './grupo.page';

@NgModule({
  declarations: [
    GrupoPage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    GrupoPage
  ],
})
export class GrupoModule { }
