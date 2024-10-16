import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { planosSaude } from '../env/envName';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  planos: any[] = Object.values(planosSaude);

}
