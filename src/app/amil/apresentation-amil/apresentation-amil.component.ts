import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-amil',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-amil.component.html',
  styleUrl: './apresentation-amil.component.scss'
})
export class ApresentationAmilComponent {
  amilData = planosSaude['amil'];

}
