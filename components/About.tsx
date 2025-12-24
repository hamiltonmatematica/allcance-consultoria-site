
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
                   src="https://images.unsplash.com/photo-1600880212319-4a024abc3596?q=80&w=2070&auto=format&fit=crop" 
                   className="rounded-3xl shadow-lg w-full aspect-square object-cover" 
                   alt="Business focus"
                 />
                 <div className="bg-allcance-lime p-8 rounded-3xl">
                    <h4 className="text-allcance-green font-black text-2xl leading-none">Visão <br/>Arrojada</h4>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="bg-allcance-green p-8 rounded-3xl text-white">
                    <p className="text-4xl font-black mb-2">18</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Anos de Mercado</p>
                 </div>
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                   className="rounded-3xl shadow-lg w-full aspect-[3/4] object-cover" 
                   alt="Team work"
                 />
               </div>
            </div>
            
            {/* Floating Seal */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full shadow-2xl p-4 flex items-center justify-center border border-gray-50 hidden md:flex">
               <div className="text-center">
                 <p className="text-allcance-green font-black text-xl leading-none">QUALIDADE</p>
                 <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Certificada</p>
                 <div className="flex justify-center gap-1 mt-2">
                   {[1,2,3,4,5].map(s => <span key={s} className="text-allcance-lime">★</span>)}
                 </div>
               </div>
            </div>
          </div>

          <div>
            <h2 className="text-allcance-green text-xs font-black tracking-[0.4em] uppercase mb-4">Nossa Essência</h2>
            <h3 className="text-5xl font-black text-gray-900 leading-tight mb-8">Evolução constante para negócios inteligentes.</h3>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A Allcance não entrega apenas relatórios; entregamos resultados palpáveis. Com sede em Montes Claros, atuamos em todo o estado de Minas Gerais transformando o DNA organizacional de nossos parceiros através de metodologias ágeis e visão técnica superior.
            </p>

            <div className="space-y-6">
               <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-allcance-green group-hover:bg-allcance-green group-hover:text-white transition-all">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Missão de Impacto</h4>
                    <p className="text-gray-500 text-sm">Identificar gaps e transformar necessidades em oportunidades reais de lucratividade.</p>
                  </div>
               </div>
               
               <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-allcance-green group-hover:bg-allcance-green group-hover:text-white transition-all">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Cultura de Valores</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {['Ética', 'Verdade', 'Fé', 'Humildade'].map(v => (
                        <span key={v} className="text-sm font-bold text-allcance-green flex items-center gap-1">
                           <Check className="w-3 h-3" /> {v}
                        </span>
                      ))}
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
