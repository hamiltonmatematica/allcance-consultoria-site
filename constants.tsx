
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
  { label: 'Anos de Experiência', value: '18+', icon: <Award className="w-5 h-5" /> },
  { label: 'Projetos Entregues', value: '500+', icon: <Briefcase className="w-5 h-5" /> },
  { label: 'Clientes Atendidos', value: '250+', icon: <Users className="w-5 h-5" /> },
  { label: 'Cidades Atuantes', value: '15+', icon: <Globe2 className="w-5 h-5" /> },
];

export const SERVICES: (Service & { icon: React.ReactNode })[] = [
  {
    id: 'plano-negocio',
    title: 'Plano de Negócio',
    icon: <Target className="w-8 h-8" />,
    description: 'Diagnóstico preciso e planejamento estratégico para o seu crescimento sustentável.',
    details: [
      'Análise SWOT de alta performance',
      'Engajamento de Stakeholders',
      'Árvore de Decisão e Gestão de Riscos',
      'Balanced Scorecard (BSC)'
    ]
  },
  {
    id: 'gestao-financeira',
    title: 'Gestão Financeira',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Controle total de resultados e inteligência financeira para decisões ágeis.',
    details: [
      'DRE e Fluxo de Caixa',
      'Análise de Capital de Giro',
      'Ponto de Equilíbrio Operacional',
      'Auditoria de Custos e Despesas'
    ]
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    icon: <Users2 className="w-8 h-8" />,
    description: 'Modelos de gestão modernos focados em performance e cultura organizacional.',
    details: [
      'Organogramas Horizontais',
      'Análise de Perfil Comportamental',
      'Treinamentos de Liderança',
      'Programas de Retenção de Talentos'
    ]
  },
  {
    id: 'gestao-produtos',
    title: 'Gestão de Produtos',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Otimização de mix, estoque e estratégias de precificação lucrativa.',
    details: [
      'Cálculo de Mark-up e Margem',
      'Gestão Eficiente de Estoque',
      'Padronização de Cadastros',
      'Curva ABC de Vendas'
    ]
  },
  {
    id: 'gestao-comercial',
    title: 'Gestão Comercial',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Expansão de mercado com foco em funil de vendas e fidelização.',
    details: [
      'Cultura Comercial Agressiva',
      'Treinamento de Força de Vendas',
      'Políticas de Remuneração Variável',
      'CRM e Jornada do Cliente'
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
