import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() pagina;
  @Input() notificacao;

  menu = [
    {
      pagina: 'inicio',
      svg: '../../../assets/svg/inicio.svg',
      ativo: false
    },
    {
      pagina: 'calendario',
      svg: '../../../assets/svg/calendario.svg',
      ativo: false
    },
    {
      pagina: 'grupo',
      svg: '../../../assets/svg/grupo.svg',
      ativo: false
    },
    {
      pagina: 'classificacao',
      svg: '../../../assets/svg/classificacao.svg',
      ativo: false
    },
    {
      pagina: 'notificacao',
      svg: '../../../assets/svg/notificacao.svg',
      ativo: false
    }
  ];

  habilitaNotificacao = false;
  notificacaoLength: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.habilitaNotificacao = this.notificacao || false;

    this.menu.forEach(item => {
      item.ativo = false;
      if (item.pagina === this.pagina) {
        item.ativo = true;
      }
    });
  }

  selecionarItemMenu(rota): void {
    this.router.navigate(['/' + rota]);
  }
}
