import { Component } from '@angular/core';
import { planosSaude } from '../../env/envName';

@Component({
  selector: 'app-apresentation-unimed',
  standalone: true,
  imports: [],
  templateUrl: './apresentation-unimed.component.html',
  styleUrl: './apresentation-unimed.component.scss'
})
export class ApresentationUnimedComponent {
  unimedData = planosSaude['unimed'];

}
