import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentationHapvidaComponent } from './apresentation-hapvida/apresentation-hapvida.component';
import { SaibamaiHapvidaComponent } from './saibamai-hapvida/saibamai-hapvida.component';

@Component({
  selector: 'app-hapvida',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationHapvidaComponent,
    SaibamaiHapvidaComponent,
    FooterComponent
  ],
  templateUrl: './hapvida.component.html',
  styleUrl: './hapvida.component.scss'
})
export default class HapvidaComponent {

}
