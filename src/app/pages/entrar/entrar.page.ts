import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() { }

  selecionarBotao(tipo): void {
    console.log(tipo);
    if (tipo === 'entrar') {
      // this.route.navigate(['/']);
      return;
    }
    this.route.navigate(['/cadastrar-politica']);
  }
}
