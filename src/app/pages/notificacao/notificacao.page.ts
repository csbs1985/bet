import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  constructor(
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
    this.notificacaoService.setNotificacao(false);
  }

}
