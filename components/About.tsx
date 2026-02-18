import React from 'react';
import { MapPin, CheckCircle2, Users, Lightbulb } from 'lucide-react';
import { SectionId } from '../types';
import { PerformanceChart } from './PerformanceChart';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Philosophy & Agency DNA */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 text-metallic-gold-inline font-medium uppercase tracking-widest text-sm">
            <Users size={16} />
            <span>L'ADN de l'Agence</span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-metallic-navy">
            Maison Siranno : L'Architecte de votre{' '}
            <br className="hidden lg:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-metallic-gold">Réussite Digitale</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-0 rounded"></span>
            </span>.
          </h2>

          <div className="text-steel text-lg leading-relaxed">
            <p className="mb-3">
              Fondée à Châteauneuf-sur-Loire,{' '}
              <strong className="text-charcoal font-semibold">Maison Siranno</strong> n'est pas une simple
              agence de développement. Nous sommes le partenaire stratégique des PME et artisans qui
              refusent le statu quo.
            </p>
            <p>
              Notre vision : apporter l'excellence technique des grands groupes aux acteurs de
              l'économie locale. Nous construisons des écosystèmes digitaux conçus pour durer,
              performer et vous libérer du temps.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="font-serif font-semibold text-charcoal text-lg">Pourquoi nous choisir ?</h4>
            {[
              "Une architecture technique 'Gold Standard'",
              "Une relation de proximité réelle (Loiret & alentours)",
              "L'innovation IA au service de votre rentabilité"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 className="text-safe-green shrink-0" size={20} />
                <span className="text-charcoal font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Bloc fondateur centré sur mobile */}
          <div className="pt-8 flex flex-col items-center md:items-start gap-4 border-t border-gray-100 mt-8">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-charcoal overflow-hidden border-2 border-gold shadow-lg shrink-0">
                <img src="https://picsum.photos/200/200?grayscale" alt="Yoann Delaloy" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-serif text-xl font-bold text-charcoal">Yoann Delaloy</div>
                <div className="text-sm text-metallic-gold-inline font-medium uppercase tracking-wide">Fondateur & Lead Architect</div>
              </div>
            </div>
            <div className="flex items-start gap-2 text-charcoal font-semibold font-serif text-sm text-center md:text-left justify-center md:justify-start">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>1 rue Auguste Grivot<br />Châteauneuf-sur-Loire, 45110</span>
            </div>
          </div>
        </div>

        {/* Right: Performance Viz */}
        {/* Le conteneur parent est `relative` sans isolation, le badge doit avoir z-index > la card principale */}
        <div className="relative" style={{ isolation: 'isolate' }}>

          {/* Main Card — z-index 10 */}
          <div
            className="glass-panel p-8 rounded-3xl shadow-2xl border-t border-white/80 backdrop-blur-xl bg-white/60"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal">Impact Client Moyen</h3>
                <p className="text-sm text-steel">Évolution du CA après transformation</p>
              </div>
              <div className="p-2 bg-gold/10 rounded-lg text-gold">
                <Lightbulb size={20} />
              </div>
            </div>

            {/* Graphique dans son propre contexte, pas de z-index conflictuel */}
            <div style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
              <PerformanceChart />
            </div>

            <div className="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
              <div className="text-steel">Retour sur investissement</div>
              <div className="font-bold text-safe-green flex items-center gap-1">
                +45% <span className="text-xs font-normal text-steel">(Dès 6 mois)</span>
              </div>
            </div>
          </div>

          {/* Background Blobs — derrière tout */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0 }}></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0, animationDelay: '2s' }}></div>

          {/* Badge flottant "100% Sur Mesure" — doit être AU-DESSUS du graphique (z-index 50) */}
          <div
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 glass-card p-4 rounded-xl shadow-xl border-l-4 border-gold animate-slide-up"
            style={{ animationDelay: '0.5s', zIndex: 50 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-metallic-gold">100%</div>
              <div className="text-xs text-steel uppercase tracking-wider">Sur Mesure</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
