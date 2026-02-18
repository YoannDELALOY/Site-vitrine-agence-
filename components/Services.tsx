import React, { useState, useRef } from 'react';
import { Layout, Cpu, Database, BarChart3, Bot, Lock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';

export interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'sites-web',
    icon: <Layout size={24} />,
    title: "Sites Web Vivants",
    description: "Plus qu'une vitrine, un espace d'accueil numérique. Nous créons des sites qui captent l'essence de votre activité locale avec élégance.",
    delay: "0s",
    fullDescription: "Un site web n'est pas qu'une carte de visite numérique. C'est votre premier commercial, disponible 24h/24 et 7j/7. Nous concevons des sites performants, élégants et optimisés pour convertir vos visiteurs en clients.",
    benefits: [
      "Design sur mesure reflétant votre identité",
      "Optimisé pour le SEO local (Google Maps, search)",
      "Mobile-first et ultra-rapide",
      "Système de réservation ou de contact intégré",
      "Tableau de bord pour gérer votre contenu"
    ],
    useCases: ["Artisans & commerçants", "Restaurants & hôtels", "Professions libérales", "PME locales"]
  },
  {
    id: 'ia-compagnon',
    icon: <Bot size={24} />,
    title: "IA Compagnon",
    description: "Un assistant virtuel formé pour comprendre vos clients. Il répond, guide et rassure 24/7, comme un membre de votre équipe.",
    delay: "0.1s",
    fullDescription: "L'intelligence artificielle n'est plus réservée aux grandes entreprises. Nous intégrons des assistants IA personnalisés à votre activité : chatbot pour votre site, assistant vocal pour votre accueil, ou outil de rédaction automatique.",
    benefits: [
      "Réponse aux questions clients 24/7 sans intervention",
      "Qualification automatique des prospects",
      "Traitement des demandes simples en autonomie",
      "Apprentissage continu sur votre secteur",
      "Intégration transparente sur votre site existant"
    ],
    useCases: ["Service client", "Prise de rendez-vous", "FAQ automatisée", "Support technique de premier niveau"]
  },
  {
    id: 'automatisation',
    icon: <Cpu size={24} />,
    title: "Automatisation Sereine",
    description: "Libérez-vous des tâches répétitives. De la facture au rappel client, laissez la technologie gérer l'intendance.",
    delay: "0.2s",
    fullDescription: "Chaque heure passée sur des tâches répétitives est une heure volée à votre cœur de métier. Nous automatisons vos processus administratifs, commerciaux et opérationnels pour vous redonner du temps.",
    benefits: [
      "Automatisation des relances et rappels clients",
      "Génération automatique de devis et factures",
      "Synchronisation entre vos outils existants",
      "Transcription et résumé de réunions/AG",
      "Alertes et rapports automatiques"
    ],
    useCases: ["Gestion administrative", "Processus RH", "Suivi de chantier", "Reporting automatique"]
  },
  {
    id: 'outils-metiers',
    icon: <Database size={24} />,
    title: "Outils Métiers",
    description: "BTP, Commerce, Artisanat : nous forgeons des logiciels sur-mesure qui s'adaptent à vos mains, pas l'inverse.",
    delay: "0.3s",
    fullDescription: "Les logiciels génériques ne sont pas faits pour votre métier spécifique. Nous développons des applications sur mesure qui correspondent exactement à vos processus, avec l'interface que vous méritez.",
    benefits: [
      "Application entièrement personnalisée à votre activité",
      "Interface intuitive, sans formation nécessaire",
      "Gestion des stocks, plannings, interventions",
      "Accessible depuis n'importe quel appareil",
      "Évolutif selon vos besoins futurs"
    ],
    useCases: ["Gestion de chantiers BTP", "Suivi de clientèle", "Planning artisanal", "Stock et commandes"]
  },
  {
    id: 'strategie',
    icon: <BarChart3 size={24} />,
    title: "Clarté Stratégique",
    description: "Audit de vos outils actuels. Nous transformons le jargon technique en plan d'action clair et rentable.",
    delay: "0.4s",
    fullDescription: "Avant d'investir, comprenez où vous en êtes. Notre audit digital analyse vos outils, votre présence en ligne et vos processus pour identifier les quick wins et les priorités d'investissement.",
    benefits: [
      "Audit complet de votre présence digitale",
      "Analyse de vos concurrents locaux",
      "Plan d'action priorisé et budgétisé",
      "Recommandations actionnables sans jargon",
      "Accompagnement dans la mise en œuvre"
    ],
    useCases: ["Audit de présence web", "Stratégie SEO locale", "Optimisation des outils", "Plan de transformation digitale"]
  },
  {
    id: 'securite',
    icon: <Lock size={24} />,
    title: "Gardien de Données",
    description: "Vos données sont votre patrimoine. Nous bâtissons des forteresses numériques conformes et sécurisées.",
    delay: "0.5s",
    fullDescription: "La cybersécurité n'est pas une option — c'est une nécessité légale et éthique. Nous mettons en place des architectures sécurisées, conformes au RGPD, et vous formons aux bonnes pratiques.",
    benefits: [
      "Mise en conformité RGPD complète",
      "Sauvegarde automatisée de vos données",
      "Protection contre les cyberattaques",
      "Politique de mots de passe et d'accès",
      "Audit de sécurité et rapport détaillé"
    ],
    useCases: ["Conformité RGPD", "Protection des données clients", "Sécurisation des mots de passe", "Backup et récupération"]
  }
];

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => (
  <div
    className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer"
    onClick={() => onClick(service)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick(service)}
  >
    {/* Barre dorée au survol */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-paper to-white shadow-inner flex items-center justify-center mb-6 text-charcoal group-hover:text-gold group-hover:scale-110 transition-all duration-300">
      {service.icon}
    </div>

    <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-metallic-gold transition-colors">
      {service.title}
    </h3>

    <p className="text-steel font-light leading-relaxed group-hover:text-charcoal/80 transition-colors text-sm mb-6">
      {service.description}
    </p>

    <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-metallic-gold-inline">En savoir plus</span>
      <ArrowRight size={14} className="text-gold" />
    </div>
  </div>
);

interface ServicesProps {
  onOpenService?: (service: ServiceData) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenService }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const prev = () => setCurrent((c) => (c - 1 + servicesData.length) % servicesData.length);
  const next = () => setCurrent((c) => (c + 1) % servicesData.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  const handleClick = (service: ServiceData) => {
    onOpenService?.(service);
  };

  return (
    <section
      id={SectionId.SERVICES}
      className="py-24 relative overflow-hidden"
    >
      {/* Blobs identiques au Hero — continuité visuelle */}
       {/* Background Blobs Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[+10%] left-[+85%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[+10%] right-[+85%] w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[+10%] left-[+85%] w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block animate-fade-in">
            Expertise & Humanité
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-metallic-navy mb-6 animate-slide-up">
            La technologie au service de{' '}
            <br className="hidden md:block" />
            <span className="italic relative inline-block text-metallic-gold">
              l'humain
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-steel text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Nous fusionnons la puissance de l'IA et la rigueur du développement web pour offrir aux entreprises du Val de Loire des outils qui ont du sens.
          </p>
        </div>

        {/* Desktop : grille 3 colonnes */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={handleClick} />
          ))}
        </div>

        {/* Mobile : une carte visible + swipe */}
        <div className="md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {servicesData.map((service) => (
                <div key={service.id} className="w-full shrink-0 px-1">
                  <ServiceCard service={service} onClick={handleClick} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation mobile — flèches masquées, dots uniquement */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="hidden md:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {servicesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-gray-300'}`}
                  aria-label={`Expertise ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="hidden md:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="text-center text-xs text-steel mt-3 italic">Glissez pour naviguer</p>
        </div>
      </div>
    </section>
  );
};
