import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentationMedSeniorComponent } from './apresentation-med-senior/apresentation-med-senior.component';
import { SaibamaisMedseniorComponent } from './saibamais-medsenior/saibamais-medsenior.component';

@Component({
  selector: 'app-medsenior',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationMedSeniorComponent,
    SaibamaisMedseniorComponent,
    FooterComponent
  ],
  templateUrl: './medsenior.component.html',
  styleUrl: './medsenior.component.scss'
})
export default class MedseniorComponent {

}
