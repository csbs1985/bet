import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacaoService } from 'src/app/services/notificacao.service';

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
      ativo: false
    },
    {
      pagina: 'calendario',
      ativo: false
    },
    {
      pagina: 'grupo',
      ativo: false
    },
    {
      pagina: 'classificacao',
      ativo: false
    },
    {
      pagina: 'notificacao',
      ativo: false
    }
  ];

  notificacaoLength = this.notificacaoService.notificacaoLength;

  constructor(
    private router: Router,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
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
