import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApresentationUnimedComponent } from './apresentation-unimed/apresentation-unimed.component';
import { SaibamaisUnimedComponent } from './saibamais-unimed/saibamais-unimed.component';

@Component({
  selector: 'app-unimed',
  standalone: true,
  imports: [
    NavbarComponent,
    ApresentationUnimedComponent,
    SaibamaisUnimedComponent,
    FooterComponent
  ],
  templateUrl: './unimed.component.html',
  styleUrl: './unimed.component.scss'
})
export default class UnimedComponent {

}
