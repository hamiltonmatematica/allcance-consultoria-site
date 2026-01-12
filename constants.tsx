
import React from 'react';
import { Service, Client } from './types';
import {
  Target,
  BarChart3,
  Users2,
  ShoppingCart,
  TrendingUp,
  Lightbulb,
  Award,
  Briefcase,
  Globe2,
  Users
} from 'lucide-react';

export const COLORS = {
  primary: '#006652', // Deep Green/Teal (Brand Identity)
  secondary: '#C4D600', // Professional Lime (Brand Identity)
  dark: '#1A1A1A',
  gray: '#63666A',
  white: '#FFFFFF',
};

export const STATS = [
  { label: 'Anos de Experiência', value: '20+', icon: <Award className="w-5 h-5" /> },
  { label: 'Projetos Entregues', value: '500+', icon: <Briefcase className="w-5 h-5" /> },
  { label: 'Clientes Atendidos', value: '250+', icon: <Users className="w-5 h-5" /> },
  { label: 'Cidades Atuantes', value: '15+', icon: <Globe2 className="w-5 h-5" /> },
];

export const SERVICES: (Service & { icon: React.ReactNode })[] = [
  {
    id: 'gestao-estrategica',
    title: 'Gestão Estratégica',
    icon: <Target className="w-8 h-8" />,
    description: 'Plano de Negócio com foco em impacto mensurável, diagnóstico estratégico preciso, ações disciplinadas e liderança com envolvimento real da equipe.',
    details: [
      'Análise SWOT e Stakeholders',
      'Árvore de Decisão e Gestão de Riscos',
      'Balanced Scorecard (BSC)',
      'Análise de Maturidade Organizacional'
    ]
  },
  {
    id: 'gestao-financeira',
    title: 'Gestão Financeira',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Ações financeiras estruturadas que qualificam a tomada de decisão e asseguram controle rigoroso por meio do monitoramento sistemático das movimentações.',
    details: [
      'DRE e Fluxo de Caixa Integrados',
      'Análise Horizontal e Vertical',
      'Ponto de Equilíbrio Operacional',
      'Capital de Giro e Investimentos'
    ]
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    icon: <Users2 className="w-8 h-8" />,
    description: 'RH em gestão horizontal, com organograma em rede que distribui papéis, democratiza conhecimento e torna explícita a governança de pessoas em todos os níveis.',
    details: [
      'Arquitetura de Papéis e Responsabilidades',
      'Governança de Pessoas e Decisões de RH',
      'Performance e Entregas como Eixo Central',
      'Sustentabilidade Humana e Continuidade'
    ]
  },
  {
    id: 'gestao-compras',
    title: 'Gestão de Compras',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Gestão de compras orientada a resultado econômico, com entendimento estruturado das operações de aquisição, cadastro, estoque e impacto no CMV para garantir margem e giro saudável.',
    details: [
      'Gestão de Mix de Produtos',
      'Cadastro Padronizado de Produtos',
      'Cálculo de Mark-up e Margem',
      'Planejamento de Inventário',
      'Tributações Estadual e Federal'
    ]
  },
  {
    id: 'gestao-comercial',
    title: 'Gestão Comercial',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Gestão comercial orientada à geração de receita sustentável, com projetos estruturados em planejamento, estratégia e avaliações contínuas.',
    details: [
      'Treinamento em Papéis Comerciais',
      'Políticas de Remuneração Variável',
      'Comportamento Empreendedor',
      'Fidelização de Clientes'
    ]
  },
  {
    id: 'inovacao',
    title: 'Inovação & Estratégia',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Consultoria estratégica em inovação orientada a transformar desafios em vantagem competitiva concreta, conectando decisões de alto nível a inovação aplicada e novos modelos de receita.',
    details: [
      'Transformação Digital',
      'Design Thinking Aplicado',
      'Novos Modelos de Receita',
      'Benchmarking de Mercado'
    ]
  }
];

export const CLIENTS: Client[] = [
  { name: 'Rede Construir', location: 'Nacional' },
  { name: 'Drogaria São Pedro', location: 'Brasília de Minas' },
  { name: 'Liberi Assistência 24h', location: 'Belo Horizonte' },
  { name: 'Supermercado Supermaar', location: 'Januária' },
  { name: 'CD Rede Construir', location: 'Montes Claros' },
  { name: 'Ansa Sonhos', location: 'Montes Claros' },
  { name: 'Vanorte', location: 'Montes Claros' },
  { name: 'Infinity', location: 'Belo Horizonte' },
  { name: 'Drogaria 24 Horas', location: 'Janaúba' },
  { name: 'Prime Burger', location: 'Montes Claros' },
  { name: 'Laticínio Saboroso', location: 'São Francisco' },
  { name: 'Pneu Máximo', location: 'Montes Claros' },
  { name: 'Betinas', location: 'Várzea da Palma' },
  { name: 'Lojas Ramos', location: 'Taiobeiras' }
];

export const CONTACT_INFO = {
  address: 'R. Crisântemo, 615 - Sagrada Família',
  city: 'Montes Claros - MG',
  zip: '39401-016',
  phones: [
    '(38) 3214-2009',
    '(38) 9 9823-2153',
    '(38) 9 9260-0011'
  ]
};
