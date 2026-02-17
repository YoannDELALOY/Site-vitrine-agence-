import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Atelier Martin",
    category: "Site Vitrine & E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète pour un artisan ébéniste local. Intégration d'un catalogue interactif et prise de RDV automatisée.",
    tags: ["Next.js", "Design UI/UX", "Automatisation"]
  },
  {
    title: "Bâti-Loire Connect",
    category: "App Métier / Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Plateforme de gestion de chantiers pour une PME du BTP. Suivi des équipes, stocks et facturation en temps réel.",
    tags: ["React", "Dashboard", "SaaS"]
  },
  {
    title: "Loire Valley Taste",
    category: "Marketplace Locale",
    image: "https://images.unsplash.com/photo-1472851294608-4155f2118c03?auto=format&fit=crop&q=80&w=800",
    description: "Marketplace regroupant les producteurs de Châteauneuf. Système de Click & Collect intelligent.",
    tags: ["E-commerce", "Stripe", "Mobile First"]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="absolute -right-20 top-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-2 block">
              Nos Réalisations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              L'Excellence en <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Action</span>
            </h2>
          </div>
          <a href={`#${SectionId.CONTACT}`} className="group flex items-center gap-2 text-silver hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1">
            Voir tous les projets <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden bg-obsidian border border-white/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 shadow-xl">
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 <div className="absolute top-0 right-8 -translate-y-1/2 bg-gold text-charcoal p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-[-50%] transition-all duration-300 shadow-lg z-20">
                    <ExternalLink size={20} />
                 </div>

                <div className="text-xs font-medium text-gold mb-2 uppercase tracking-wider">
                    {project.category}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};