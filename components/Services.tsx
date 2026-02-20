import React, { useState, useRef } from 'react';
import { Globe, Cpu, Megaphone, Brain, GraduationCap, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';
import { servicesData as rawServicesData } from '../data/services';

export interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
}

// Associer les icônes JSX aux données
const serviceIcons: Record<string, React.ReactNode> = {
  'web-apps-saas':         <Globe size={24} />,
  'automatisation-n8n':   <Cpu size={24} />,
  'contenu-marketing-ia': <Megaphone size={24} />,
  'ia-agents-rag':        <Brain size={24} />,
  'conseil-formation':    <GraduationCap size={24} />,
  'pilotage-continu':     <BarChart3 size={24} />,
};

export const servicesData: ServiceData[] = rawServicesData.map((s) => ({
  ...s,
  icon: serviceIcons[s.id] ?? <Globe size={24} />,
}));

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => (
  <div
    className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer"
    onClick={() => onClick(service)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick(service)}
  >
    {/* Barre dorée métallique au survol */}
    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#B68D40]/60 via-[#F4E095] to-[#B68D40]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ boxShadow: '0 0 8px rgba(212,175,55,0.4)' }}></div>

    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-paper to-white group-hover:from-gold/20 group-hover:to-amber-50 shadow-inner flex items-center justify-center mb-6 text-charcoal group-hover:text-[#D4AF37] group-hover:scale-110 group-hover:[filter:drop-shadow(1px_1px_0px_#9C7C38)_drop-shadow(0_0_8px_rgba(212,175,55,0.5))] transition-all duration-300">
      {service.icon}
    </div>

    <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-metallic-gold transition-colors">
      {service.title}
    </h3>

    <p className="text-steel font-light leading-relaxed group-hover:text-charcoal/80 transition-colors text-sm mb-6">
      {service.description}
    </p>

    <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-metallic-gold-inline">En savoir plus</span>
      <ArrowRight size={14} className="text-gold" />
    </div>
  </div>
);

interface ServicesProps {
  onOpenService?: (service: ServiceData) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenService }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const prev = () => setCurrent((c) => (c - 1 + servicesData.length) % servicesData.length);
  const next = () => setCurrent((c) => (c + 1) % servicesData.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  const handleClick = (service: ServiceData) => {
    onOpenService?.(service);
  };

  return (
    <section
      id={SectionId.SERVICES}
      className="py-24 relative overflow-hidden"
    >
      {/* Blobs identiques au Hero — continuité visuelle */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[+10%] left-[+85%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[+10%] right-[+85%] w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[+10%] left-[+85%] w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block animate-fade-in">
            6 Expertises · 1 Partenaire
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-metallic-navy mb-6 animate-slide-up">
            L'IA et le web au service de{' '}
            <br className="hidden md:block" />
            <span className="italic relative inline-block text-metallic-gold">
              votre croissance
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-steel text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Nous fusionnons développement web premium, automatisation intelligente et IA de pointe pour transformer durablement votre entreprise.
          </p>
        </div>

        {/* Desktop : grille */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={handleClick} />
          ))}
        </div>

        {/* Mobile : une carte visible + swipe */}
        <div className="md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {servicesData.map((service) => (
                <div key={service.id} className="w-full shrink-0 px-1">
                  <ServiceCard service={service} onClick={handleClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation mobile — flèches masquées, dots uniquement */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="hidden md:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {servicesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-gray-300'}`}
                  aria-label={`Expertise ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="hidden md:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="text-center text-xs text-steel mt-3 italic">Glissez pour naviguer</p>
        </div>
      </div>
    </section>
  );
};
