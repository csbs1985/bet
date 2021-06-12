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

  habilitaNotificacao = false;
  notificacaoLength: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.habilitaNotificacao = this.notificacao || false;
  }

  selecionarItemMenu(rota): void {
    this.router.navigate([rota]);
  }
}
