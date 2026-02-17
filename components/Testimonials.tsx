import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionId } from '../types';

const testimonials = [
  {
    name: "Sophie Dubois",
    role: "Gérante, Fleuriste du Château",
    content: "Yoann a su traduire l'âme de ma boutique dans un site web. Je ne voulais pas d'un truc froid et technique. Le résultat est magnifique et mes commandes en ligne ont doublé.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Marc Alibert",
    role: "Directeur, Alibert Construction",
    content: "L'application métier développée par Siranno nous fait gagner 10h par semaine sur la gestion administrative. Une approche pro, carrée, mais toujours à l'écoute.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Julie & Thomas",
    role: "Fondateurs, La Table de Loire",
    content: "L'intégration de l'IA pour les réservations a été un game-changer. Plus d'appels manqués pendant le service. C'est du luxe accessible.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-paper relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }}>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
            Ils nous font <span className="text-gold underline decoration-gold/30 underline-offset-4">confiance</span>
          </h2>
          <p className="text-steel">Des partenaires locaux qui ont franchi le cap du digital.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col relative group hover:border-gold/30 transition-colors">
              <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-charcoal/80 italic mb-8 flex-grow leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="font-serif font-bold text-charcoal">{t.name}</div>
                    <div className="text-xs text-steel uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};