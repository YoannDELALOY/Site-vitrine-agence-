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

    const primaryCard   = el.querySelector('.hero-card-primary')    as HTMLElement | null;
    const secondaryCard = el.querySelector('.hero-card-secondary')  as HTMLElement | null;
    const glassContainer = el.querySelector('.hero-glass-container') as HTMLElement | null;
    const numeriqueEl   = el.querySelector('.hero-numerique')       as HTMLElement | null;

    let timer: ReturnType<typeof setTimeout> | null = null;
    let glassTimer: ReturnType<typeof setTimeout> | null = null;

    // ── Effet verre cassé ───────────────────────────────────────────────────
    const spawnGlassShards = (cx: number, cy: number) => {
      if (!glassContainer) return;
      glassContainer.innerHTML = '';

      // Flash d'impact
      const flash = document.createElement('div');
      flash.style.cssText = `position:absolute;left:${cx - 50}px;top:${cy - 50}px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.95) 0%,rgba(210,230,255,0.55) 40%,transparent 70%);pointer-events:none;`;
      glassContainer.appendChild(flash);
      flash.animate(
        [{ transform: 'scale(0)', opacity: 1 }, { transform: 'scale(2.5)', opacity: 0 }],
        { duration: 350, easing: 'ease-out', fill: 'forwards' }
      );
      setTimeout(() => { if (flash.parentElement) flash.remove(); }, 400);

      // Éclats de verre — polygones irréguliers
      const shards = [
        { w: 18, h: 22, clip: 'polygon(0 0,100% 20%,80% 100%,10% 90%)',  dx: -55, dy: 150, dr: -130, d: 0   },
        { w: 12, h: 16, clip: 'polygon(20% 0,100% 0,100% 70%,0 100%)',   dx: -28, dy: 180, dr:  120, d: 50  },
        { w: 22, h: 14, clip: 'polygon(0 30%,100% 0,90% 100%,5% 80%)',   dx:  45, dy: 160, dr: -100, d: 80  },
        { w: 10, h: 20, clip: 'polygon(50% 0,100% 100%,0 80%)',          dx: -72, dy: 130, dr:  160, d: 30  },
        { w: 16, h: 12, clip: 'polygon(0 0,80% 10%,100% 100%,20% 100%)', dx:  60, dy: 145, dr:   80, d: 100 },
        { w: 8,  h: 18, clip: 'polygon(30% 0,100% 20%,70% 100%,0 90%)',  dx: -40, dy: 185, dr: -170, d: 20  },
        { w: 14, h: 10, clip: 'polygon(0 0,100% 0,80% 100%,10% 100%)',   dx:  35, dy: 115, dr:  110, d: 60  },
        { w: 20, h: 16, clip: 'polygon(10% 0,100% 10%,90% 100%,0 85%)',  dx: -78, dy: 170, dr:  -80, d: 40  },
        { w: 9,  h: 14, clip: 'polygon(40% 0,100% 30%,60% 100%,0 70%)',  dx:  22, dy: 200, dr:  200, d: 90  },
        { w: 15, h: 18, clip: 'polygon(0 10%,90% 0,100% 90%,15% 100%)',  dx: -50, dy: 155, dr: -150, d: 15  },
      ];

      shards.forEach(({ w, h, clip, dx, dy, dr, d }) => {
        const s = document.createElement('div');
        s.style.cssText = [
          'position:absolute',
          `width:${w}px`, `height:${h}px`,
          `left:${cx - w / 2}px`, `top:${cy - h / 2}px`,
          `clip-path:${clip}`,
          'background:linear-gradient(135deg,rgba(255,255,255,0.92) 0%,rgba(210,235,255,0.75) 40%,rgba(160,200,255,0.45) 100%)',
          'box-shadow:inset 0 1px 3px rgba(255,255,255,0.9),inset -1px -1px 2px rgba(100,150,200,0.3),0 0 6px rgba(180,210,255,0.4)',
          'pointer-events:none', 'will-change:transform,opacity',
        ].join(';');
        glassContainer.appendChild(s);
        s.animate(
          [
            { transform: 'translate(0,0) rotate(0deg) scale(1)',                                            opacity: 0.9         },
            { transform: `translate(${dx * 0.3}px,${-10}px) rotate(${dr * 0.25}deg) scale(1.05)`,          opacity: 0.9, offset: 0.2 },
            { transform: `translate(${dx}px,${dy}px) rotate(${dr}deg) scale(0.6)`,                          opacity: 0           },
          ],
          { duration: 1300, delay: d, easing: 'cubic-bezier(0.55,0,1,0.45)', fill: 'forwards' }
        );
        setTimeout(() => { if (s.parentElement) s.remove(); }, 1400 + d);
      });
    };
    // ───────────────────────────────────────────────────────────────────────

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Délai 1.5 s, puis animation (fill-mode:both place déjà les cartes hors-écran pendant ce délai)
            timer = setTimeout(() => {
              primaryCard?.classList.add('animated');
              secondaryCard?.classList.add('animated');

              // Effet verre cassé : la carte secondaire (qui part en premier) tape à 54% de 4.5s = 2430ms
              glassTimer = setTimeout(() => {
                if (!numeriqueEl) return;
                const heroRect = el.getBoundingClientRect();
                const numRect  = numeriqueEl.getBoundingClientRect();
                const cx = numRect.right - heroRect.left;
                const cy = numRect.top - heroRect.top + numRect.height * 0.65;
                spawnGlassShards(cx, cy);
              }, 2430);

              // Une fois l'animation terminée, activer le hover interactif via la classe settled
              primaryCard?.addEventListener('animationend', () => {
                primaryCard.classList.add('hero-card-settled');
              }, { once: true });
              secondaryCard?.addEventListener('animationend', () => {
                secondaryCard.classList.add('hero-card-settled');
              }, { once: true });
            }, 1500);
          } else {
            // L'utilisateur est reparti : annuler les timers et réinitialiser pour replay
            if (timer) { clearTimeout(timer); timer = null; }
            if (glassTimer) { clearTimeout(glassTimer); glassTimer = null; }
            if (glassContainer) glassContainer.innerHTML = '';
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
      if (glassTimer) clearTimeout(glassTimer);
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

      {/* Container pour l'effet verre cassé */}
      <div className="hero-glass-container absolute inset-0 pointer-events-none z-30" />

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
            <span className="hero-numerique text-metallic-gold">
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
