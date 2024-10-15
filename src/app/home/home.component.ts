import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PlansComponent } from './plans/plans.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentacaoComponent,
    PlansComponent,
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
