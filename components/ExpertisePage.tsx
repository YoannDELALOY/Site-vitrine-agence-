import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData, ServiceData } from './Services';

interface ExpertisePageProps {
  onOpenService?: (service: ServiceData) => void;
  onNavigateService?: (service: ServiceData) => void;
  onGoToContact?: () => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onOpenService, onNavigateService, onGoToContact }) => {
  const handleServiceClick = (service: ServiceData) => {
    if (onNavigateService) {
      onNavigateService(service);
    } else if (onOpenService) {
      onOpenService(service);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">

      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Savoir-faire & Technologies
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Notre{' '}
            <span className="text-metallic-gold">Expertise</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Six expertises complémentaires — web, automatisation, IA, marketing, conseil & formation, pilotage continu — au service des entreprises ambitieuses du Val de Loire et au-delà.
            Chaque prestation est conçue sur mesure, sans compromis.
          </p>
        </div>
      </div>

      {/* Sections verticales alternées */}
      <div className="space-y-0">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className="py-20 group relative"
              style={
                isEven
                  ? {
                      backgroundColor: 'rgba(30, 58, 95, 0.04)',
                    }
                  : {
                      backgroundColor: '#0F172A',
                      backgroundImage: [
                        `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg1)' opacity='0.45'/%3E%3C/svg%3E")`,
                        `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg2)' opacity='0.22'/%3E%3C/svg%3E")`,
                      ].join(', '),
                      backgroundSize: '600px 600px, 200px 200px',
                      backgroundBlendMode: 'overlay, screen',
                      boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.12), inset 0 -1px 0 rgba(212,175,55,0.08)',
                    }
              }
            >
              {/* Barre gold — sweep de gauche à droite au hover */}
              <div
                className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#B68D40]/80 via-[#F4E095] to-[#B68D40]/80 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ boxShadow: '0 0 12px rgba(212,175,55,0.6), 0 2px 8px rgba(212,175,55,0.3)' }}
              ></div>
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Icône / Visuel */}
                  <div className={`flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      <div className={`w-48 h-48 rounded-3xl flex items-center justify-center shadow-2xl ${isEven ? 'bg-gradient-to-br from-charcoal to-[#1E3A5F]' : 'bg-gradient-to-br from-[#1E3A5F] to-charcoal border border-white/10'}`}>
                        <div className="text-gold scale-[3]">
                          {service.icon}
                        </div>
                      </div>
                      {/* Décoration */}
                      <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl -z-10 rotate-12 ${isEven ? 'bg-gold/10' : 'bg-gold/20'}`}></div>
                      <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-xl -z-10 -rotate-6 ${isEven ? 'bg-blue-100/60' : 'bg-white/5'}`}></div>
                    </div>
                  </div>

                  {/* Contenu texte */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm">
                      Prestation #{index + 1}
                    </span>

                    <h2 className={`font-serif text-4xl font-bold leading-tight ${isEven ? 'text-metallic-navy' : 'text-white'}`}>
                      {service.title}
                    </h2>

                    <p className={`text-lg leading-relaxed ${isEven ? 'text-steel' : 'text-gray-300'}`}>
                      {service.fullDescription || service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-safe-green shrink-0 mt-0.5" />
                          <span className={isEven ? 'text-charcoal/80' : 'text-gray-300'}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleServiceClick(service)}
                      className="inline-flex items-center gap-2 px-6 py-3 btn-metallic-dark text-white rounded-full font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
                    >
                      Découvrir en détail <ArrowRight size={16} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="cta-leather text-center bg-charcoal text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Parlons de vos besoins concrets. La première consultation est gratuite.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl"
            >
              Lancer votre projet <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
