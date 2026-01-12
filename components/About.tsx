
import React from 'react';
import { STATS } from '../constants';
import { Target, Compass, ShieldCheck, Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-allcance-green mb-4">{stat.icon}</div>
              <p className="text-4xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="/Imagem1.png"
                  className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                  alt="Business focus"
                />
                <div className="bg-allcance-lime p-8 rounded-3xl">
                  <h4 className="text-allcance-green font-black text-2xl leading-none">Visão <br />Arrojada</h4>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-allcance-green p-8 rounded-3xl text-white">
                  <p className="text-4xl font-black mb-2">20</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Anos de Mercado</p>
                </div>
                <img
                  src="/Imagem1.png"
                  className="rounded-3xl shadow-lg w-full aspect-[3/4] object-cover"
                  alt="Team work"
                />
              </div>
            </div>

            {/* Floating Seal */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full shadow-2xl p-4 flex items-center justify-center border border-gray-50 hidden md:flex">
              <div className="text-center">
                <p className="text-allcance-green font-black text-xl leading-none">NORTE</p>
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Mineiro</p>
                <p className="text-allcance-lime font-bold text-sm mt-1">Desde 2005</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-allcance-green text-xs font-black tracking-[0.4em] uppercase mb-4">Quem Somos</h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Desde 2005, a Allcance transforma potencial organizacional em impacto mensurável e performance sustentável. Nascida em Montes Claros, no Norte de Minas, e hoje atuando em nível Brasil, somos uma consultoria de gestão horizontal que estrutura decisões, papéis e fluxos para fortalecer inovação, competitividade e crescimento sustentável das organizações que assessoramos.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-allcance-green group-hover:bg-allcance-green group-hover:text-white transition-all">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Visão</h4>
                  <p className="text-gray-500 text-sm">Ser referência em gestão horizontal no Brasil, potencializando negócios, alinhando estratégias e ampliando diferenciais competitivos sustentáveis.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-allcance-green group-hover:bg-allcance-green group-hover:text-white transition-all">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Missão</h4>
                  <p className="text-gray-500 text-sm">Identificar necessidades e oportunidades de melhoria e estruturá-las em projetos estratégicos que se convertam em impacto mensurável, performance sustentável e satisfação consistente dos nossos clientes.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-allcance-green group-hover:bg-allcance-green group-hover:text-white transition-all">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Nossos Valores</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Ética</span> – decisões e relações pautadas por integridade.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Parceria</span> – construção conjunta e corresponsabilidade pelos resultados.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Humildade</span> – abertura permanente para ouvir, aprender e revisar caminhos.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Fé</span> – confiança no propósito, nas pessoas e na capacidade real de transformação.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Conhecimento</span> – profundidade técnica e aprendizado contínuo aplicado à gestão.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Busca</span> – inconformismo disciplinado na direção de melhores resultados.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-allcance-green mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-500"><span className="font-bold text-allcance-green">Verdade</span> – transparência em diagnósticos, análises e recomendações, mesmo quando desconfortáveis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="px-10 py-5 bg-allcance-green text-white font-bold rounded-2xl shadow-xl shadow-allcance-green/20 hover:scale-105 transition-all">
                Conheça nossa História
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
