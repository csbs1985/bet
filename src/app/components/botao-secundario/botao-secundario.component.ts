import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-secundario',
  templateUrl: './botao-secundario.component.html',
  styleUrls: ['./botao-secundario.component.scss'],
})
export class BotaoSecundarioComponent implements OnInit {
  @Input() texto;

  constructor() { }

  ngOnInit() {}

}
