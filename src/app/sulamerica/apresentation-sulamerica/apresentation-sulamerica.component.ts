import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-sulamerica',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-sulamerica.component.html',
  styleUrl: './apresentation-sulamerica.component.scss'
})
export class ApresentationSulamericaComponent {
  sulamericaData = planosSaude['sulamerica'];
}
