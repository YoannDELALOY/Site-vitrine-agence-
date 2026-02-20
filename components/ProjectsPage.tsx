import React from 'react';
import { ArrowRight, Quote, BookOpen, Globe, Cpu, Megaphone, Brain, GraduationCap, BarChart3, ExternalLink } from 'lucide-react';
import starImg from '../Media/etoiletrnsparante.png';
import { projectsData, ProjectData, ExpertiseCategory } from '../data/projects';
import { projectsTestimonials } from '../data/testimonials';

interface ProjectsPageProps {
  onOpenProject?: (project: ProjectData) => void;
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
  onNavigateExpertise?: (expertiseId: ExpertiseCategory) => void;
}

// Configuration des 6 sections expertise
interface ExpertiseSection {
  id: ExpertiseCategory;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
}

const expertiseSections: ExpertiseSection[] = [
  {
    id: 'web-apps-saas',
    title: 'Développement Web Apps & SaaS',
    subtitle: 'Sites vitrine, applications métiers, marketplaces, portfolios',
    icon: <Globe size={20} />,
    accentColor: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: 'automatisation-n8n',
    title: 'Automatisation & Orchestration n8n',
    subtitle: 'Workflows, RDV automatiques, intégrations, réduction du travail manuel',
    icon: <Cpu size={20} />,
    accentColor: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: 'contenu-marketing-ia',
    title: 'Création de Contenu & Marketing IA',
    subtitle: 'Portfolios créatifs, newsletters, billetterie, présence digitale',
    icon: <Megaphone size={20} />,
    accentColor: 'from-rose-500/20 to-rose-600/10',
  },
  {
    id: 'ia-agents-rag',
    title: 'Intelligence Artificielle & Agents RAG',
    subtitle: 'Chatbots IA, transcription automatique, assistants intelligents',
    icon: <Brain size={20} />,
    accentColor: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    id: 'conseil-formation',
    title: 'Conseil & Formation',
    subtitle: 'Stratégie SEO, audit digital, accompagnement transformation, formation équipes',
    icon: <GraduationCap size={20} />,
    accentColor: 'from-amber-500/20 to-amber-600/10',
  },
  {
    id: 'pilotage-continu',
    title: 'Pilotage Continu',
    subtitle: 'Suivi mensuel KPIs, optimisation permanente, retainer digital',
    icon: <BarChart3 size={20} />,
    accentColor: 'from-teal-500/20 to-teal-600/10',
  },
];

export interface ProjectCardPageProps {
  project: ProjectData;
  onNavigate: (projectId: string) => void;
}

export const ProjectCardPage: React.FC<ProjectCardPageProps> = ({ project, onNavigate }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px',
        backgroundBlendMode: 'overlay',
        borderLeft: '3px solid #D4AF37',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 24px 0 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
      onClick={() => onNavigate(project.id)}
    >
      <div
        className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }}
      ></div>

      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
          <BookOpen size={16} />
        </div>

        <div className="text-xs font-medium text-metallic-gold-inline mb-1 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="font-serif text-lg font-bold mb-2 text-metallic-silver group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

// Carte CTA "Voir toutes les réalisations" pour une section
interface ExpertiseCTACardProps {
  section: ExpertiseSection;
  onNavigate?: (expertiseId: ExpertiseCategory) => void;
}

const ExpertiseCTACard: React.FC<ExpertiseCTACardProps> = ({ section, onNavigate }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center p-8 min-h-[320px]"
      style={{
        background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)',
        border: '1px dashed rgba(212,175,55,0.4)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}
      onClick={() => onNavigate?.(section.id)}
    >
      <div className={`p-4 rounded-2xl bg-gradient-to-br ${section.accentColor} border border-white/20 text-gold mb-5 transition-transform duration-300 group-hover:scale-110`}>
        {section.icon}
      </div>
      <h3 className="font-serif text-lg font-bold text-metallic-gold mb-3 leading-tight">
        Voir toutes nos réalisations
      </h3>
      <p className="text-steel text-sm mb-6 leading-relaxed max-w-[200px]">
        {section.title}
      </p>
      <div className="inline-flex items-center gap-2 px-5 py-2.5 btn-metallic-gold text-charcoal rounded-full text-sm font-semibold shadow-lg transition-all group-hover:shadow-xl">
        Découvrir <ArrowRight size={15} />
      </div>
    </div>
  );
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject, onNavigateBlogArticle, onGoToContact, onNavigateExpertise }) => {

  const handleCardClick = (projectId: string) => {
    if (onNavigateBlogArticle) {
      onNavigateBlogArticle(projectId);
    } else if (onOpenProject) {
      const project = projectsData.find((p) => p.id === projectId);
      if (project) onOpenProject(project);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Portfolio & Références
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Nos{' '}
            <span className="text-metallic-gold">Réalisations</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Des projets concrets, des résultats mesurables. Classés par expertise pour vous aider à trouver le projet le plus proche de votre besoin.
          </p>
        </div>

        {/* Sections par expertise */}
        {expertiseSections.map((section) => {
          const sectionProjects = projectsData
            .filter((p) => p.expertise === section.id)
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 5);
          if (sectionProjects.length === 0) return null;

          return (
            <div key={section.id} className="mb-24">
              {/* En-tête section */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${section.accentColor} border border-white/20 text-gold`}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-metallic-navy">
                    {section.title}
                  </h2>
                  <p className="text-steel text-sm">{section.subtitle}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent ml-4"></div>
              </div>

              {/* Grille 3 colonnes, 2 rangées max (5 cartes + 1 carte CTA) */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectionProjects.map((project) => (
                  <ProjectCardPage key={project.id} project={project} onNavigate={handleCardClick} />
                ))}
                <ExpertiseCTACard section={section} onNavigate={onNavigateExpertise} />
              </div>
            </div>
          );
        })}

        {/* Section Témoignages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
              Témoignages
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-4">
              Ils témoignent de{' '}
              <span className="text-metallic-gold underline decoration-gold/30 underline-offset-4">leurs résultats</span>
            </h2>
            <p className="text-steel">Des chiffres réels, des transformations concrètes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsTestimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col relative group cursor-pointer hover:border-gold/30 transition-colors"
                onClick={() => handleCardClick(t.projectId)}
                title={`Voir le projet ${t.company}`}
              >
                <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/25 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>

                {/* Indicateur cliquable */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} className="text-gold" />
                </div>

                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <img key={idx} src={starImg} alt="★" className="w-5 h-5 object-contain drop-shadow-sm" />
                  ))}
                </div>

                <p className="text-charcoal/80 italic mb-8 flex-grow leading-relaxed relative z-10 text-base">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-charcoal">{t.name}</div>
                    <div className="text-xs text-metallic-gold-inline uppercase tracking-wide font-medium">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
