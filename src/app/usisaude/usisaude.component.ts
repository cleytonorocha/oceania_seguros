import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentationUnisaudeComponent } from './apresentation-usisaude/apresentation-usisaude.component';
import { SaibamaisUsisaudeComponent } from './saibamais-usisaude/saibamais-usisaude.component';

@Component({
  selector: 'app-usisaude',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationUnisaudeComponent,
    SaibamaisUsisaudeComponent,
    FooterComponent
  ],
  templateUrl: './usisaude.component.html',
  styleUrl: './usisaude.component.scss'
})
export default class UsisaudeComponent {
}
