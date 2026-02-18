import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Search, Lightbulb, Rocket } from 'lucide-react';
import { ServiceData } from './Services';

interface ServiceDetailPageProps {
  service: ServiceData;
  onBack: () => void;
  onGoToContact: () => void;
}

const processSteps = [
  {
    icon: <Search size={24} />,
    title: 'Analyse',
    description: 'Audit de votre situation actuelle, identification des besoins et des opportunités. Nous définissons ensemble les objectifs mesurables.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Conception',
    description: 'Proposition sur mesure, maquettes et architecture technique. Chaque détail est pensé pour maximiser l\'impact et la facilité d\'usage.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Déploiement',
    description: 'Mise en production, tests, formation et suivi. Nous restons disponibles pour ajuster et faire évoluer la solution dans le temps.',
  },
];

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onGoToContact }) => {
  return (
    <div className="min-h-screen pt-24 pb-24">

      {/* Bouton retour */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux expertises
        </button>
      </div>

      {/* Hero section */}
      <div className="relative overflow-hidden py-16 mb-16"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6 text-gold">
            <span className="scale-150">{service.icon}</span>
          </div>
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Expertise détaillée
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            {service.fullDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Description + Bénéfices */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Ce que nous réalisons
            </span>
            <h2 className="font-serif text-3xl font-bold text-metallic-navy mb-6">
              Une solution pensée pour vous
            </h2>
            <p className="text-steel text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            {service.useCases && service.useCases.length > 0 && (
              <div>
                <h4 className="font-serif font-semibold text-charcoal text-base mb-4">Cas d'usage typiques</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((uc, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gold/8 border border-gold/20 rounded-full text-sm text-charcoal font-medium">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="font-serif text-xl font-bold text-charcoal mb-6">
              Bénéfices concrets
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-safe-green shrink-0 mt-0.5" />
                  <span className="text-charcoal/80 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notre approche */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Méthode
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Notre approche en 3 étapes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connecteur */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent -translate-y-1/2 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
                <div className="glass-card p-6 rounded-2xl relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-4 text-gold">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-metallic-gold-inline uppercase tracking-widest mb-2">
                    Étape {i + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal mb-3">{step.title}</h4>
                  <p className="text-steel text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-leather bg-charcoal text-white rounded-3xl p-12 text-center relative">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Discutons de votre projet
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Première consultation gratuite. En 30 minutes, nous analysons votre situation et définissons ensemble la meilleure approche.
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
