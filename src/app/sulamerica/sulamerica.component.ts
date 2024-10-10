import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApresentationSulamericaComponent } from './apresentation-sulamerica/apresentation-sulamerica.component';
import { SaibamaisSulamericaComponent } from './saibamais-sulamerica/saibamais-sulamerica.component';

@Component({
  selector: 'app-sulamerica',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationSulamericaComponent,
    SaibamaisSulamericaComponent,
    FooterComponent
  ],
  templateUrl: './sulamerica.component.html',
  styleUrl: './sulamerica.component.scss'
})
export default class SulamericaComponent {

}
