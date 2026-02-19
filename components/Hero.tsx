import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { SectionId } from '../types';

const TechLogo: React.FC<{ src: string; alt: string; fallback: string }> = ({ src, alt, fallback }) => (
  <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden" title={alt}>
    <img
      src={src}
      alt={alt}
      className="w-6 h-6 object-contain"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `<span class="text-xs font-bold text-charcoal/60">${fallback}</span>`;
        }
      }}
    />
  </div>
);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const primaryCard = el.querySelector('.hero-card-primary') as HTMLElement | null;
    const secondaryCard = el.querySelector('.hero-card-secondary') as HTMLElement | null;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Délai 1.5 s, puis animation (fill-mode:both place déjà les cartes hors-écran pendant ce délai)
            timer = setTimeout(() => {
              primaryCard?.classList.add('animated');
              secondaryCard?.classList.add('animated');
              // Une fois l'animation terminée, activer le hover interactif via la classe settled
              primaryCard?.addEventListener('animationend', () => {
                primaryCard.classList.add('hero-card-settled');
              }, { once: true });
              secondaryCard?.addEventListener('animationend', () => {
                secondaryCard.classList.add('hero-card-settled');
              }, { once: true });
            }, 1500);
          } else {
            // L'utilisateur est reparti : annuler le timer éventuel et réinitialiser pour replay
            if (timer) { clearTimeout(timer); timer = null; }
            primaryCard?.classList.remove('animated');
            primaryCard?.classList.remove('hero-card-settled');
            secondaryCard?.classList.remove('animated');
            secondaryCard?.classList.remove('hero-card-settled');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id={SectionId.HOME}
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pb-16"
    >
      {/* Background Blobs Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-20 lg:gap-32 items-center">

        {/* Left: Text Content */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-gold/20 animate-fade-in">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/80">
              Agence Web à Châteauneuf-sur-Loire
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="text-metallic-navy">L'Artisanat</span>
            <br />
            <span className="text-metallic-gold">
              Numérique
            </span>
          </h1>

          <p className="text-lg md:text-xl text-steel font-light leading-relaxed max-w-lg mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Nous ne nous contentons pas de coder. Nous bâtissons des{' '}
            <strong className="text-charcoal font-medium">architectures digitales souveraines</strong>{' '}
            pour les artisans, PME et commerces locaux.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={`#${SectionId.CONTACT}`}
              className="group relative px-8 py-4 btn-metallic-dark text-white rounded-full overflow-hidden shadow-xl"
            >
              <span className="relative flex items-center gap-2 font-semibold">
                Parler de votre projet <ArrowRight size={18} />
              </span>
            </a>

            <a
              href="tel:+33647344364"
              className="flex items-center gap-2 px-6 py-3 md:py-4 text-charcoal font-medium hover-metallic-gold transition-all duration-300 border border-charcoal/20 rounded-full hover:border-gold/50"
            >
              <Phone size={16} className="text-gold" />
              06 47 34 43 64
            </a>
          </div>
        </div>

        {/* Right: Abstract Visual — masqué sur mobile */}
        <div className="relative h-[480px] w-full hidden md:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="relative w-80 h-96 -mr-8 lg:-mr-16">

              {/* Carte principale (blanche) */}
              <div
                className="hero-card-primary absolute top-0 right-0 w-64 h-80 rounded-2xl z-20 transition-[box-shadow,border] duration-700 shadow-2xl p-6 flex flex-col gap-2"
                style={{
                  background: 'rgba(255,250,240,0.92)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.75)',
                  borderLeft: '4px solid #C5A059',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)'
                }}
              >
                {/* Label Maison Siranno en haut */}
                <div className="flex justify-between items-start shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center shadow-inner border border-gold/30">
                      <img
                        src="/logos/Design sans titre (81).png"
                        alt="MS"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="font-serif text-xs text-metallic-gold-inline tracking-widest uppercase">Maison<br />Siranno</span>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-safe-green text-xs rounded-full font-medium">En ligne</div>
                </div>

                {/* Stack & Outils — s'étire pour remplir l'espace */}
                <div className="flex flex-col flex-1 min-h-0">
                  <p className="text-xs text-steel/70 font-medium uppercase tracking-wider shrink-0 mb-1">Stack & Outils</p>
                  <div className="flex-1 min-h-0 relative">
                    <img
                      src="/Media/Logos/Logos divers/Design_sans_titre_2026-02-19T135224.213.png"
                      alt="Stack & Outils"
                      className="absolute inset-1 w-full h-full object-contain scale-[1.1] opacity-60"
                    />
                  </div>
                </div>

                <div className="font-serif font-bold text-charcoal shrink-0">
                  <span className="text-3xl text-metallic-gold">+27%</span>
                  <br />
                  <span className="text-sm font-sans text-steel font-normal">Croissance Digitale</span>
                </div>
              </div>

              {/* Carte secondaire (sombre) */}
              <div className="hero-card-secondary absolute bottom-4 left-[-20px] w-56 h-64 rounded-2xl z-10 shadow-xl bg-charcoal text-white p-6 border border-white/10">
                <div className="h-full flex flex-col justify-between opacity-90">
                  <img
                    src="/Media/Logos/Logos divers/hosting-3d-icon-png-download-8034777.webp"
                    alt="Hosting"
                    className="w-10 h-10 object-contain"
                  />
                  <p className="font-serif italic text-lg leading-snug">
                    "L'IA comme levier de précision absolue."
                  </p>
                  <div className="text-xs text-steel uppercase tracking-widest">Maison Siranno</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
