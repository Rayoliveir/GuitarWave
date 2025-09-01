// Guitar data and utility functions
export interface GuitarType {
  name: string;
  image: string;
  features: string[];
  description: string;
  priceRange?: string;
  difficulty?: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export interface CareItem {
  title: string;
  description: string;
  videoUrl: string;
  frequency: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

export const guitarTypes: GuitarType[] = [
  {
    name: "Acústica",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg",
    description: "Perfeita para iniciantes e músicos que valorizam a portabilidade",
    priceRange: "R$ 200 - R$ 2.000",
    difficulty: "Iniciante",
    features: [
      "Som natural e orgânico",
      "Não precisa de amplificação",
      "Ideal para iniciantes",
      "Versátil para vários estilos",
      "Portabilidade máxima"
    ]
  },
  {
    name: "Semi-Acústica",
    image: "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg",
    description: "O melhor dos dois mundos: acústico e elétrico",
    priceRange: "R$ 800 - R$ 5.000",
    difficulty: "Intermediário",
    features: [
      "Som híbrido único",
      "Captadores elétricos",
      "Ressonância natural",
      "Ideal para jazz e blues",
      "Versatilidade sonora"
    ]
  },
  {
    name: "Elétrica",
    image: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg",
    description: "Para quem busca potência e versatilidade sonora",
    priceRange: "R$ 400 - R$ 10.000+",
    difficulty: "Intermediário",
    features: [
      "Som amplificado potente",
      "Efeitos e distorções",
      "Rock, metal e blues",
      "Versatilidade de timbres",
      "Expressão máxima"
    ]
  }
];

export const careItems: CareItem[] = [
  {
    title: "Limpeza Regular",
    description: "Mantenha sua guitarra limpa para preservar o som e a aparência.",
    videoUrl: "https://www.youtube.com/watch?v=bGF1UP936TI",
    frequency: "Semanal",
    difficulty: "Fácil"
  },
  {
    title: "Troca de Cordas",
    description: "Troque as cordas regularmente para manter a qualidade sonora do instrumento.",
    videoUrl: "https://www.youtube.com/watch?v=bGF1UP936TI",
    frequency: "Mensal",
    difficulty: "Médio"
  },
  {
    title: "Manutenção Profissional",
    description: "Leve sua guitarra para revisão com um profissional periodicamente.",
    videoUrl: "https://www.youtube.com/watch?v=bGF1UP936TI",
    frequency: "Anual",
    difficulty: "Difícil"
  },
  {
    title: "Armazenamento",
    description: "Mantenha em local seco para preservar a aparência e a vida útil do instrumento.",
    videoUrl: "https://www.youtube.com/watch?v=bGF1UP936TI",
    frequency: "Diário",
    difficulty: "Fácil"
  }
];

export const timelineEvents = [
  {
    year: "3500 AC",
    title: "Primeiros instrumentos de Corda",
    description: "Instrumentos de cordas rudimentares surgem no Oriente Médio, marcando o início da música com cordas.",
    category: "ancient"
  },
  {
    year: "500 DC",
    title: "Alaúde Medieval",
    description: "O alaúde se torna popular na Europa, influenciando o desenvolvimento futuro da guitarra.",
    category: "medieval"
  },
  {
    year: "1200",
    title: "Guitarra Moura",
    description: "A guitarra moura chega à Espanha, trazendo novas técnicas e formas musicais.",
    category: "medieval"
  },
  {
    year: "1500",
    title: "Vihuela Renascentista",
    description: "A vihuela se desenvolve na Espanha, precursora direta da guitarra clássica.",
    category: "renaissance"
  },
  {
    year: "1800",
    title: "Guitarra Clássica",
    description: "Antonio Torres revoluciona o design da guitarra, criando o padrão moderno da guitarra clássica.",
    category: "classical"
  },
  {
    year: "1931",
    title: "Primeira Guitarra Elétrica",
    description: "George Beauchamp e Adolph Rickenbacker criam a primeira guitarra elétrica comercial.",
    category: "electric"
  },
  {
    year: "1950",
    title: "Fender Telecaster",
    description: "Leo Fender lança a Telecaster, revolucionando a música popular e o rock'n'roll.",
    category: "electric"
  },
  {
    year: "1954",
    title: "Fender Stratocaster",
    description: "A icônica Stratocaster é lançada, tornando-se uma das guitarras mais influentes da história.",
    category: "electric"
  },
  {
    year: "1958",
    title: "Gibson Flying V",
    description: "Gibson apresenta designs futuristas que influenciarão o rock pesado e metal.",
    category: "electric"
  },
  {
    year: "1970s",
    title: "Era do Rock Progressivo",
    description: "Guitarras se tornam centrais no desenvolvimento do rock progressivo e experimental.",
    category: "modern"
  },
  {
    year: "1980s",
    title: "Revolução Digital",
    description: "Surgem as primeiras guitarras com tecnologia digital e sintetizadores integrados.",
    category: "modern"
  },
  {
    year: "2000s",
    title: "Era Moderna",
    description: "Guitarras modernas incorporam tecnologia avançada, pickups ativos e designs inovadores.",
    category: "modern"
  }
];

export const galleryItems = [
  {
    name: "Super Stratocaster",
    image: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg"
  },
  {
    name: "Fender JazzMaster",
    image: "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg"
  },
  {
    name: "Telecaster",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg"
  },
  {
    name: "Gibson Les Paul Standard",
    image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg"
  }
];

// Utility function to format guitar names
export const formatGuitarName = (name: string): string => {
  return name.replace(/([A-Z])/g, ' $1').trim();
};

// Function to get guitar recommendation based on user level
export const getGuitarRecommendation = (level: string): GuitarType | null => {
  const levelMap: { [key: string]: 'Iniciante' | 'Intermediário' | 'Avançado' } = {
    'beginner': 'Iniciante',
    'intermediate': 'Intermediário',
    'advanced': 'Avançado'
  };

  const targetDifficulty = levelMap[level.toLowerCase()];
  return guitarTypes.find(guitar => guitar.difficulty === targetDifficulty) || null;
};