import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';
import { CardsComponent } from './home/cards/cards.component';
import { PlansComponent } from './home/plans/plans.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ApresentacaoComponent, PlansComponent, CardsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oceania_seguros';
}
