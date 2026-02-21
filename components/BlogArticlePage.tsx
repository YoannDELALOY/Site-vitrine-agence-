import React from 'react';
import { ArrowLeft, CheckCircle2, ExternalLink, BookOpen, Github, Globe, ArrowUpRight, Quote, User, Calendar, Zap, Shield, Target, Lock, Lightbulb, TrendingUp, Clock, Users } from 'lucide-react';
import { ProjectData } from './Projects';
import { allTestimonials } from '../data/testimonials';
import starImg from '../Media/etoiletrnsparante.png';

interface BlogArticlePageProps {
  project: ProjectData | null;
  onBack: () => void;
  onGoToContact: () => void;
}

const perlinNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`;

/* ── Texture grain bleu marine pour sections sombres ── */
const BlueSection: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style = {} }) => (
  <div
    className={`relative ${className}`}
    style={{
      backgroundColor: '#0A1628',
      ...style,
    }}
  >
    {/* Grain fractal bleu foncé */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nb'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.22' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.04  0 0 0 0 0.10  0 0 0 0 0.28  0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nb)'/%3E%3C/svg%3E")`,
        backgroundSize: '800px 800px',
        mixBlendMode: 'overlay',
        opacity: 0.9,
      }}
    />
    {/* Vignette radiale pour profondeur */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(30,60,120,0.18) 0%, transparent 70%), radial-gradient(ellipse at 50% 100%, rgba(5,10,30,0.35) 0%, transparent 70%)',
      }}
    />
    {children}
  </div>
);

/* ── Section claire — fond identique au hero d'accueil ── */
const LightSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: '#FEFEFE' }}>
    {/* Blobs animés identiques au Hero */}
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <div className="absolute top-0 left-[-10%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }} />
    </div>
    {children}
  </div>
);

/* ── Icônes cyclées pour les cartes défi ── */
const CHALLENGE_ICONS = [Zap, Shield, Target, Lock, Lightbulb, TrendingUp, Clock, Users];

