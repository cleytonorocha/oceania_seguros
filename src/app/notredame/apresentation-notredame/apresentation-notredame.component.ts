import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-notredame',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-notredame.component.html',
  styleUrl: './apresentation-notredame.component.scss'
})
export class ApresentationNotredameComponent {
  notreDameData = planosSaude['notredame'];

}
