import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() pagina;

  menu = [
    {
      rota: '/inicio',
      icone: '../../../assets/svg/inicio.svg',
      ativo: false
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

  ngOnInit() {
    this.menu.forEach(item => {
      item.ativo = false;
      if (item.rota === this.pagina) {
        item.ativo = true;
      }
    });
  }

  selecionarItemMenu(rota): void {
    this.router.navigate([rota]);
  }
}
