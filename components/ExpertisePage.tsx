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
            Six domaines d'excellence au service des PME, artisans et commerçants du Val de Loire.
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
              className={`py-20 ${isEven ? '' : 'bg-white/40'}`}
              style={
                !isEven
                  ? {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)' opacity='0.3'/%3E%3C/svg%3E")`,
                      backgroundSize: '400px 400px',
                      backgroundBlendMode: 'multiply',
                    }
                  : {}
              }
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Icône / Visuel */}
                  <div className={`flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-charcoal to-[#1E3A5F] flex items-center justify-center shadow-2xl">
                        <div className="text-gold scale-[3]">
                          {service.icon}
                        </div>
                      </div>
                      {/* Décoration */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/10 rounded-2xl -z-10 rotate-12"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100/60 rounded-xl -z-10 -rotate-6"></div>
                    </div>
                  </div>

                  {/* Contenu texte */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm">
                      Prestation #{index + 1}
                    </span>

                    <h2 className="font-serif text-4xl font-bold text-metallic-navy leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-steel text-lg leading-relaxed">
                      {service.fullDescription || service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-safe-green shrink-0 mt-0.5" />
                          <span className="text-charcoal/80">{b}</span>
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
