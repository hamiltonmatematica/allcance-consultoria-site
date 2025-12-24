
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Decorative background element - Deep Green Side Bar */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-allcance-green hidden lg:block skew-x-[-6deg] translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-allcance-green/5 border border-allcance-green/10 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-allcance-lime animate-pulse"></span>
              <span className="text-allcance-green text-xs font-bold uppercase tracking-widest">Consultoria Empresarial de Elite</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-6">
              REVOLUCIONE <br /> 
              <span className="text-allcance-green">SUA GESTÃO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-10">
              Desde 2005, transformamos o potencial de pequenas e médias empresas em resultados extraordinários através de inteligência estratégica e know-how técnico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#servicos" 
                className="group flex items-center justify-center px-8 py-5 bg-allcance-green text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-allcance-green/20 hover:-translate-y-1"
              >
                Nossas Soluções
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#contato" 
                className="flex items-center justify-center px-8 py-5 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-allcance-lime hover:bg-gray-50 transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6 border-t border-gray-100 pt-8">
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Consultant" />
                   </div>
                 ))}
               </div>
               <div className="text-sm">
                 <p className="text-gray-900 font-bold">+250 empresas</p>
                 <p className="text-gray-400">confiam na Allcance</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe Allcance em reunião" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-allcance-green/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
