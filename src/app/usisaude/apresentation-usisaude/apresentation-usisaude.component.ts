import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-usisaude',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-usisaude.component.html',
  styleUrl: './apresentation-usisaude.component.scss'
})
export class ApresentationUnisaudeComponent {
  usisaudeData = planosSaude['usisaude'];
}
