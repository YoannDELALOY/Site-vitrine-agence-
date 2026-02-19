import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SectionId } from '../types';

type NavPage = 'expertise' | 'realisations' | 'blog' | 'agence' | 'home';

interface NavbarProps {
  onNavigate?: (page: NavPage) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lors du scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const close = () => setIsMobileMenuOpen(false);
      window.addEventListener('scroll', close, { passive: true, once: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [isMobileMenuOpen]);

  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'Expertise', page: 'expertise' },
    { label: 'Réalisations', page: 'realisations' },
    { label: 'Blog', page: 'blog' },
    { label: "L'Agence", page: 'agence' },
  ];

  const handleNavClick = (page: NavPage) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionMap: Record<NavPage, string> = {
        expertise: `#${SectionId.SERVICES}`,
        realisations: `#${SectionId.PROJECTS}`,
        blog: `#${SectionId.PROJECTS}`,
        agence: `#${SectionId.ABOUT}`,
        home: `#${SectionId.HOME}`,
      };
      window.location.href = sectionMap[page];
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const isActivePage = (page: NavPage) => currentPage === page;

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${
          isScrolled
            ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto md:min-w-[900px] rounded-full glass-panel px-6 py-3 shadow-2xl shadow-charcoal/5 border border-white/60'
            : 'top-0 left-0 right-0 w-full px-6 py-6 bg-transparent'
        }
      `}
    >
      <div className={`flex items-center justify-between ${isScrolled ? '' : 'max-w-7xl mx-auto'}`}>

        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center group shrink-0 focus:outline-none">
          <img
            src="/logos/Design sans titre (84).png"
            alt="Maison Siranno - L'art du web"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.page)}
              className={`text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-gold after:transition-all hover-metallic-gold
                ${isActivePage(link.page)
                  ? 'text-metallic-gold-inline after:w-full'
                  : 'text-charcoal/80 after:w-0 hover:after:w-full'
                }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`#${SectionId.CONTACT}`}
            onClick={handleContactClick}
            className={`flex items-center gap-2 btn-metallic-dark rounded-full text-sm font-medium shadow-lg transition-all duration-300
              ${isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'}
            `}
          >
            <Phone size={16} />
            <span>Discuter</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-gold transition-colors"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile — dropdown compact */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-3 rounded-2xl glass-panel border border-white/70 shadow-2xl overflow-hidden animate-fade-in">
          <div className="flex flex-col p-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-left px-4 py-3 rounded-xl text-base font-serif font-medium transition-all ${
                  isActivePage(link.page)
                    ? 'text-gold bg-gold/5'
                    : 'text-charcoal hover:text-gold hover:bg-gold/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={`#${SectionId.CONTACT}`}
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 px-6 py-3 btn-metallic-gold rounded-xl text-sm font-semibold shadow-md w-full"
              >
                <Phone size={16} />
                Démarrer un projet
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
