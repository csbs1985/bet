import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  @Input() tabs;
  @Output() tabsResposta = new EventEmitter;

  constructor() { }

  selecionarTab(tab): void {
    this.tabs.forEach(item => item.nome === tab ? item.ativo = true : item.ativo = false);
    this.tabsResposta.emit(tab);
  }
}
