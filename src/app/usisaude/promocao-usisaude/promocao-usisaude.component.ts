import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao-usisaude',
  standalone: true,
  imports: [],
  templateUrl: './promocao-usisaude.component.html',
  styleUrl: './promocao-usisaude.component.scss'
})
export class PromocaoUsisaudeComponent implements OnInit {

    horasRestantes: number = 3;
    minutosRestantes: number = 59;
    segundosRestantes: number = 12;
    interval: any;

  ngOnInit(): void {
    this.iniciarTemporizador();
  }

    iniciarTemporizador(): void {
      this.interval = setInterval(() => {
        if (this.segundosRestantes > 0) {
          this.segundosRestantes--;
        } else {
          this.segundosRestantes = 59;
          if (this.minutosRestantes > 0) {
            this.minutosRestantes--;
          } else {
            this.minutosRestantes = 59;
            if (this.horasRestantes > 0) {
              this.horasRestantes--;
            } else {
              clearInterval(this.interval);
            }
          }
        }
      }, 1000);
    }

    consultarWhatsApp(): void {
      window.open('https://api.whatsapp.com/send?phone=+5511999999999', '_blank');
    }

    garantirPromocao(): void {
      // Lógica para acionar a promoção, por exemplo, redirecionamento ou ação no backend
      alert('Promoção garantida!');
    }
}