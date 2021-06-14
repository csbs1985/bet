import { AppPage } from './app.page';
import { ComponentsModule } from './components/components.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ClassificacaoPageModule } from './pages/classificacao/classificacao.module';
import { NotificacaoPageModule } from './pages/notificacao/notificacao.module';

@NgModule({
  declarations: [AppPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    ClassificacaoPageModule,
    NotificacaoPageModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
