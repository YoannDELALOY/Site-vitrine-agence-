import React from 'react';
import { ArrowLeft, ArrowRight, Globe, Cpu, Megaphone, Brain, GraduationCap, BarChart3 } from 'lucide-react';
import { projectsData, ExpertiseCategory } from '../data/projects';
import { ProjectCardPage } from './ProjectsPage';

interface ExpertiseProjectsPageProps {
  expertiseId: ExpertiseCategory;
  onBack: () => void;
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
}

interface ExpertiseMeta {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
}

const expertiseMeta: Record<ExpertiseCategory, ExpertiseMeta> = {
  'web-apps-saas': {
    title: 'Développement Web Apps & SaaS',
    subtitle: 'Sites vitrine, applications métiers, marketplaces, portfolios',
    icon: <Globe size={24} />,
    accentColor: 'from-blue-500/20 to-blue-600/10',
  },
  'automatisation-n8n': {
    title: 'Automatisation & Orchestration n8n',
    subtitle: 'Workflows, RDV automatiques, intégrations, réduction du travail manuel',
    icon: <Cpu size={24} />,
    accentColor: 'from-purple-500/20 to-purple-600/10',
  },
  'contenu-marketing-ia': {
    title: 'Création de Contenu & Marketing IA',
    subtitle: 'Portfolios créatifs, newsletters, billetterie, présence digitale',
    icon: <Megaphone size={24} />,
    accentColor: 'from-rose-500/20 to-rose-600/10',
  },
  'ia-agents-rag': {
    title: 'Intelligence Artificielle & Agents RAG',
    subtitle: 'Chatbots IA, transcription automatique, assistants intelligents',
    icon: <Brain size={24} />,
    accentColor: 'from-emerald-500/20 to-emerald-600/10',
  },
  'conseil-formation': {
    title: 'Conseil & Formation',
    subtitle: 'Stratégie SEO, audit digital, accompagnement transformation, formation équipes',
    icon: <GraduationCap size={24} />,
    accentColor: 'from-amber-500/20 to-amber-600/10',
  },
  'pilotage-continu': {
    title: 'Pilotage Continu',
    subtitle: 'Suivi mensuel KPIs, optimisation permanente, retainer digital',
    icon: <BarChart3 size={24} />,
    accentColor: 'from-teal-500/20 to-teal-600/10',
  },
};

export const ExpertiseProjectsPage: React.FC<ExpertiseProjectsPageProps> = ({
  expertiseId,
  onBack,
  onNavigateBlogArticle,
  onGoToContact,
}) => {
  const meta = expertiseMeta[expertiseId];

  const projects = projectsData
    .filter((p) => p.expertise === expertiseId || p.expertises?.includes(expertiseId))
    .sort((a, b) => b.date.localeCompare(a.date));

  const handleCardClick = (projectId: string) => {
    onNavigateBlogArticle?.(projectId);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors mb-10 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Retour aux réalisations
        </button>

        {/* En-tête */}
        <div className="flex items-start gap-6 mb-14">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${meta.accentColor} border border-white/20 text-gold shrink-0`}>
            {meta.icon}
          </div>
          <div className="flex-1">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
              Réalisations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3 text-metallic-navy">
              {meta.title}
            </h1>
            <p className="text-steel text-lg">{meta.subtitle}</p>
          </div>
        </div>

        {/* Compteur */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></div>
          <span className="text-steel text-sm font-medium">
            {projects.length} réalisation{projects.length > 1 ? 's' : ''}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent"></div>
        </div>

        {/* Grille de projets */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <ProjectCardPage key={project.id} project={project} onNavigate={handleCardClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-steel">
            <p className="text-lg">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}

        {/* CTA contact */}
        <div className="cta-leather glass-panel rounded-3xl p-12 border border-gold/20 relative text-center">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-4">
              Votre projet, notre prochaine réalisation
            </h2>
            <p className="text-steel text-lg mb-8 max-w-xl mx-auto">
              Rejoignez les entreprises qui ont fait confiance à Maison Siranno pour leur transformation digitale.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-dark rounded-full font-semibold shadow-xl text-white"
            >
              Lancer mon projet <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
