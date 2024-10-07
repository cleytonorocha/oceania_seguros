import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { CardsComponent } from './cards/cards.component';
import { PlansComponent } from './plans/plans.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ApresentacaoComponent, PlansComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oceania_seguros';
}
