import { InicioPage } from './pages/inicio/inicio.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BuscaPage } from './pages/busca/busca.page';
import { ClassificacaoPage } from './pages/classificacao/classificacao.page';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '*', component: InicioPage },
  { path: 'inicio', component: InicioPage },
  { path: 'busca', component: BuscaPage },
  { path: 'classificacao', component: ClassificacaoPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
