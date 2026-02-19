import React from 'react';
import { Linkedin, Github, Instagram, Facebook, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { SectionId } from '../types';
import { servicesData, ServiceData } from './Services';

interface FooterProps {
  onShowLegal?: (page: 'mentions' | 'privacy') => void;
  onNavigateService?: (service: ServiceData) => void;
}

const socialLinks = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoann-delaloy/'
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    href: 'https://github.com/YoannDELALOY'
  },
  {
    icon: <Instagram size={18} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/yoanndelaloy/'
  },
  {
    icon: <Facebook size={18} />,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100067966427089&locale=fr_FR'
  }
];

export const Footer: React.FC<FooterProps> = ({ onShowLegal, onNavigateService }) => {
  return (
    <footer className="bg-charcoal text-white border-t border-white/5">

      {/* Footer principal — 2 colonnes sur mobile, 3 sur desktop */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

        {/* Colonne 1 — Logo & tagline */}
        <div className="col-span-2 lg:col-span-1">
          <div className="inline-block bg-white/10 rounded-xl p-2 mb-4">
            <img
              src="/logos/Design sans titre (84).png"
              alt="Maison Siranno - L'art du web"
              className="h-12 object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            Agence digitale à Châteauneuf-sur-Loire.<br />
            Création de sites web, IA et automatisation<br />
            pour PME et artisans du Val de Loire.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="p-2 bg-white/5 rounded-full hover-bg-metallic transition-all border border-white/10"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
            {/* Malt */}
            <a
              href="https://www.malt.fr/profile/yoanndelaloy"
              target="_blank"
              rel="noopener noreferrer"
              title="Malt"
              className="p-2 bg-white/5 rounded-full hover-bg-metallic transition-all border border-white/10"
              aria-label="Malt"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Colonne 2 — Expertises (cliquables) */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">Expertises</h4>
          <ul className="space-y-3">
            {servicesData.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => onNavigateService?.(service)}
                  className="text-gray-400 hover-metallic-gold transition-all text-sm text-left"
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>1 rue Auguste Grivot<br />Châteauneuf-sur-Loire, 45110<br />Loiret, France</span>
            </li>
            <li>
              <a
                href="mailto:contact@yoanndelaloy.com"
                className="flex items-center gap-3 text-gray-400 hover-metallic-gold transition-all text-sm"
              >
                <Mail size={16} className="text-gold shrink-0" />
                contact@yoanndelaloy.com
              </a>
            </li>
            <li>
              <a
                href="tel:+33647344364"
                className="flex items-center gap-3 text-gray-400 hover-metallic-gold transition-all text-sm font-medium"
              >
                <Phone size={16} className="text-gold shrink-0" />
                06 47 34 43 64
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barre de bas de page */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Yoann Delaloy — Maison Siranno. Tous droits réservés.</p>

          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <button
              onClick={() => onShowLegal?.('mentions')}
              className="hover:text-gold transition-colors"
            >
              Mentions légales
            </button>
            <button
              onClick={() => onShowLegal?.('privacy')}
              className="hover:text-gold transition-colors"
            >
              Politique de confidentialité
            </button>
            <a
              href="https://yoanndelaloy.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              Portfolio <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
