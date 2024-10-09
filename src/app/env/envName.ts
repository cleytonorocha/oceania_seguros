export const planosSaude: { [key: string]: PlanosSaude } = {
  usisaude: {
    name: "Usisaúde",
    logo: "assets/logos/usisaude.jpg",
    logoAlt: "Logo Usisaúde",
    description: "Plano de saúde com ampla cobertura nacional e atendimento de qualidade.",
    images: [
      "assets/images/usisaude-plan-1.jpg",
      "assets/images/usisaude-plan-2.jpg"
    ],
    tinyName: "usisaude"
  },
  yousaude: {
    name: "You Saúde",
    logo: "assets/logos/yousaude.jpg",
    logoAlt: "Logo You Saúde",
    description: "Contratar um plano de saúde nunca foi tão fácil",
    images: [
      "assets/images/yousaude-plan-1.jpg",
      "assets/images/yousaude-plan-2.jpg"
    ],
    tinyName: "yousaude"
  },
  notredame: {
    name: "NotreDame",
    logo: "assets/logos/notredame.jpg",
    logoAlt: "Logo NotreDame",
    description: "Seu bem-estar em primeiro lugar. Invista na sua saúde e no bem-estar da sua família com o plano de saúde Notrelife",
    images: [
      "assets/images/notredame-plan-1.jpg",
      "assets/images/notredame-plan-2.jpg"
    ],
    tinyName: "notredame"
  },
  hapvida: {
    name: "Hapvida",
    logo: "assets/logos/hapvida.jpg",
    logoAlt: "Logo Hapvida",
    description: "Rede especializada em saúde com atendimento eficiente e moderno",
    images: [
      "assets/images/hapvida-plan-1.jpg",
      "assets/images/hapvida-plan-2.jpg"
    ],
    tinyName: "hapvida"
  },
  medsenior: {
    name: "MedSenior",
    logo: "assets/logos/medsenior.jpg",
    logoAlt: "Logo MedSenior",
    description: "Focado no público idoso, oferecendo assistência médica dedicada",
    images: [
      "assets/images/medsenior-plan-1.jpg",
      "assets/images/medsenior-plan-2.jpg"
    ],
    tinyName: "medsenior"
  },
  goldencross: {
    name: "Golden Cross",
    logo: "assets/logos/goldencross.jpg",
    logoAlt: "Logo Golden Cross",
    description: "Plano com benefícios exclusivos e atendimento premium",
    images: [
      "assets/images/goldencross-plan-1.jpg",
      "assets/images/goldencross-plan-2.jpg"
    ],
    tinyName: "goldencross"
  },
  amil: {
    name: "Amil",
    logo: "assets/logos/amil.jpg",
    logoAlt: "Logo Amil",
    description: "Oferecemos planos médicos e odontológicos com todo o cuidado que você, sua família ou sua empresa precisam",
    images: [
      "assets/images/amil-plan-1.jpg",
      "assets/images/amil-plan-2.jpg"
    ],
    tinyName: "amil"
  },
  sulamerica: {
    name: "SulAmérica",
    logo: "assets/logos/sulamerica.jpg",
    logoAlt: "Logo SulAmérica",
    description: "Oferece uma rede credenciada de alta qualidade e serviços exclusivos.",
    images: [
      "assets/images/sulamerica-plan-1.jpg",
      "assets/images/sulamerica-plan-2.jpg"
    ],
    tinyName: "sulamerica"
  },
  unimed: {
    name: "Unimed",
    logo: "assets/logos/unimed.jpg",
    logoAlt: "Logo Unimed",
    description: "Maior rede de planos de saúde do Brasil, com ampla cobertura e serviços de excelência.",
    images: [
      "assets/images/unimed-plan-1.jpg",
      "assets/images/unimed-plan-2.jpg"
    ],
    tinyName: "unimed"
  }
};

interface PlanosSaude {
  name: string;
  tinyName: string;
  logo: string;
  logoAlt: string;
  description: string;
  images?: string[];
}
