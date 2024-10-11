import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promocao-home',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './promocao-home.component.html',
  styleUrl: './promocao-home.component.scss'
})
export class PromocaoHomeComponent {

  hoveredIndex: number | null = null;
  logos = [
    {
      src: 'assets/logos/amil.jpg',
      alt: 'logo da amil',
      name: '/amil'
    },
    {
      src: 'assets/logos/hapvida.jpg',
      alt: 'logo da hapvida',
      name: '/hapvida'
    },
    {
      src: 'assets/logos/medsenior.jpg',
      alt: 'logo da medsenior',
      name: '/medsenior'
    },
    {
      src: 'assets/logos/notredame.jpg',
      alt: 'logo da notredame',
      name: '/notredame'
    },
    {
      src: 'assets/logos/sulamerica.jpg',
      alt: 'logo da sulamerica',
      name: '/sulamerica'
    },
    {
      src: 'assets/logos/unimed.jpg',
      alt: 'logo da unimed',
      name: '/unimed'
    },
    {
      src: 'assets/logos/usisaude.jpg',
      alt: 'logo da usisaude',
      name: '/usisaude'
    },
    {
      src: 'assets/logos/yousaude.jpg',
      alt: 'logo da yousaude',
      name: '/yousaude'
    }
  ];


}
