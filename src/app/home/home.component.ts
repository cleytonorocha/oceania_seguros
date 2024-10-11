import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PlansComponent } from './plans/plans.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from '../footer/footer.component';
import { PromocaoHomeComponent } from './promocao-home/promocao-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentacaoComponent,
    PromocaoHomeComponent,
    PlansComponent,
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
