import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Globe, Cpu, Megaphone, Brain, GraduationCap, BarChart3, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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

// ─── Carte témoignage ───────────────────────────────────────────────────────
const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="glass-card p-8 rounded-2xl flex flex-col relative h-full">
    <div className="absolute top-6 right-8 text-gold/10">
      <Quote size={40} fill="currentColor" />
    </div>
    <div className="flex gap-0.5 mb-6">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={starImg} alt="★" className="w-5 h-5 object-contain drop-shadow-sm" />
      ))}
    </div>
    <p className="text-charcoal/80 italic mb-8 flex-grow leading-relaxed text-base relative z-10">
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
);

// ─── Slider témoignages ─────────────────────────────────────────────────────
const TestimonialsSlider: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, total]);

  if (total === 0) return null;

  // Afficher jusqu'à 3 cartes en vue (centrée sur current)
  const visible = total === 1
    ? [testimonials[0]]
    : total === 2
    ? testimonials
    : [
        testimonials[current % total],
        testimonials[(current + 1) % total],
        testimonials[(current + 2) % total],
      ].slice(0, Math.min(3, total));

  return (
    <div className="relative">
      {/* Grille des cartes visibles */}
      <div className={`grid gap-6 ${visible.length === 1 ? 'md:grid-cols-1 max-w-xl mx-auto' : visible.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {visible.map((t, i) => (
          <TestimonialCard key={`${t.projectId}-${i}`} t={t} />
        ))}
      </div>

      {/* Navigation */}
      {total > 3 && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full btn-metallic-dark flex items-center justify-center shadow-lg"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-gold w-6' : 'bg-gold/30'}`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full btn-metallic-dark flex items-center justify-center shadow-lg"
            aria-label="Suivant"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

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

      {/* Sections alternées par projet */}
      {projects.length > 0 ? (
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              index={index}
              onNavigate={handleCardClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-steel max-w-7xl mx-auto px-6">
          <p className="text-lg">Aucun projet dans cette catégorie pour le moment.</p>
        </div>
      )}

      {/* Section témoignages */}
      {testimonials.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-20">
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
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      )}

      {/* CTA contact */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
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
