import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentationUnisaudeComponent } from './apresentation-unisaude/apresentation-unisaude.component';
import { SaibamaisUsisaudeComponent } from './saibamais-usisaude/saibamais-usisaude.component';

@Component({
  selector: 'app-unisaude',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationUnisaudeComponent,
    SaibamaisUsisaudeComponent,
    FooterComponent
  ],
  templateUrl: './unisaude.component.html',
  styleUrl: './unisaude.component.scss'
})
export default class UnisaudeComponent {
}
