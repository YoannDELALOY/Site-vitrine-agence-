import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Tag, User, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import { ProjectData } from './Projects';
import { SectionId } from '../types';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onNavigateBlog?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigateBlog }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="cta-leather rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-white/40 animate-slide-up flex flex-col relative"
        style={{
          backgroundColor: '#FAF6EE',
          backgroundImage: [
            `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg3)' opacity='0.30'/%3E%3C/svg%3E")`,
            `radial-gradient(ellipse at 12% 18%, rgba(185,145,65,0.08) 0%, transparent 48%)`,
            `radial-gradient(ellipse at 80% 72%, rgba(160,120,45,0.06) 0%, transparent 42%)`,
          ].join(', '),
          backgroundSize: '700px 700px, 100% 100%, 100% 100%',
          backgroundBlendMode: 'multiply, normal, normal',
        }}
      >
        {/* Bord gauche — lumière de page */}
        <div className="absolute top-0 left-0 bottom-0 w-14 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 40%, transparent 100%)' }}
        ></div>
        {/* Bord droit — ombre légère */}
        <div className="absolute top-0 right-0 bottom-0 w-10 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.10) 0%, transparent 100%)' }}
        ></div>
        {/* Coin bas-gauche — courbure de page */}
        <div className="absolute bottom-0 left-0 w-48 h-32 pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(0,0,0,0.40) 0%, transparent 65%)' }}
        ></div>
        {/* Coin bas-droit — levée de page */}
        <div className="absolute bottom-0 right-0 w-44 h-36 pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 35%, transparent 60%)', borderRadius: '0 0 1.5rem 0' }}
        ></div>

        {/* Image Hero */}
        <div className="relative h-56 rounded-t-3xl overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-xs font-medium text-metallic-gold-inline uppercase tracking-widest block mb-2">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl font-bold text-metallic-silver">{project.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white hover:text-charcoal transition-all text-white z-10"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto flex-1" style={{ scrollbarGutter: 'stable' }}>

        {/* Meta infos */}
        <div className="px-8 py-4 border-b border-gold/10 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-steel">
            <User size={14} className="text-gold" />
            <span className="text-gold/70 font-medium">Réalisé par</span>
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-steel">
            <Calendar size={14} className="text-gold" />
            <span>{project.year}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-gold/10 rounded-full text-xs text-gold border border-gold/20 font-medium">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">

          <div>
            <p className="text-charcoal/80 leading-relaxed text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Défis */}
          <div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
              <AlertCircle size={18} className="text-gold" />
              Les défis
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/70 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Résultats */}
          <div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-safe-green" />
              Les résultats
            </h3>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-safe-green mt-0.5 shrink-0" />
                  <span className="text-charcoal/80 text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gold/10">
            <p className="text-metallic-gold text-sm mb-4 text-center font-semibold">
              Un projet similaire ? Discutons-en.
            </p>
            <div className="flex flex-col gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metallic-gold font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  Voir le site <ExternalLink size={16} />
                </a>
              )}
              <button
                onClick={() => {
                  onClose();
                  onNavigateBlog?.(project.id);
                }}
                className="w-full btn-metallic-dark text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                En savoir plus <BookOpen size={16} />
              </button>
              <a
                href={`#${SectionId.CONTACT}`}
                onClick={onClose}
                className="w-full btn-metallic-dark text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                Démarrer mon projet <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        </div>{/* fin contenu scrollable */}
      </div>
    </div>
  );
};
