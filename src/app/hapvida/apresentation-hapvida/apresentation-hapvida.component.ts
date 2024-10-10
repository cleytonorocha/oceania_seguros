import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-hapvida',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-hapvida.component.html',
  styleUrl: './apresentation-hapvida.component.scss'
})
export class ApresentationHapvidaComponent {
  hapividaData = planosSaude['hapvida'];

}
