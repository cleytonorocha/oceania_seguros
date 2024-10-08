import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApresentacaoComponent } from '../home/apresentacao/apresentacao.component';
import { ApresentationYousaudeComponent } from './apresentation-yousaude/apresentation-yousaude.component';
import { SaibamaisYousaudeComponent } from './saibamais-yousaude/saibamais-yousaude.component';

@Component({
  selector: 'app-yousaude',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationYousaudeComponent,
    SaibamaisYousaudeComponent,
    FooterComponent
  ],
  templateUrl: './yousaude.component.html',
  styleUrl: './yousaude.component.scss'
})
export default class YousaudeComponent {

}
