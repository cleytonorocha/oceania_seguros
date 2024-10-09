import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-saibamais-amil',
  standalone: true,
  imports: [NgClass],
  templateUrl: './saibamais-amil.component.html',
  styleUrl: './saibamais-amil.component.scss'
})
export class SaibamaisAmilComponent {
  hoveredIndex: number | null = null;
}
