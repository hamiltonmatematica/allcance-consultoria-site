
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-allcance-green text-xs font-black tracking-[0.4em] uppercase mb-4">Ecossistema Allcance</h2>
          <h3 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Empresas que elevamos ao topo.</h3>
          <div className="w-24 h-1 bg-allcance-lime mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
          {CLIENTS.map((client, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 flex flex-col items-center justify-center group hover:bg-gray-50 transition-all duration-300"
            >
              <div className="text-center">
                <p className="text-gray-900 font-black text-sm uppercase tracking-wider group-hover:text-allcance-green transition-colors">
                  {client.name}
                </p>
                <div className="mt-2 h-0.5 w-0 group-hover:w-full bg-allcance-lime transition-all duration-500 mx-auto"></div>
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-2">
                  {client.location}
                </p>
              </div>
            </div>
          ))}
          
          <div className="bg-allcance-green p-10 flex items-center justify-center text-center">
            <p className="text-white font-black text-lg">E sua empresa aqui?</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
           <div className="w-24 h-24 rounded-full bg-allcance-lime flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl">“</span>
           </div>
           <div>
              <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed italic mb-4">
                "A Allcance não apenas resolveu nossos problemas financeiros, eles mudaram a forma como pensamos nosso negócio. Hoje temos clareza estratégica e segurança para investir."
              </p>
              <p className="text-allcance-green font-black uppercase tracking-widest text-sm">— Depoimento de Parceiro Estratégico</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
