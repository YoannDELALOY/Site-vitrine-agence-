import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';

const CONTACT_EMAIL = 'contact@yoanndelaloy.com';
const PHONE_NUMBER = '06 47 34 43 64';
const PHONE_HREF = 'tel:+33647344364';

/*
  Pour activer l'envoi d'emails, créer un compte sur https://formspree.io
  et remplacer FORMSPREE_ID par l'identifiant de votre formulaire.
  Ex: 'xvoejwbl' pour https://formspree.io/f/xvoejwbl
*/
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

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
  },
  {
    icon: <ExternalLink size={18} />,
    label: 'Malt',
    href: 'https://www.malt.fr/profile/yoanndelaloy'
  }
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nouveau message de ${formData.name} — Maison Siranno`
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id={SectionId.CONTACT}
      className="py-24 relative bg-paper"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">

          {/* Côté gauche — sombre */}
          <div className="bg-charcoal p-10 md:p-16 text-white space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-6 text-white">
                Parlons de votre <span className="text-metallic-gold">Futur</span>.
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Vous avez un projet ? Une problématique d'automatisation ?
                Prenons 30 minutes pour auditer vos besoins. Pas de jargon, juste des solutions concrètes.
              </p>

              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Nous rencontrer</h4>
                    <p className="text-gray-400">
                      1 rue Auguste Grivot<br />
                      Châteauneuf-sur-Loire, 45110<br />
                      Loiret, France
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Téléphone — cliquable */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-gold shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Téléphone</h4>
                    <a
                      href={PHONE_HREF}
                      className="text-gray-400 hover:text-gold transition-colors text-lg font-medium"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Me retrouver sur</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-gold hover:text-charcoal border border-white/10 rounded-lg text-gray-300 text-xs font-medium transition-all duration-200"
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Côté droit — formulaire */}
          <div className="bg-paper p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-metallic-navy mb-8">Envoyer un message</h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-safe-green/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-safe-green" />
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal mb-2">Message envoyé !</h4>
                <p className="text-steel">Je vous répondrai dans les plus brefs délais.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-gold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Nom complet <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Téléphone{' '}
                    <span className="text-steel text-xs font-normal">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Votre projet <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-risk-red text-sm">
                    Une erreur est survenue. Veuillez m'écrire directement à{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-metallic-dark text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-steel text-center">
                  Ou appelez directement :{' '}
                  <a href={PHONE_HREF} className="text-gold font-semibold hover:underline">
                    {PHONE_NUMBER}
                  </a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
