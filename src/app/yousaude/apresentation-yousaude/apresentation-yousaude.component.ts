import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-yousaude',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-yousaude.component.html',
  styleUrl: './apresentation-yousaude.component.scss'
})
export class ApresentationYousaudeComponent {
  yousaudeData = planosSaude['yousaude'];

}
