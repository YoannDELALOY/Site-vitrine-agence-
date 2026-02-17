import React from 'react';
import { Layout, Cpu, Database, BarChart3, Bot, Lock } from 'lucide-react';
import { SectionId } from '../types';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
  <div 
    className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 ease-out hover:-translate-y-2 animate-slide-up"
    style={{ animationDelay: delay }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-paper to-white shadow-inner flex items-center justify-center mb-6 text-charcoal group-hover:text-gold group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    
    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
      {title}
    </h3>
    
    <p className="text-steel font-light leading-relaxed group-hover:text-charcoal/80 transition-colors">
      {description}
    </p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: "Sites Web Vivants",
      description: "Plus qu'une vitrine, un espace d'accueil numérique. Nous créons des sites qui captent l'essence de votre activité locale avec élégance.",
      delay: "0s"
    },
    {
      icon: <Bot size={24} />,
      title: "IA Compagnon",
      description: "Un assistant virtuel formé pour comprendre vos clients. Il répond, guide et rassure 24/7, comme un membre de votre équipe.",
      delay: "0.1s"
    },
    {
      icon: <Cpu size={24} />,
      title: "Automatisation Sereine",
      description: "Libérez-vous des tâches répétitives. De la facture au rappel client, laissez la technologie gérer l'intendance pour vous concentrer sur votre art.",
      delay: "0.2s"
    },
    {
      icon: <Database size={24} />,
      title: "Outils Métiers",
      description: "BTP, Commerce, Artisanat : nous forgeons des logiciels sur-mesure qui s'adaptent à vos mains, pas l'inverse.",
      delay: "0.3s"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Clarté Stratégique",
      description: "Audit de vos outils actuels. Nous transformons le jargon technique en plan d'action clair et rentable.",
      delay: "0.4s"
    },
    {
      icon: <Lock size={24} />,
      title: "Gardien de Données",
      description: "Vos données sont votre patrimoine. Nous bâtissons des forteresses numériques conformes et sécurisées.",
      delay: "0.5s"
    }
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white">
        {/* Warm ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-3 block animate-fade-in">
            Expertise & Humanité
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-slide-up">
            La technologie au service de <br/>
            <span className="italic relative inline-block">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};