import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  notificacaoLength = true;

  constructor() { }

  setNotificacao(tipo): void {
    this.notificacaoLength = tipo;
  }
}
