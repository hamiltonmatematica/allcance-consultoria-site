
import React from 'react';
import { Service, Client, ServiceDetail } from './types';
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
        ],
        expandedDetails: [
            {
                title: 'Análise SWOT e Stakeholders',
                subItems: [
                    'Leitura de forças, fragilidades, oportunidades e ameaças',
                    'Mapeamento de atores-chave e interesses (stakeholders)'
                ]
            },
            {
                title: 'Árvore de Decisão e Gestão de Riscos',
                subItems: [
                    'Estruturação das decisões críticas',
                    'Identificação, avaliação e tratamento de riscos'
                ]
            },
            {
                title: 'Balanced Scorecard (BSC)',
                subItems: [
                    'Tradução da estratégia em objetivos e indicadores',
                    'Conexão entre financeiro, clientes, processos e pessoas'
                ]
            },
            {
                title: 'Análise de Maturidade Organizacional',
                subItems: [
                    'Avaliação do nível de maturidade em gestão',
                    'Identificação de gaps e prioridades para evolução'
                ]
            }
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
        ],
        expandedDetails: [
            {
                title: 'DRE e Fluxo de Caixa integrados',
                description: 'Estruturamos DRE e Fluxo de Caixa de forma integrada para oferecer uma leitura clara de resultado, geração de caixa e sustentabilidade econômica do negócio.'
            },
            {
                title: 'Análise Horizontal e Vertical',
                description: 'Aplicamos análises horizontal e vertical para comparar evolução, composição e eficiência das contas, evidenciando distorções, tendências e pontos críticos de gestão financeira.'
            },
            {
                title: 'Ponto de Equilíbrio Operacional',
                description: 'Calculamos o ponto de equilíbrio operacional para definir o nível mínimo de faturamento que sustenta a operação, orientando decisões de preço, volume e estrutura de custos.'
            },
            {
                title: 'Gestão de Capital de Giro e Investimentos',
                description: 'Avaliamos e estruturamos capital de giro e investimentos para garantir liquidez, segurança nas operações e capacidade real de financiar o crescimento.'
            }
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
        ],
        expandedDetails: [
            {
                title: 'Arquitetura de Papéis e Responsabilidades',
                description: 'Definição clara de papéis (e não apenas cargos), fronteiras de atuação, entregas esperadas e alçadas de decisão para cada função.'
            },
            {
                title: 'Governança de Pessoas e Decisões de RH',
                description: 'Regras explícitas para decisões de admissão, desenvolvimento, movimentação interna, reconhecimento e desligamento, com critérios objetivos e transparência.'
            },
            {
                title: 'Performance e Entregas como Eixo Central',
                description: 'Sistema de avaliação baseado em entregas, impacto e aderência ao papel, substituindo subjetividade por parâmetros claros de desempenho.'
            },
            {
                title: 'Cultura como Sistema, não como Slogan',
                description: 'Tratamento da cultura como resultado de decisões, rituais e incentivos — alinhando o que se cobra, o que se reconhece e o que se tolera no dia a dia.'
            },
            {
                title: 'Sustentabilidade Humana e Continuidade do Negócio',
                description: 'Equilíbrio entre resultado e capacidade humana, evitando dependência de indivíduos-chave e garantindo que conhecimento, processos e decisões sejam compartilhados e replicáveis.'
            }
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
        ],
        expandedDetails: [
            {
                title: 'Gestão de Mix de Produtos',
                description: 'Definição e revisão do mix com base em margem, giro, posição competitiva e estratégia de portfólio, evitando estoques mortos e produtos que corroem resultado.'
            },
            {
                title: 'Cadastro Padronizado de Produtos',
                description: 'Estruturação e padronização do cadastro de produtos para assegurar consistência de informações, correta formação de preço, leitura confiável de margem e integração entre compras, fiscal e financeiro.'
            },
            {
                title: 'Cálculo de Mark-up e Margem',
                description: 'Estruturação de mark-up e margens por produto/linha, conectando formação de preço, custos de compra, tributos e posicionamento competitivo.'
            },
            {
                title: 'Planejamento de Inventário',
                description: 'Planejamento de níveis de estoque alinhados à demanda, capacidade de caixa e lead time de reposição, reduzindo rupturas e excesso de capital parado.'
            },
            {
                title: 'Tributações Estadual e Federal',
                description: 'Leitura das tributações estadual e federal aplicáveis ao portfólio para proteger margem, evitar distorções de preço e reduzir riscos fiscais.'
            }
        ]
    },
    {
        id: 'gestao-comercial',
        title: 'Gestão Comercial',
        icon: <TrendingUp className="w-8 h-8" />,
        description: 'Gestão comercial orientada à geração de receita sustentável, com projetos estruturados em planejamento, estratégia e avaliações contínuas alinhadas aos objetivos da organização.',
        details: [
            'Treinamento em Papéis Comerciais',
            'Políticas de Remuneração Variável',
            'Comportamento Empreendedor',
            'Fidelização de Clientes'
        ],
        expandedDetails: [
            {
                title: 'Treinamento em Papéis Comerciais',
                description: 'Desenvolvimento das pessoas em funções comerciais, com foco em processo, funil, abordagem consultiva e responsabilidade por resultado.'
            },
            {
                title: 'Políticas de Remuneração Variável',
                description: 'Desenho de modelos de remuneração variável conectados a indicadores de performance, margem e metas estratégicas.'
            },
            {
                title: 'Comportamento Empreendedor',
                description: 'Fortalecimento da postura de dono, protagonismo nas decisões comerciais e responsabilidade direta pelos resultados.'
            },
            {
                title: 'Fidelização de Clientes',
                description: 'Estruturação de ações e rotinas de relacionamento para aumento de recorrência, fortalecimento de vínculo e retenção de clientes.'
            }
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
        ],
        expandedDetails: [
            {
                title: 'Transformação Digital',
                description: 'Estruturação de iniciativas digitais alinhadas à estratégia, processos e modelo de negócio, com foco em ganho real de eficiência e competitividade.'
            },
            {
                title: 'Design Thinking aplicado',
                description: 'Aplicação disciplinada de Design Thinking para desenhar soluções centradas no usuário, testáveis e viáveis do ponto de vista técnico e econômico.'
            },
            {
                title: 'Novos Modelos de Receita',
                description: 'Desenho e validação de modelos de monetização e recorrência conectados à estratégia, à estrutura de custos e à capacidade operacional da organização.'
            },
            {
                title: 'Benchmarking de Mercado',
                description: 'Análise comparativa estruturada com referências do setor para identificar gaps competitivos, boas práticas e oportunidades claras de diferenciação.'
            }
        ]
    }
];

export const CLIENTS: Client[] = [
    { name: 'Rede Construir', location: 'Nacional' },
    { name: 'Drogaria São Pedro', location: ' Brasília de Minas' },
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
