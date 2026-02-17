import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: `#${SectionId.HOME}` },
    { label: 'Expertise', href: `#${SectionId.SERVICES}` },
    { label: 'Réalisations', href: `#${SectionId.PROJECTS}` },
    { label: "L'Agence", href: `#${SectionId.ABOUT}` },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-between
          ${
            isScrolled
              ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto md:min-w-[800px] rounded-full glass-panel px-6 py-3 shadow-2xl shadow-charcoal/5 border border-white/60'
              : 'top-0 left-0 right-0 w-full px-6 py-6 bg-transparent'
          }
        `}
      >
        <div className={`flex items-center justify-between w-full ${isScrolled ? '' : 'max-w-7xl mx-auto'}`}>
            {/* Logo */}
            <a href={`#${SectionId.HOME}`} className="flex flex-col group shrink-0">
            <span className={`font-serif font-bold text-charcoal tracking-tight group-hover:text-gold transition-colors ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                SIRANNO<span className="text-gold">.</span>WEB
            </span>
            {!isScrolled && (
                <span className="font-sans text-[10px] tracking-[0.2em] text-steel uppercase">
                Agence Digitale
                </span>
            )}
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full"
                >
                {link.label}
                </a>
            ))}
            <a
                href={`#${SectionId.CONTACT}`}
                className={`flex items-center gap-2 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-gold/20
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
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden animate-fade-in flex flex-col justify-center items-center">
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-6 p-2 text-charcoal"
            >
                <X size={32} />
            </button>
            
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-charcoal hover:text-gold transition-all"
              >
                {link.label}
              </a>
            ))}
             <a
              href={`#${SectionId.CONTACT}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 bg-gold text-white rounded-full text-lg font-medium shadow-lg mx-auto"
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      )}
    </>
  );
};