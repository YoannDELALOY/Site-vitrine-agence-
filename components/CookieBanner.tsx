import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const COOKIE_KEY = 'maison-siranno-cookies';

interface CookieBannerProps {
  onNavigatePrivacy?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigatePrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'all');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(COOKIE_KEY, 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-white/60 shadow-2xl overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 relative">

          {/* Icône + Texte */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Cookie size={18} className="text-gold shrink-0" />
              <h3 className="font-serif font-bold text-charcoal text-base">
                Vos données, notre engagement
              </h3>
            </div>
            <p className="text-steel text-sm leading-relaxed">
              Nous utilisons <strong className="text-charcoal">Formspree</strong> pour traiter vos données de contact (nom, email, téléphone, message). Nous prévoyons d'intégrer des outils d'analyse à l'avenir.{' '}
              <button
                onClick={onNavigatePrivacy}
                className="text-gold hover:underline text-sm font-medium"
              >
                En savoir plus
              </button>
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-row gap-3 shrink-0">
            <button
              onClick={refuse}
              className="px-5 py-2.5 text-sm font-medium text-charcoal border border-charcoal/20 rounded-full hover:border-gold/50 hover:text-gold transition-all"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 text-sm font-semibold btn-metallic-gold rounded-full"
            >
              Tout accepter
            </button>
          </div>

          {/* Fermer (x) */}
          <button
            onClick={refuse}
            className="absolute top-3 right-3 p-1.5 text-steel hover:text-charcoal transition-colors rounded-full hover:bg-black/5"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>

        </div>
      </div>
    </div>
  );
};
