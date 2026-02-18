import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  fullDescription: string;
  challenges: string[];
  results: string[];
  url?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Site Vitrine & Identité Numérique",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Création complète de la présence numérique pour une entreprise de rénovation spécialisée en carrelage, maçonnerie, couverture et charpente.",
    tags: ["Site Vitrine", "SEO Local", "Identité Visuelle", "Google My Business"],
    client: "Julien Delaloy",
    year: "2024",
    fullDescription: "JD Rénovation est une entreprise du bâtiment fondée par Julien Delaloy, spécialisée dans la rénovation complète : carrelage, maçonnerie, couverture et charpente. Avant notre intervention, l'entreprise n'avait aucune présence numérique et dépendait uniquement du bouche-à-oreille. Nous avons créé de A à Z son identité digitale.",
    challenges: [
      "Partir de zéro : aucune présence web ni réseaux sociaux",
      "Secteur très concurrentiel localement",
      "Client non familiarisé avec le numérique",
      "Budget adapté à une petite entreprise artisanale"
    ],
    results: [
      "Site vitrine moderne, mobile-first, avec galerie de réalisations",
      "Référencement local optimisé (Google My Business, SEO on-page)",
      "Formulaire de contact avec qualification automatique des demandes",
      "Identité visuelle cohérente (logo, couleurs, typographie)",
      "+60% de demandes de devis dès le 2ème mois"
    ]
  },
  {
    id: 'si-griveaux',
    title: "SI Griveaux",
    category: "Automatisation & IA",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    description: "Système d'automatisation complet pour la transcription et le résumé d'assemblées générales, éliminant plusieurs heures de travail manuel.",
    tags: ["Automatisation", "IA", "Transcription", "Workflow"],
    client: "Sylvie Bidoux",
    year: "2024",
    fullDescription: "SI Griveaux est une structure gérée par Sylvie Bidoux. L'organisation tenait régulièrement des assemblées générales dont la retranscription et le résumé nécessitaient plusieurs heures de travail manuel, avec des risques d'erreurs et une perte de temps considérable. Nous avons automatisé l'intégralité de ce processus grâce à l'IA.",
    challenges: [
      "Processus manuel très chronophage (4-6h par AG)",
      "Risques d'erreurs dans les retranscriptions manuelles",
      "Nécessité d'une solution fiable et simple à utiliser",
      "Intégration avec les outils existants de l'organisation"
    ],
    results: [
      "Transcription automatique des enregistrements audio/vidéo d'AG",
      "Résumé intelligent structuré par points, décisions et actions",
      "Réduction du temps de traitement de 4h à 15 minutes",
      "Archivage automatique et indexation pour recherche ultérieure",
      "Interface simple accessible à toute l'équipe"
    ]
  },
  {
    id: 'atelier-martin',
    title: "Atelier Martin",
    category: "Site Vitrine & E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète pour un artisan ébéniste local. Catalogue interactif et prise de RDV automatisée.",
    tags: ["Next.js", "Design UI/UX", "Automatisation", "Catalogue"],
    client: "Jean Martin",
    year: "2023",
    fullDescription: "L'Atelier Martin est tenu par Jean Martin, artisan ébéniste passionné dont le savoir-faire exceptionnel méritait une vitrine numérique à la hauteur. La refonte complète du site a mis en valeur ses créations uniques et automatisé la prise de rendez-vous.",
    challenges: [
      "Mettre en valeur des œuvres d'artisanat de haute qualité",
      "Permettre la personnalisation des commandes en ligne",
      "Gestion des demandes de devis volumineuses"
    ],
    results: [
      "Catalogue interactif avec filtres par matière et style",
      "Système de prise de RDV en ligne intégré",
      "Galerie photo professionnelle optimisée",
      "Doublement des demandes de devis en 3 mois"
    ]
  },
  {
    id: 'bati-loire',
    title: "Bâti-Loire Connect",
    category: "Application Métier / Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Plateforme de gestion de chantiers pour une PME du BTP. Suivi des équipes, stocks et facturation en temps réel.",
    tags: ["React", "Dashboard", "SaaS", "BTP"],
    client: "Bâti-Loire PME",
    year: "2023",
    fullDescription: "Bâti-Loire avait besoin d'un outil pour centraliser la gestion de ses chantiers, ses équipes et sa facturation. Nous avons développé un dashboard métier sur mesure, accessible depuis le bureau comme sur le terrain.",
    challenges: [
      "Centraliser des données éparpillées dans Excel et emails",
      "Accessible et utilisable sur mobile depuis les chantiers",
      "Intégration avec les outils comptables existants"
    ],
    results: [
      "Tableau de bord temps réel de l'avancement des chantiers",
      "Gestion des équipes et des plannings intégrée",
      "Génération automatique de factures et devis",
      "Gain de 10h/semaine sur l'administration"
    ]
  },
  {
    id: 'loire-valley',
    title: "Loire Valley Taste",
    category: "Marketplace Locale",
    image: "https://images.unsplash.com/photo-1472851294608-4155f2118c03?auto=format&fit=crop&q=80&w=800",
    description: "Marketplace regroupant les producteurs de Châteauneuf. Système de Click & Collect intelligent.",
    tags: ["E-commerce", "Stripe", "Mobile First", "Marketplace"],
    client: "Collectif Producteurs",
    year: "2023",
    fullDescription: "Un collectif de producteurs locaux de la région de Châteauneuf-sur-Loire souhaitait créer une plateforme commune pour vendre leurs produits en ligne avec système de Click & Collect.",
    challenges: [
      "Gérer plusieurs vendeurs avec des stocks différents",
      "Système de paiement multi-vendeurs (Stripe Connect)",
      "Logistique des créneaux de retrait"
    ],
    results: [
      "Marketplace avec 12 producteurs locaux",
      "Système Click & Collect avec créneaux réservables",
      "Paiement sécurisé et répartition automatique des revenus",
      "+200 commandes dès le premier mois de lancement"
    ]
  }
];

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-xl cursor-pointer flex-shrink-0 snap-start"
    style={{
      width: 'min(85vw, 300px)',
      minWidth: 'min(85vw, 300px)',
      background: '#0D1B2A',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}
    onClick={() => onClick(project)}
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div className="p-6 relative">
      <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
        <ExternalLink size={16} />
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

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface ProjectsProps {
  onOpenProject?: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollLeft = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const scrollRight = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      const el = scrollRef.current;
      if (el) el.scrollBy({ left: delta > 0 ? 260 : -260, behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -right-20 top-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center md:text-left mb-12">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
            Nos Réalisations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            L'Excellence en{' '}
            <span className="text-metallic-gold">Action</span>
          </h2>
        </div>

        {/* Carrousel scroll-based */}
        <div className="relative">
          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à gauche"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à droite"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Conteneur scroll natif */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-4 sm:px-0 justify-start"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => onOpenProject?.(p)}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-3 italic md:hidden">
          Glissez pour voir tous les projets
        </p>
      </div>
    </section>
  );
};
