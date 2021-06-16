import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-principal',
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.scss'],
})
export class BotaoPrincipalComponent implements OnInit {
  @Input() texto;

  constructor() { }

  ngOnInit() { }

}
