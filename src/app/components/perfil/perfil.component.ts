import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  /*eslint max-len: ["error", { "ignoreUrls": true }]*/
  foto = 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg';

  constructor() { }

  ngOnInit() { }

}
