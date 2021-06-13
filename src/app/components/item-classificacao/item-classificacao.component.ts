import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-classificacao',
  templateUrl: './item-classificacao.component.html',
  styleUrls: ['./item-classificacao.component.scss'],
})
export class ItemClassificacaoComponent implements OnInit {
  @Input() perfil;
  @Input() classificacao;
  @Output() itemClassificacaoResposta = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  selecionarConta(conta): void {
    this.itemClassificacaoResposta.emit(conta);
  }
}
