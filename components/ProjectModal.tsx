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
      <div className="bg-paper rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/40 animate-slide-up">

        {/* Image Hero */}
        <div className="relative h-56 rounded-t-3xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white hover:text-charcoal transition-all text-white"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-medium text-gold uppercase tracking-widest block mb-1">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Meta infos */}
        <div className="px-8 py-4 border-b border-gray-100 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-steel">
            <User size={14} className="text-gold" />
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

          {/* Description */}
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
          <div className="pt-4 border-t border-gray-100">
            <p className="text-steel text-sm mb-4 text-center">
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
                Lire l'article de blog <BookOpen size={16} />
              </button>
              <a
                href={`#${SectionId.CONTACT}`}
                onClick={onClose}
                className="w-full border border-charcoal/20 text-charcoal font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:border-gold/50 hover:text-gold transition-all"
              >
                Démarrer mon projet <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
