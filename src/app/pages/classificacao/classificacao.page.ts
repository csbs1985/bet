import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {
  perfil = {
    nome: 'Neymar Jr.',
    foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
    ponto: 1111,
    posicao: 1
  };

  classificacao = [
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1,
      codigo: 12345678,
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 12345,
      posicao: 12345
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    }, {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    },
    {
      nome: 'Neymar Jr.',
      foto: 'https://imagens.brasil.elpais.com/resizer/G5CS8CMSXkzChVrUMj7An6Eq-oU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GOQ56ZN5CPVKYLLURD2LJ6ROT4.jpg',
      ponto: 1111,
      posicao: 1
    }
  ];

  habilitarOops = false;

  constructor() { }

  ngOnInit() { }

  tabsResposta(tab): void {
    console.log(tab);
  }

  itemClassificacaoResposta(conta): void{
    console.log(conta);
  }
}
