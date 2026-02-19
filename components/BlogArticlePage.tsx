import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, ExternalLink, Tag, User, Calendar, BookOpen } from 'lucide-react';
import { ProjectData } from './Projects';

interface BlogArticlePageProps {
  project: ProjectData | null;
  onBack: () => void;
  onGoToContact: () => void;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ project, onBack, onGoToContact }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>

        {/* Bouton retour */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/20 transition-all border border-white/20"
          >
            <ArrowLeft size={16} />
            Retour aux réalisations
          </button>
        </div>

        {/* Infos en bas */}
        <div className="absolute bottom-8 left-6 right-6 z-10">
          <span className="text-xs font-medium text-metallic-gold-inline uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {project.client}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.year}
            </span>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-full text-xs border border-white/20">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corps de l'article */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Description complète */}
        <div>
          <p className="text-charcoal/80 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Les défis */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl p-8">
          <h2 className="font-serif text-2xl font-bold text-metallic-navy mb-6 flex items-center gap-3">
            <AlertCircle size={22} className="text-gold" />
            Les défis
          </h2>
          <ul className="space-y-4">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-3 text-charcoal/70">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Les résultats */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl p-8">
          <h2 className="font-serif text-2xl font-bold text-metallic-navy mb-6 flex items-center gap-3">
            <CheckCircle2 size={22} className="text-safe-green" />
            Les résultats
          </h2>
          <ul className="space-y-4">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-safe-green mt-0.5 shrink-0" />
                <span className="text-charcoal/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="cta-leather text-white rounded-3xl p-10 relative overflow-hidden text-center"
          style={{
            backgroundColor: '#0F172A',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '600px 600px',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="relative z-10">
            <BookOpen size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-2 text-white">
              Un projet similaire ?
            </h2>
            <p className="text-gray-400 mb-8">
              Discutons de vos besoins. La première consultation est gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-metallic-gold rounded-full font-semibold"
                >
                  Voir le site <ExternalLink size={16} />
                </a>
              )}
              <button
                onClick={onGoToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 btn-metallic-dark text-white rounded-full font-semibold shadow-xl"
              >
                Démarrer un projet similaire <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
