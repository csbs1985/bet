import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BuscaPage } from './pages/busca/busca.page';
import { CadastrarPoliticaPage } from './pages/cadastrar-politica/cadastrar-politica.page';
import { CalendarioPage } from './pages/calendario/calendario.page';
import { ClassificacaoPage } from './pages/classificacao/classificacao.page';
import { ContaPage } from './pages/conta/conta.page';
import { EntrarPage } from './pages/entrar/entrar.page';
import { GrupoPage } from './pages/grupo/grupo.page';
import { InicioPage } from './pages/inicio/inicio.page';
import { NotificacaoPage } from './pages/notificacao/notificacao.page';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '*', component: InicioPage },
  { path: 'inicio', component: InicioPage },
  { path: 'busca', component: BuscaPage },
  { path: 'classificacao', component: ClassificacaoPage },
  { path: 'notificacao', component: NotificacaoPage },
  { path: 'calendario', component: CalendarioPage },
  { path: 'grupo', component: GrupoPage },
  { path: 'conta', component: ContaPage },
  { path: 'entrar', component: EntrarPage },
  { path: 'cadastrar-politica', component: CadastrarPoliticaPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
