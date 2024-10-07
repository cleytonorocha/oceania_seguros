import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  hoveredIndex: number | null = null;

   benefits: any[] = [
      "Plano de Saúde",
      "Plano Odontológico",
      "Seguro de Vida",
      "VR Benefícios",
      "Assistência Emergencial"
  ];

  infos: any[] = [
    {
      icon: "fas fa-house-user fa-3x text-info mb-3",
      subIcon: "fas fa-clipboard-list fa-sm me-2",
      title: "Sobre a Consulta",
      description: "Faça aos outros o que gostaria que fizessem à você."
    },
    {
      icon: "fas fa-thermometer-half fa-3x text-info mb-3",
      subIcon: "fas fa-hand-holding-heart fa-sm me-2",
      title: "Cuidamos",
      description: "Cuidamos pessoalmente da implantação e divulgação do benefício, acompanhando cada detalhe com atenção e comprometimento."
    },
    {
      icon: "fas fa-sliders-h fa-3x text-info mb-3",
      subIcon: "fas fa-user-check fa-sm me-2",
      title: "Exclusivo Consulte",
      description: "Setor integrado com SAC, Pós-venda, Relacionamento e Sucesso do cliente para garantir a melhor experiência."
    },
    {
      icon: "fas fa-wrench fa-3x text-info mb-3",
      subIcon: "fas fa-expand-arrows-alt fa-sm me-2",
      title: "Flexibilidade",
      description: "Produtos customizados e atendimento diferenciado, adaptando-se às suas necessidades e preferências."
    },
    {
      icon: "fas fa-heart fa-3x text-info mb-3",
      subIcon: "fas fa-first-aid fa-sm me-2",
      title: "Cuidados Essenciais",
      description: "Priorizamos a sua saúde e bem-estar com coberturas que garantem assistência em diversas áreas."
    }
  ];
}
