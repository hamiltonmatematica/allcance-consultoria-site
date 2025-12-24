
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
    id: 'plano-negocio',
    title: 'Plano de Negócio',
    icon: <Target className="w-8 h-8" />,
    description: 'Foco nos resultados, diagnóstico preciso, planejamento de ações e liderança com envolvimento da equipe.',
    details: [
      'Análise SWOT e Stakeholder',
      'Árvore de Decisão e Gestão de Riscos',
      'Balanced Scorecard (BSC)',
      'Análise de Maturidade Organizacional'
    ]
  },
  {
    id: 'gestao-financeira',
    title: 'Gestão Financeira',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Ações que facilitem tomadas de decisões, garantindo controle mediante acompanhamento das movimentações.',
    details: [
      'DRE e Fluxo de Caixa',
      'Análise Horizontal e Vertical',
      'Ponto de Equilíbrio Operacional',
      'Capital de Giro e Investimentos'
    ]
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    icon: <Users2 className="w-8 h-8" />,
    description: 'Organograma horizontal para democratização do conhecimento e tomada de decisões.',
    details: [
      'Organogramas Horizontais',
      'Análise de Perfil do Colaborador',
      'Processos Seletivos e Treinamentos',
      'Avaliações Individuais e por Equipes'
    ]
  },
  {
    id: 'gestao-produtos',
    title: 'Gestão de Produtos',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Entendimento sobre operações com mercadorias: compras, vendas, estoque e CMV.',
    details: [
      'Gestão de Mix de Produtos',
      'Cálculo de Mark-up e Margem',
      'Planejamento de Inventário',
      'Tributações Estadual e Federal'
    ]
  },
  {
    id: 'gestao-comercial',
    title: 'Gestão Comercial',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Projetos comerciais através de planejamento, estratégia e avaliações com foco nos objetivos.',
    details: [
      'Treinamento de Equipe de Vendas',
      'Políticas de Remuneração Variável',
      'Comportamento Empreendedor',
      'Fidelização de Clientes'
    ]
  },
  {
    id: 'inovacao',
    title: 'Inovação & Estratégia',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Consultoria arrojada para transformar desafios em vantagens competitivas.',
    details: [
      'Transformação Digital',
      'Design Thinking aplicado',
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
