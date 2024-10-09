import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SaibamaisNotredameComponent } from './saibamais-notredame/saibamais-notredame.component';
import { ApresentationNotredameComponent } from './apresentation-notredame/apresentation-notredame.component';

@Component({
  selector: 'app-notredame',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationNotredameComponent,
    SaibamaisNotredameComponent,
    FooterComponent
  ],
  templateUrl: './notredame.component.html',
  styleUrl: './notredame.component.scss'
})
export default class NotredameComponent {

}
