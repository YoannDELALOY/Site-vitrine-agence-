import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden shadow-2xl bg-charcoal">
          
          {/* Contact Info & Text (Dark Side) */}
          <div className="p-10 md:p-16 text-white space-y-8 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
                <h2 className="font-serif text-4xl font-bold mb-6 text-white">
                  Parlons de votre <span className="text-gold">Futur</span>.
                </h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Vous avez un projet ? Une problématique d'automatisation ? 
                  Prenons 30 minutes pour auditer vos besoins. Pas de jargon, juste des solutions concrètes.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">Nous rencontrer</h4>
                        <p className="text-gray-400">Châteauneuf-sur-Loire, 45110<br/>Loiret, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400">contact@siranno.web</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Form Side (Light Side inside Dark container for contrast) */}
          <div className="bg-paper p-10 md:p-16 flex flex-col justify-center">
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Nom complet</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email professionnel</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="votre@email.com" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Comment pouvons-nous vous aider ?</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Décrivez brièvement votre projet..."></textarea>
                </div>
                <button type="button" className="w-full bg-charcoal text-white font-medium py-4 rounded-lg hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                    Envoyer le message <Send size={18} />
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};