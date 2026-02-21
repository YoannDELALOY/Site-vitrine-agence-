import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Globe, Cpu, Megaphone, Brain, GraduationCap, BarChart3, Quote } from 'lucide-react';
import starImg from '../Media/etoiletrnsparante.png';
import { projectsData, ProjectData, ExpertiseCategory } from '../data/projects';
import { allTestimonials, Testimonial } from '../data/testimonials';

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

// ─── Témoignage bridge (prolongement de la section projet) ──────────────────
const TestimonialBridge: React.FC<{ t: Testimonial; prevIsEven: boolean }> = ({ t, prevIsEven }) => (
  <div
    className="border-b border-gold/15"
    style={
      prevIsEven
        ? { backgroundColor: 'rgba(30, 58, 95, 0.07)' }
        : {
            backgroundColor: '#0A1120',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
            backgroundSize: '600px 600px',
            backgroundBlendMode: 'overlay',
          }
    }
  >
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Layout : identité à gauche si section paire (texte à gauche), à droite si impaire */}
      <div
        className={`flex gap-5 items-center ${prevIsEven ? 'flex-row-reverse pr-5' : 'pl-5'}`}
        style={prevIsEven
          ? { borderRight: '2px solid rgba(212,175,55,0.4)' }
          : { borderLeft: '2px solid rgba(212,175,55,0.4)' }
        }
      >
        {/* Icône quote */}
        <Quote
          size={20}
          fill="currentColor"
          className="shrink-0"
          style={{ color: 'rgba(212,175,55,0.5)' }}
        />

        {/* Citation */}
        <p className={`font-serif text-base italic leading-snug flex-1 ${prevIsEven ? 'text-charcoal/80' : 'text-gray-300'}`}>
          "{t.content}"
        </p>

        {/* Séparateur vertical */}
        <div className="hidden sm:block w-px h-8 bg-gold/20 shrink-0" />

        {/* Identité */}
        <div className={`hidden sm:flex items-center gap-3 shrink-0 ${prevIsEven ? 'flex-row-reverse' : ''}`}>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/30 shrink-0">
            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <div className={prevIsEven ? 'text-right' : ''}>
            <div className={`font-serif font-bold text-xs ${prevIsEven ? 'text-charcoal' : 'text-white'}`}>{t.name}</div>
            <div className="text-xs text-metallic-gold-inline font-medium">{t.role}, {t.company}</div>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starImg} alt="★" className="w-3 h-3 object-contain" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile : identité sous la citation */}
      <div className={`sm:hidden flex items-center gap-2 mt-3 ${prevIsEven ? 'pr-10 flex-row-reverse' : 'pl-10'}`}>
        <div className="w-7 h-7 rounded-full overflow-hidden border border-gold/30 shrink-0">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <span className={`font-serif font-bold text-xs ${prevIsEven ? 'text-charcoal' : 'text-white'}`}>{t.name}</span>
        <span className={`text-xs ${prevIsEven ? 'text-charcoal/30' : 'text-white/20'}`}>·</span>
        <span className="text-xs text-metallic-gold-inline font-medium">{t.role}</span>
        <div className="flex gap-0.5 ml-auto">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starImg} alt="★" className="w-3 h-3 object-contain" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Section projet (alternée) ───────────────────────────────────────────────
interface ProjectSectionProps {
  project: ProjectData;
  index: number;
  onNavigate: (id: string) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index, onNavigate }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className="py-20 group relative"
      style={
        isEven
          ? { backgroundColor: 'rgba(30, 58, 95, 0.04)' }
          : {
              backgroundColor: '#0F172A',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
              backgroundSize: '600px 600px',
              backgroundBlendMode: 'overlay',
              boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.12), inset 0 -1px 0 rgba(212,175,55,0.08)',
            }
      }
    >
      {/* Barre gold sweep */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#B68D40]/80 via-[#F4E095] to-[#B68D40]/80 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
        style={{ boxShadow: '0 0 12px rgba(212,175,55,0.6)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Badge catégorie */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-metallic-gold-inline border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className={`space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm">
              {project.year}
            </span>

            <h2 className={`font-serif text-3xl md:text-4xl font-bold leading-tight ${isEven ? 'text-metallic-navy' : 'text-white'}`}>
              {project.title}
            </h2>

            <p className={`text-lg leading-relaxed ${isEven ? 'text-steel' : 'text-gray-300'}`}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${isEven ? 'bg-gold/10 text-charcoal border border-gold/20' : 'bg-white/5 text-gray-300 border border-white/10'}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Résultats clés */}
            {project.results.slice(0, 3).map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className={`text-sm ${isEven ? 'text-charcoal/80' : 'text-gray-300'}`}>{r}</span>
              </div>
            ))}

            <button
              onClick={() => onNavigate(project.id)}
              className="inline-flex items-center gap-2 px-6 py-3 btn-metallic-dark text-white rounded-full font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Lire l'étude de cas <BookOpen size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── Page principale ─────────────────────────────────────────────────────────
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

  const projectIds = new Set(projects.map((p) => p.id));
  const testimonials = allTestimonials.filter((t) => projectIds.has(t.projectId));

  const handleCardClick = (projectId: string) => {
    onNavigateBlogArticle?.(projectId);
  };

  return (
    <div className="min-h-screen">

      {/* En-tête */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors mb-10 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Retour aux réalisations
        </button>

        <div className="flex items-start gap-6">
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
        <div className="flex items-center gap-3 mt-12">
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          <span className="text-steel text-sm font-medium">
            {projects.length} réalisation{projects.length > 1 ? 's' : ''}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
        </div>
      </div>

      {/* Sections alternées par projet + témoignages contextuels */}
      {projects.length > 0 ? (
        <div className="space-y-0">
          {projects.map((project, index) => {
            const linkedTestimonial = testimonials.find((t) => t.projectId === project.id);
            return (
              <React.Fragment key={project.id}>
                <ProjectSection project={project} index={index} onNavigate={handleCardClick} />
                {linkedTestimonial && (
                  <TestimonialBridge t={linkedTestimonial} prevIsEven={index % 2 === 0} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24 text-steel max-w-7xl mx-auto px-6">
          <p className="text-lg">Aucun projet dans cette catégorie pour le moment.</p>
        </div>
      )}

      {/* CTA contact */}
      <div className="max-w-7xl mx-auto px-6 py-24">
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
