import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  hoveredIndex: number | null = null;

  planOptions: PlanOption[] = [
    {
      icon: 'fas fa-user-shield text-success fa-2x me-3',
      title: 'Plano Saúde Individual',
      description: 'Ideal para quem quer cobertura individual com ampla rede de hospitais e clínicas.'
    },
    {
      icon: 'fas fa-users text-success fa-2x me-3',
      title: 'Plano Saúde Familiar',
      description: 'Cobre toda a sua família, oferecendo segurança e tranquilidade para quem você ama.'
    },
    {
      icon: 'fas fa-briefcase-medical text-success fa-2x me-3',
      title: 'Plano Empresarial',
      description: 'Opção flexível para empresas de todos os tamanhos. Benefícios para seus funcionários.'
    },
    {
      icon: 'fas fa-heartbeat text-success fa-2x me-3',
      title: 'Plano Completo',
      description: 'Cobertura total com diversos benefícios em saúde, odontologia, e bem-estar.'
    }
  ];

  benefictOptions: PlanOption[] = [
    {
      icon: 'fas fa-stethoscope text-success fa-2x me-3',
      title: 'Atendimento Médico de Qualidade',
      description: 'Consultas com especialistas em diversas áreas para garantir seu cuidado.'
    },
    {
      icon: 'fas fa-tooth text-success fa-2x me-3',
      title: 'Plano Odontológico',
      description: 'Cobertura completa para tratamentos dentários preventivos e de emergência.'
    },
    {
      icon: 'fas fa-heart text-success fa-2x me-3',
      title: 'Suporte Emergencial 24h',
      description: 'Serviço de emergência disponível 24 horas por dia para situações críticas.'
    },
    {
      icon: 'fas fa-ambulance text-success fa-2x me-3',
      title: 'Ambulâncias Rápidas',
      description: 'Cobertura para transporte de emergência rápido e eficiente para hospitais.'
    }
  ];

  imageList: ImageItem[] = [
    {
      title: "Usi Saúde",
      imagePath: "assets/logos/usisaude.jpg",
      alt: "Logo da Usisaúde",
      link: '/usisaude'
    },
    {
      title: "You Saúde",
      imagePath: "assets/logos/yousaude.jpg",
      alt: "Logo da You Saúde",
      link: '/yousaude'
    },
    {
      title: "Notre Dame",
      imagePath: "assets/logos/notredame.jpg",
      alt: "Logo da NotreDame",
      link: '/notredame'
    },
    {
      title: "Hapvida",
      imagePath: "assets/logos/hapvida.jpg",
      alt: "Logo da Hapvida",
      link: '/hapvida'
    },
    {
      title: "Med Senior",
      imagePath: "assets/logos/medsenior.jpg",
      alt: "Logo da MedSenior",
      link: '/medsenior'
    },
    {
      title: "Amil",
      imagePath: "assets/logos/amil.jpg",
      alt: "Logo da Amil",
      link: '/amil'
    },
    {
      title: "Sul América",
      imagePath: "assets/logos/sulamerica.jpg",
      alt: "Logo da SulAmérica",
      link: '/sulamerica'
    },
    {
      title: "Unimed",
      imagePath: "assets/logos/unimed.jpg",
      alt: "Logo da Unimed Belo Horizonte",
      link: '/unimed'
    }
  ];

}
interface ImageItem {
  title: string;
  link: string;
  imagePath: string;
  alt: string;
}

interface PlanOption {
  icon: string;
  title: string;
  description: string;
}