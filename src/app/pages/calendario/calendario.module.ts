import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarioPage } from './calendario.page';

@NgModule({
  declarations: [
    CalendarioPage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CalendarioPage
  ],
})
export class CalendarioModule { }
