import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl font-bold tracking-tight">
            SIRANNO<span className="text-gold">.</span>WEB
          </span>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Yoann Delaloy. Tous droits réservés.
          </p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Mentions Légales</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Plan du site</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-white transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-white transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};