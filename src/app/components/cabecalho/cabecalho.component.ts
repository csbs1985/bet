import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  @Input() titulo;
  @Input() voltar;
  @Input() busca;

  habilitarVoltar = true;
  habilitarBusca = true;
  cabecalhoTitulo: string;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.habilitarVoltar = this.voltar || false;
    this.habilitarBusca = this.busca || false;
  }

  backClicked() {
    this._location.back();
  }
}
