import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-unisaude',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-unisaude.component.html',
  styleUrl: './apresentation-unisaude.component.scss'
})
export class ApresentationUnisaudeComponent {
  usisaudeData = planosSaude['usisaude'];
}
