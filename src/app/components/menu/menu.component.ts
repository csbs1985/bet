import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu = [
    {
      rota: '/inicio',
      icone: '../../../assets/svg/inicio.svg',
      ativo: true
    },
    {
      rota: '/calendario',
      icone: '../../../assets/svg/calendario.svg',
      ativo: false
    },
    {
      rota: '/jogo',
      icone: '../../../assets/svg/jogo.svg',
      ativo: false
    },
    {
      rota: '/grupo',
      icone: '../../../assets/svg/grupo.svg',
      ativo: false
    },
    {
      rota: '/classificacao',
      icone: '../../../assets/svg/classificacao.svg',
      ativo: false
    }
  ];

  constructor(private router: Router) { }

  selecionarItemMenu(rota): void {
    this.menu.forEach(item => item.rota === rota ? item.ativo = true : item.ativo = false);
    this.router.navigate([rota]);
  }
}