/* ── Carte défi — liseré gold bidirectionnel + effet 3D tilt ── */
const ChallengeCard: React.FC<{ challenge: string; index: number }> = ({ challenge, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const Icon = CHALLENGE_ICONS[index % CHALLENGE_ICONS.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Max ±12° de rotation
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 12;
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => { setHovered(false); setTilt({ x: 0, y: 0 }); };

  // Entrée : haut(0) → droite(300) → bas(600) → gauche(900)
  // Sortie inverse : gauche(0) → bas(300) → droite(600) → haut(900)
  const bH = (enterDelay: number, leaveDelay: number) => ({
    background: 'linear-gradient(90deg, rgba(180,130,20,0.7), #F4E095, rgba(180,130,20,0.7))',
    boxShadow: '0 0 6px rgba(212,175,55,0.45)',
    transitionDelay: hovered ? `${enterDelay}ms` : `${leaveDelay}ms`,
  });
  const bV = (enterDelay: number, leaveDelay: number) => ({
    background: 'linear-gradient(180deg, rgba(180,130,20,0.7), #F4E095, rgba(180,130,20,0.7))',
    boxShadow: '0 0 6px rgba(212,175,55,0.45)',
    transitionDelay: hovered ? `${enterDelay}ms` : `${leaveDelay}ms`,
  });

  return (
    <div
      style={{ perspective: '800px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={cardRef}
        className="relative rounded-xl overflow-hidden cursor-default"
        style={{
          backgroundColor: '#0A1628',
          backgroundImage: [
            `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nc${index}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.22' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.04  0 0 0 0 0.10  0 0 0 0 0.30  0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nc${index})'/%3E%3C/svg%3E")`,
            `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nf${index}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf${index})' opacity='0.22'/%3E%3C/svg%3E")`,
            `radial-gradient(ellipse at 20% 25%, rgba(30,60,120,0.25) 0%, transparent 55%)`,
            `radial-gradient(ellipse at 80% 75%, rgba(5,10,30,0.45) 0%, transparent 50%)`,
          ].join(', '),
          backgroundSize: '500px 500px, 200px 200px, 100% 100%, 100% 100%',
          backgroundBlendMode: 'overlay, screen, normal, normal',
          border: '1px solid rgba(255,255,255,0.07)',
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(16px) scale(1.02)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transition: 'transform 0.15s ease-out',
          boxShadow: hovered
            ? '0 20px 40px rgba(0,0,0,0.5), 0 8px 20px rgba(212,175,55,0.12)'
            : '0 2px 8px rgba(0,0,0,0.2)',
          willChange: 'transform',
        }}
      >
        {/* Reflet lumineux qui suit la position de la souris */}
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 - tilt.x * 3}%, rgba(212,175,55,0.08) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Liseré gold bidirectionnel */}
        <div className="absolute top-0 left-0 w-full h-[2px] transition-transform duration-300 ease-out origin-left"    style={{ ...bH(0,   900), transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }} />
        <div className="absolute top-0 right-0 w-[2px] h-full transition-transform duration-300 ease-out origin-top"    style={{ ...bV(300, 600), transform: hovered ? 'scaleY(1)' : 'scaleY(0)' }} />
        <div className="absolute bottom-0 right-0 w-full h-[2px] transition-transform duration-300 ease-out origin-right"  style={{ ...bH(600, 300), transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }} />
        <div className="absolute bottom-0 left-0 w-[2px] h-full transition-transform duration-300 ease-out origin-bottom" style={{ ...bV(900, 0),   transform: hovered ? 'scaleY(1)' : 'scaleY(0)' }} />

        {/* Contenu */}
        <div className="p-5">
          {/* Icône + numéro */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.06))',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: hovered ? '0 0 12px rgba(212,175,55,0.2)' : 'none',
                transition: 'box-shadow 0.3s',
              }}
            >
              <Icon size={16} style={{ color: 'rgba(212,175,55,0.85)' }} />
            </div>
            <span
              className="font-serif font-bold leading-none select-none"
              style={{ fontSize: '2rem', color: 'rgba(212,175,55,0.12)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Texte */}
          <p className="text-gray-300 leading-relaxed text-sm">{challenge}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Hook one-shot (ne se réinitialise pas) ── */
const useFadeIn = (threshold = 0.15) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

/* ── Hook bidirectionnel — se réinitialise quand hors vue ── */
const useToggleVisible = (threshold = 0.5) => {
  const ref = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

/* ── Extraction du premier nombre dans une chaîne ── */
const extractNumber = (str: string): number | null => {
  const match = str.match(/[\d]+[.,]?\d*/);
  if (!match) return null;
  const val = parseFloat(match[0].replace(',', '.'));
  return isNaN(val) ? null : val;
};

/* ── AnimatedCounter — machine à sous, piloté par trigger externe ── */
const AnimatedCounter: React.FC<{ target: number; trigger: boolean; delay?: number; duration?: number }> = ({
  target, trigger, delay = 0, duration = 1400,
}) => {
  const [display, setDisplay] = React.useState('0');
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    // Reset immédiat quand la section quitte l'écran
    if (!trigger) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setDisplay('0');
      return;
    }

    // Démarrage avec délai (stagger)
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const isFloat = !Number.isInteger(target);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Effet machine à sous : rapide au début, freine brutalement à la fin
        let displayed: number;
        if (progress < 0.7) {
          // Phase turbo : valeurs qui défilent vite, dépasse la cible
          const overshoot = target * 1.15;
          const p = progress / 0.7;
          const eased = 1 - Math.pow(1 - p, 2);
          displayed = eased * overshoot;
        } else {
          // Phase freinage : retombe sur la valeur exacte
          const p = (progress - 0.7) / 0.3;
          const eased = 1 - Math.pow(1 - p, 3);
          const from = target * 1.15;
          displayed = from + (target - from) * eased;
        }

        setDisplay(isFloat ? displayed.toFixed(1) : Math.round(displayed).toString());

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(isFloat ? target.toFixed(1) : target.toString());
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, delay, duration]);

  return <span>{display}</span>;
};

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ project, onBack, onGoToContact }) => {
  if (!project) return null;

  const linkedTestimonial = allTestimonials.find(t => t.projectId === project.id);

  /* ── Parallax Hero ── */
  const heroImgRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (!heroImgRef.current) return;
      const offset = Math.min(window.scrollY * 0.12, 60);
      heroImgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Résultats avec chiffres pour les cartes stats ── */
  const statsResults = project.results.filter(r => /\d/.test(r));
  // Garantir au moins 3 cartes : compléter avec les premiers résultats sans chiffre si besoin
  const nonStatsResults = project.results.filter(r => !/\d/.test(r));
  const statCards = statsResults.length >= 3
    ? statsResults
    : [...statsResults, ...nonStatsResults].slice(0, Math.max(3, statsResults.length));

  /* ── FadeIn refs ── */
  const introFade = useFadeIn(0.15);
  const approcheFade = useToggleVisible(0.35);
  const defisFade = useFadeIn(0.1);
  const testimonialFade = useFadeIn(0.2);
  const resultsFade = useToggleVisible(0.4);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — hauteur réduite, titre argent métallique
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: '70vh', maxHeight: '80vh' }}
      >
        {/* Image parallax */}
        <img
          ref={heroImgRef}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />

        {/* Overlay gradient — plus dense pour lisibilité du titre */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.60) 40%, rgba(5,10,20,0.80) 100%)',
          }}
        />

        {/* Bouton retour — fixe comme la navbar */}
        <div className="fixed top-5 left-5 z-50">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: 'rgba(255,250,240,0.18)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              border: '1px solid rgba(70,110,180,0.7)',
            }}
          >
            <ArrowLeft size={16} style={{ color: '#D4AF37', filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.4))' }} />
            <span style={{
              background: 'linear-gradient(90deg, #C9A227, #F5D678, #D4AF37, #B8860B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.3))',
            }}>Retour aux réalisations</span>
          </button>
        </div>

        {/* Contenu centré dans le hero */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-12">

          {/* Badge catégorie expertise — gold métallique */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 border"
            style={{
              background: 'linear-gradient(135deg, rgba(180,130,20,0.25) 0%, rgba(212,175,55,0.35) 50%, rgba(180,130,20,0.25) 100%)',
              borderColor: 'rgba(212,175,55,0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'linear-gradient(90deg, #C9A227, #F5D678, #D4AF37, #B8860B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Titre — texture argent métallique */}
          <h1
            className="text-metallic-silver font-serif font-bold leading-tight max-w-4xl mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 5rem)',
              animation: 'heroFadeIn 1s ease forwards',
              filter: [
                'drop-shadow(0 0 10px rgba(180,200,210,0.35))',
                'drop-shadow(4px 6px 0px rgba(0,0,0,0.85))',
                'drop-shadow(6px 10px 2px rgba(0,0,0,0.45))',
                'drop-shadow(8px 14px 6px rgba(0,0,0,0.2))',
              ].join(' '),
            }}
          >
            {project.title}
          </h1>

          {/* Tags technologie — style métallique gold animé */}
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-metallic-gold text-xs font-semibold rounded-full px-3 py-1.5 border cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(180,130,20,0.15) 0%, rgba(212,175,55,0.22) 50%, rgba(180,130,20,0.15) 100%)',
                  borderColor: 'rgba(212,175,55,0.35)',
                  color: '#E8C96A',
                  animation: `tagAppear 0.5s ease forwards`,
                  animationDelay: `${0.8 + i * 0.08}s`,
                  opacity: 0,
                  backdropFilter: 'blur(4px)',
                  textShadow: '0 0 8px rgba(212,175,55,0.4)',
                  boxShadow: '0 0 6px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 6px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Animations CSS */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tagAppear {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .btn-site {
          background: linear-gradient(135deg, #1a2744 0%, #0d1b35 100%);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .btn-site:hover {
          background: linear-gradient(135deg, #9C7C38 0%, #D4AF37 30%, #F4E095 50%, #D4AF37 70%, #9C7C38 100%);
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 0 16px rgba(212,175,55,0.3);
          transform: scale(1.06);
        }
        .btn-site .btn-site-text {
          color: #C8C8C8;
          transition: color 0.3s;
        }
        .btn-site:hover .btn-site-text {
          color: #3a2800;
        }
        .btn-site .btn-site-icon {
          color: #C0C0C0;
          transition: color 0.3s;
        }
        .btn-site:hover .btn-site-icon {
          color: #3a2800;
        }
      `}</style>


      {/* ═══════════════════════════════════════════════════════
          2. INTRO — fond sombre, contexte client
      ═══════════════════════════════════════════════════════ */}
      <BlueSection className="py-20 border-t border-gold/10">

        <div
          ref={introFade.ref}
          className={`relative z-10 max-w-4xl mx-auto px-6 transition-all duration-700 ${
            introFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Métadonnées client — visuellement intégrées */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <User size={14} className="text-gold/60" />
              <span className="text-white/60 text-xs uppercase tracking-widest">Réalisé par</span>
              <span className="text-white/90 text-sm font-semibold ml-1">{project.client}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <Calendar size={14} className="text-gold/60" />
              <span className="text-white/60 text-xs uppercase tracking-widest">Année</span>
              <span className="text-white/90 text-sm font-semibold ml-1">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20" style={{ background: 'rgba(212,175,55,0.06)' }}>
              <span className="text-metallic-gold-inline text-xs uppercase tracking-widest font-bold">{project.category}</span>
            </div>
          </div>

          {/* Filet gold centré */}
          <div className="w-16 h-px bg-gold mx-auto mb-10" />

          {/* Bouton + lien GitHub — après les métadonnées */}
          <div className="flex justify-center items-center gap-4 mb-10">
            {project.url && (() => {
              const domain = new URL(project.url).hostname;
              return (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-site inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                    alt=""
                    className="w-4 h-4 rounded-sm"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="btn-site-text">Voir le site</span>
                  <ArrowUpRight size={13} className="btn-site-icon" />
                </a>
              );
            })()}
            <div className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(212,175,55,0.3)' }} />
            <a
              href={project.githubUrl ?? 'https://github.com/YoannDELALOY'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: 'rgba(212,175,55,0.75)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F4E095')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.75)')}
            >
              <Github size={14} />
              GitHub du projet
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Citation / description principale */}
          <blockquote className="relative">
            {/* Guillemet décoratif */}
            <span
              className="absolute -top-4 -left-2 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: '5rem', color: 'rgba(212,175,55,0.12)', lineHeight: 1 }}
            >
              "
            </span>
            <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed text-center px-8 relative z-10">
              {project.fullDescription}
            </p>
          </blockquote>

          {/* Filet bas */}
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </BlueSection>

      {/* ═══════════════════════════════════════════════════════
          3. NOTRE APPROCHE — slide-in alternée gauche/droite
      ═══════════════════════════════════════════════════════ */}
      {project.process && project.process.length > 0 && (
        <LightSection className="py-24 border-t border-gold/10">
          {/* En-tête */}
          <div className="text-center mb-16 px-6">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Notre approche</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Comment nous l'avons réalisé
            </h2>
          </div>

          <div ref={approcheFade.ref as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto px-6">
            <ol className="space-y-10">
              {project.process.map((step, i) => {
                const fromLeft = i % 2 === 0;
                return (
                  <li
                    key={i}
                    className="flex items-start gap-8"
                    style={{
                      transition: `opacity 1.1s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)`,
                      transitionDelay: approcheFade.visible ? `${i * 300}ms` : '0ms',
                      opacity: approcheFade.visible ? 1 : 0,
                      transform: approcheFade.visible
                        ? 'translateX(0)'
                        : `translateX(${fromLeft ? '-70vw' : '70vw'})`,
                    }}
                  >
                    {/* Numéro watermark — toujours à gauche */}
                    <span
                      className="font-serif font-bold leading-none flex-shrink-0 select-none"
                      style={{
                        fontSize: '6rem',
                        color: 'rgba(212,175,55,0.20)',
                        lineHeight: 1,
                        minWidth: '5rem',
                      }}
                    >
                      {i + 1}
                    </span>
                    {/* Texte — toujours aligné à gauche */}
                    <p className="text-charcoal/80 text-xl leading-relaxed pt-4 flex-1">
                      {step}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </LightSection>
      )}

      {/* ═══════════════════════════════════════════════════════
          4. LES DÉFIS — titre argent, hover zoom + liseré gold
      ═══════════════════════════════════════════════════════ */}
      <BlueSection className="py-24 border-t border-gold/10">

        <div ref={defisFade.ref} className="relative z-10 max-w-5xl mx-auto px-6">
          {/* En-tête */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Les défis</p>
            <h2 className="text-metallic-silver font-serif text-3xl md:text-4xl font-bold">
              Obstacles surmontés
            </h2>
          </div>

          {/* Grille */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-700 ${
            defisFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {project.challenges.map((challenge, i) => (
              <ChallengeCard key={i} challenge={challenge} index={i} />
            ))}
          </div>
        </div>
      </BlueSection>

      {/* ═══════════════════════════════════════════════════════
          5. TÉMOIGNAGE — compact, large, étoiles image
      ═══════════════════════════════════════════════════════ */}
      {linkedTestimonial && (
        <section
          className="relative py-10 border-t border-gold/15 border-b border-gold/15"
          style={{
            background: 'linear-gradient(to right, rgba(212,175,55,0.04), rgba(212,175,55,0.09), rgba(212,175,55,0.04))',
          }}
        >
          {/* Icône Quote arrière-plan */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Quote size={100} style={{ color: 'rgba(212,175,55,0.06)' }} />
          </div>

          <div
            ref={testimonialFade.ref}
            className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
              testimonialFade.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Citation */}
            <p className="font-serif text-xl md:text-2xl italic text-charcoal/85 leading-relaxed mb-8">
              "{linkedTestimonial.content}"
            </p>

            {/* Identité */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={linkedTestimonial.image}
                alt={linkedTestimonial.name}
                className="w-11 h-11 rounded-full object-cover border border-gold/30"
              />
              <div className="text-left">
                <p className="font-bold text-charcoal text-sm">{linkedTestimonial.name}</p>
                <p className="text-metallic-gold-inline text-xs">
                  {linkedTestimonial.role} · {linkedTestimonial.company}
                </p>
                {/* Étoiles image */}
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img key={idx} src={starImg} alt="★" className="w-3 h-3 object-contain" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          6. LES RÉSULTATS — min 3 cartes + liste 2 colonnes
      ═══════════════════════════════════════════════════════ */}
      <LightSection className="py-24 border-t border-gold/10">
        <div ref={resultsFade.ref as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto px-6">
          {/* En-tête */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Les résultats</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Ce que nous avons accompli
            </h2>
          </div>

          {/* Grille stats — min 3 cartes */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-700 ${
            resultsFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {statCards.slice(0, Math.max(3, statCards.length)).map((result, i) => {
              const num = extractNumber(result);
              // Détection du préfixe (+/-) et du suffixe (%/h/min/×/k€/j)
              const prefix = /^[+\-−]/.test(result.trim()) ? result.trim()[0] : '';
              const hasPct  = result.includes('%');
              const hasH    = /\dh\b|\d\s*h\b/.test(result);
              const hasMin  = /min/.test(result);
              const hasX    = /×|\bx\b/.test(result);
              const hasK    = /k€/.test(result);
              const suffix  = hasPct ? '%' : hasH ? 'h' : hasMin ? 'min' : hasX ? '×' : hasK ? 'k€' : '';
              // Signe d'affichage : + ou - selon le contexte
              const sign = prefix === '+' ? '+' : prefix === '-' || prefix === '−' ? '-' : '';
              return (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center flex flex-col items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundColor: '#FAF6EE',
                    backgroundImage: [
                      `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg${i}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg${i})' opacity='0.38'/%3E%3C/svg%3E")`,
                      `radial-gradient(ellipse at 15% 20%, rgba(185,145,65,0.12) 0%, transparent 50%)`,
                      `radial-gradient(ellipse at 80% 75%, rgba(160,120,45,0.10) 0%, transparent 45%)`,
                      `radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)`,
                    ].join(', '),
                    backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%',
                    backgroundBlendMode: 'multiply, normal, normal, normal',
                    border: '1px solid rgba(212,175,55,0.25)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  {num !== null ? (
                    <p className="text-4xl font-bold text-metallic-navy mb-2 leading-none">
                      <span style={{ fontSize: '1.6rem' }}>{sign}</span>
                      <AnimatedCounter target={num} trigger={resultsFade.visible} delay={i * 280} />
                      <span style={{ fontSize: '1.6rem' }}>{suffix}</span>
                    </p>
                  ) : (
                    <p className="text-3xl font-bold text-metallic-navy mb-2 leading-none">—</p>
                  )}
                  <p className="text-charcoal/60 text-sm leading-snug">{result}</p>
                </div>
              );
            })}
          </div>

          {/* Liste complète — 2 colonnes */}
          <ul className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
            resultsFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: '#22c55e' }}
                />
                <span className="text-charcoal/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </LightSection>

      {/* ═══════════════════════════════════════════════════════
          7. CTA — fond or métallique
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div
            className="rounded-3xl p-10 relative overflow-hidden text-center"
            style={{
              backgroundColor: '#FAF6EE',
              backgroundImage: [
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pgcta'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pgcta)' opacity='0.38'/%3E%3C/svg%3E")`,
                `radial-gradient(ellipse at 10% 15%, rgba(185,145,65,0.14) 0%, transparent 50%)`,
                `radial-gradient(ellipse at 85% 80%, rgba(160,120,45,0.12) 0%, transparent 45%)`,
                `radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 65%)`,
                `radial-gradient(ellipse at 75% 10%, rgba(200,170,80,0.08) 0%, transparent 40%)`,
              ].join(', '),
              backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
              backgroundBlendMode: 'multiply, normal, normal, normal, normal',
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 8px 32px rgba(0,0,0,0.10)',
            }}
          >
            {/* Filet lumineux supérieur */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10">
              <BookOpen size={32} className="text-charcoal mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-2 text-charcoal">Un projet similaire ?</h2>
              <p className="text-charcoal/70 mb-6">Discutons de vos besoins. La première consultation est gratuite.</p>

              {/* Lien GitHub — au-dessus des boutons */}
              <div className="mb-6">
                <a
                  href={project.githubUrl ?? 'https://github.com/YoannDELALOY'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 hover:text-charcoal transition-colors underline underline-offset-2"
                >
                  <Github size={14} />
                  GitHub du projet
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Boutons d'action — btn-metallic-dark (bleu → gold hover) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.url && (() => {
                  const domain = new URL(project.url).hostname;
                  return (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-metallic-dark inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                        alt=""
                        className="w-4 h-4 rounded-sm"
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      Voir le site
                      <ExternalLink size={14} />
                    </a>
                  );
                })()}
                <button
                  onClick={onGoToContact}
                  className="btn-metallic-dark inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white"
                >
                  Nous contacter
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
