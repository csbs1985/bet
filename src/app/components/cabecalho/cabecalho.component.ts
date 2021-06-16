import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  @Input() titulo;
  @Input() voltar;
  @Input() busca;
  @Input() perfil;

  habilitarVoltar = false;
  habilitarBusca = false;
  habilitarPerfil = false;
  cabecalhoTitulo: string;

  logado: boolean = false;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.habilitarVoltar = this.voltar || false;
    this.habilitarBusca = this.busca || false;
    this.habilitarPerfil = this.perfil || false;
  }

  selecionarVoltar() {
    this.location.back();
  }

  selecionarPerfil(): void {
    if (this.logado) {
      this.router.navigate(['/conta']);
      return;
    }
    this.router.navigate(['/entrar']);
  }
}
