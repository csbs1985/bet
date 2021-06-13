import { Component, OnInit } from '@angular/core';
import { TipoClassificacao } from 'src/app/models/tipo-classificacao';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {
  tabs = [
    {
      nome: TipoClassificacao.GERAL,
      ativo: true,
    },
    {
      nome: TipoClassificacao.MENSAL,
      ativo: false,
    },
    {
      nome: TipoClassificacao.DIARIO,
      ativo: false,
    }
  ];

  habilitarOops = false;

  constructor() { }

  ngOnInit() { }

  tabsResposta(tab): void {
    console.log(tab);
  }
}
