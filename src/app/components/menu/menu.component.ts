import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu = [
    {
      rota: '/inicio',
      icone: '../../../assets/svg/inicio.svg'
    },
    {
      rota: '/calendario',
      icone: '../../../assets/svg/calendario.svg'
    },
    {
      rota: '/jogos',
      icone: '../../../assets/svg/jogos.svg'
    },
    {
      rota: '/grupo',
      icone: '../../../assets/svg/grupo.svg'
    },
    {
      rota: '/classificacao',
      icone: '../../../assets/svg/classificacao.svg'
    },
    {
      rota: '/notificacao',
      icone: '../../../assets/svg/notificacao.svg'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
