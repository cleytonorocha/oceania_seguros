import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-med-senior',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-med-senior.component.html',
  styleUrl: './apresentation-med-senior.component.scss'
})
export class ApresentationMedSeniorComponent {
  medseniorData = planosSaude['medsenior'];
}
