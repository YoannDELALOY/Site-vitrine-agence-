import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HOME}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Blobs Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-gold/20 animate-fade-in">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/80">
              Agence Web à Châteauneuf-sur-Loire
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal animate-slide-up">
            L'Artisanat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
              Numérique
            </span>
          </h1>

          <p className="text-lg md:text-xl text-steel font-light leading-relaxed max-w-lg mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Nous ne nous contentons pas de coder. Nous bâtissons des <strong className="text-charcoal font-medium">architectures digitales souveraines</strong> pour les artisans, PME et commerces locaux.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={`#${SectionId.CONTACT}`}
              className="group relative px-8 py-4 bg-charcoal text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="relative flex items-center gap-2 font-medium">
                Parler de votre projet <ArrowRight size={18} />
              </span>
            </a>
            
            <a
              href={`#${SectionId.SERVICES}`}
              className="px-8 py-4 text-charcoal font-medium hover:text-gold transition-colors flex items-center gap-2"
            >
              Découvrir nos solutions
            </a>
          </div>
        </div>

        {/* Right: Abstract Visual */}
        <div className="relative h-[500px] w-full hidden md:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Floating Glass Cards representing Tech + Human */}
                <div className="relative w-80 h-96">
                    <div className="absolute top-0 right-0 w-64 h-80 glass-panel rounded-2xl z-20 transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl p-6 flex flex-col justify-between border-t border-white/80">
                         <div className="flex justify-between items-start">
                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center shadow-inner">
                                <span className="font-serif font-bold text-gold text-xl">Y</span>
                             </div>
                             <div className="px-2 py-1 bg-green-100 text-safe-green text-xs rounded-full font-medium">En ligne</div>
                         </div>
                         <div className="space-y-3">
                             <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                             <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                         </div>
                         <div className="text-2xl font-serif font-bold text-charcoal">
                             +145% <br/>
                             <span className="text-sm font-sans text-steel font-normal">Croissance Digitale</span>
                         </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-[-20px] w-56 h-64 glass-panel rounded-2xl z-10 transform -rotate-6 shadow-xl bg-charcoal text-white p-6 border border-charcoal/50">
                        <div className="h-full flex flex-col justify-between opacity-90">
                            <Sparkles className="text-gold" />
                            <p className="font-serif italic text-lg leading-snug">"L'IA comme levier de précision absolue."</p>
                            <div className="text-xs text-steel uppercase tracking-widest">Siranno Architecture</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};