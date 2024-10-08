import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-saibamais-usisaude',
  standalone: true,
  imports: [],
  templateUrl: './saibamais-usisaude.component.html',
  styleUrl: './saibamais-usisaude.component.scss'
})
export class SaibamaisUsisaudeComponent {
  usisaudeData = planosSaude['usisaude'];
}
