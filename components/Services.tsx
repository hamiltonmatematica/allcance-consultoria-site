
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-allcance-lime/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-allcance-green/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-allcance-green text-xs font-black tracking-[0.4em] uppercase mb-4">Portfólio de Soluções</h2>
            <h3 className="text-5xl font-black text-gray-900 leading-tight">Especialidades que impulsionam o amanhã.</h3>
          </div>
          <p className="text-gray-400 font-medium md:max-w-xs">
            Cada negócio é único. Por isso, nossas soluções são customizadas para cada gargalo operacional e objetivo estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative bg-white border border-gray-100 p-10 rounded-[2.5rem] hover:shadow-xl hover:border-allcance-green/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-gray-50 text-allcance-green">
                  {service.icon}
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-300" />
              </div>

              <h4 className="text-2xl font-black text-gray-900 mb-4">
                {service.title}
              </h4>

              <p className="text-gray-500 mb-10 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-allcance-lime"></div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-allcance-green via-allcance-lime to-allcance-green"></div>
          <h4 className="text-3xl md:text-4xl text-white font-black mb-6">Pronto para o próximo nível?</h4>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Agende um diagnóstico gratuito e descubra como podemos otimizar seus processos hoje mesmo.</p>
          <button className="px-12 py-5 bg-allcance-lime text-allcance-green font-black rounded-2xl hover:scale-105 transition-all">
            Solicitar Consultoria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
