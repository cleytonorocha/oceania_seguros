import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentationAmilComponent } from './apresentation-amil/apresentation-amil.component';
import { SaibamaisAmilComponent } from './saibamais-amil/saibamais-amil.component';

@Component({
  selector: 'app-amil',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationAmilComponent,
    SaibamaisAmilComponent,
    FooterComponent
  ],
  templateUrl: './amil.component.html',
  styleUrl: './amil.component.scss'
})
export default class AmilComponent {

}
