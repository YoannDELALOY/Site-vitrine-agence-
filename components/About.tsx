import React from 'react';
import { MapPin, CheckCircle2, Users, Lightbulb } from 'lucide-react';
import { SectionId } from '../types';
import { PerformanceChart } from './PerformanceChart';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Philosophy & Agency DNA */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-widest text-sm">
            <Users size={16} />
            <span>L'ADN de l'Agence</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Siranno Web : L'Architecte de votre <br/>
            <span className="relative inline-block">
              <span className="relative z-10">Réussite Digitale</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/30 -z-0"></span>
            </span>.
          </h2>

          <div className="prose prose-lg text-steel">
            <p>
              Fondée à Châteauneuf-sur-Loire, <strong>Siranno Web</strong> n'est pas une simple agence de développement. Nous sommes le partenaire stratégique des PME et artisans qui refusent le statu quo.
            </p>
            <p>
              Notre vision est simple : apporter l'excellence technique des grands groupes financiers aux acteurs de l'économie locale. Nous construisons des écosystèmes digitaux (Sites, IA, Outils métiers) conçus pour durer, performer et vous libérer du temps.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="font-serif font-semibold text-charcoal text-lg">Pourquoi nous choisir ?</h4>
            {[
              "Une architecture technique 'Gold Standard'",
              "Une relation de proximité réelle (Loiret & alentours)",
              "L'innovation IA au service de votre rentabilité"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-safe-green shrink-0" size={20} />
                <span className="text-charcoal font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 flex items-center gap-6 border-t border-gray-100 mt-8">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-charcoal overflow-hidden border-2 border-gold shadow-lg">
                    <img src="https://picsum.photos/200/200?grayscale" alt="Yoann Delaloy" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="font-serif text-xl font-bold text-charcoal">Yoann Delaloy</div>
                    <div className="text-sm text-gold font-medium uppercase tracking-wide">Fondateur & Lead Architect</div>
                </div>
             </div>
             <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
             <div className="hidden sm:block">
                 <div className="flex items-center gap-2 text-charcoal font-bold font-serif text-lg">
                    <MapPin size={18} className="text-gold" /> Châteauneuf-sur-Loire
                 </div>
             </div>
          </div>
        </div>

        {/* Right: Performance Viz & Decoration */}
        <div className="relative">
            {/* Main Card */}
            <div className="glass-panel p-8 rounded-3xl shadow-2xl relative z-10 border-t border-white/80 backdrop-blur-xl bg-white/60">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-charcoal">Impact Client Moyen</h3>
                        <p className="text-sm text-steel">Evolution du CA après transformation</p>
                    </div>
                    <div className="p-2 bg-gold/10 rounded-lg text-gold">
                        <Lightbulb size={20} />
                    </div>
                </div>
                
                <PerformanceChart />
                
                <div className="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                    <div className="text-steel">Retour sur investissement</div>
                    <div className="font-bold text-safe-green flex items-center gap-1">
                        +45% <span className="text-xs font-normal text-steel">(Dès 6 mois)</span>
                    </div>
                </div>
            </div>
            
            {/* Background Blobs/Decorations */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 glass-card p-4 rounded-xl shadow-lg border-l-4 border-gold animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                    <div className="text-2xl font-bold text-charcoal font-serif">100%</div>
                    <div className="text-xs text-steel uppercase tracking-wider">Sur Mesure</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};