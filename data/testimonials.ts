// Témoignages clients de Maison Siranno

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  projectId: string;
}

// Témoignages pour la page d'accueil
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur",
    company: "JD Rénovation",
    content: "Yoann a su créer notre présence numérique de A à Z. Site vitrine, identité visuelle, référencement local... en quelques semaines, notre entreprise de rénovation est devenue visible sur toute la région. Les demandes de devis ont explosé dès le premier mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Sylvie BIDOUX",
    role: "Gérante",
    company: "SI Griveaux",
    content: "Grâce à Yoann, nos assemblées générales sont désormais automatiquement retranscrites et résumées. Ce qui prenait plusieurs heures de travail manuel se fait en quelques minutes. Un gain de temps considérable et une fiabilité redoutable.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    projectId: "si-griveaux"
  },
  {
    name: "Maxime JAMBOU",
    role: "Dirigeant",
    company: "Consultant Indépendant",
    content: "Avant l'automatisation mise en place par Yoann, je passais mes soirées à organiser mes rendez-vous — répondre aux demandes, vérifier les disponibilités, envoyer des confirmations. Aujourd'hui, mon agenda se remplit tout seul. Ni moi ni mes clients ne subissons plus cette friction. C'est une liberté que je n'aurais pas imaginée possible.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "cabinet-kine-perrin"
  }
];

// Témoignages pour la page réalisations (différents de home)
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Marc FONTAINE",
    role: "Directeur",
    company: "Auto-École Centrale",
    content: "En 3 mois, nous sommes passés de la page 3 de Google à la première position sur notre ville. Le système de réservation en ligne a littéralement changé notre quotidien — les appels ont chuté de 60% et les inscriptions ont bondi.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    projectId: "auto-ecole-centrale"
  },
  {
    name: "Nadège BLANCHARD",
    role: "Propriétaire",
    company: "Coiffure & Sens",
    content: "Le taux de no-show est passé de 15% à 3%. C'est énorme dans mon métier. Les clientes réservent à 23h depuis leur canapé, et moi je récupère des heures de vie que je passais au téléphone.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "coiffure-et-sens"
  },
  {
    name: "Sophie AUBERT",
    role: "Chef Étoilée",
    company: "L'Écrin Gastronomique",
    content: "Notre taux de remplissage en soirée est passé de 72% à 91%. Le site reflète enfin le niveau de notre cuisine. Les réservations en ligne ont transformé notre gestion des tables et réduit considérablement les appels.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    projectId: "ecrin-gastronomique"
  }
];

// Témoignages complémentaires — un par projet restant
export const additionalTestimonials: Testimonial[] = [
  {
    name: "Claire LEROUX",
    role: "Gérante",
    company: "Boulangerie Leroux",
    content: "On avait peur que le Click & Collect soit trop compliqué pour notre clientèle. Finalement, les commandes ont démarré dès la première semaine. Moins de gaspillage, plus de ventes — et nos clients adorent commander leur pain du dimanche depuis leur téléphone.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    projectId: "boulangerie-leroux"
  },
  {
    name: "Jean MARTIN",
    role: "Artisan Ébéniste",
    company: "Atelier Martin",
    content: "Mon travail méritait une vraie vitrine. Yoann a capturé l'âme de mon atelier dans un site que je n'aurais jamais pu imaginer seul. Les demandes de devis ont doublé en trois mois, et les clients arrivent maintenant avec une vraie vision de ce qu'ils veulent.",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    projectId: "atelier-martin"
  },
  {
    name: "François DUBOIS",
    role: "Directeur Général",
    company: "Bâti-Loire Connect",
    content: "On pilotait nos chantiers à l'ancienne — Excel, emails, appels. Le dashboard développé par Maison Siranno nous a donné une visibilité en temps réel qu'on n'avait jamais eue. Nos chefs de chantier l'utilisent depuis leur téléphone sur le terrain.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    projectId: "bati-loire"
  },
  {
    name: "Thomas GIRARD",
    role: "Coordinateur",
    company: "Loire Valley Taste",
    content: "Fédérer douze producteurs sur une seule plateforme, c'était un défi logistique et humain. Yoann a livré une marketplace fonctionnelle, belle et simple à utiliser. Les 200 premières commandes en un mois ont dépassé toutes nos espérances.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "loire-valley"
  },
  {
    name: "Laurent VIDAL",
    role: "Paysagiste Indépendant",
    company: "Verdure & Paysages",
    content: "Mes réalisations parlaient d'elles-mêmes, mais personne ne les voyait. Depuis le site, mes photos avant/après font le travail à ma place. J'ai signé deux contrats d'entretien annuel uniquement grâce aux demandes issues du site.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    projectId: "verdure-paysages"
  },
  {
    name: "Antoine MASSÉ",
    role: "Gérant",
    company: "ProPlomb Services",
    content: "Je perdais du temps et de l'argent sur des déplacements qui ne menaient à rien. Le configurateur de devis filtre les demandes sérieuses dès le départ. Aujourd'hui, chaque visite client est qualifiée — c'est une transformation radicale de mon activité.",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    projectId: "proplomb-services"
  },
  {
    name: "Amélie CHASSAGNE",
    role: "Photographe Professionnelle",
    company: "Studio Lumière Photo",
    content: "Mon portfolio était dispersé sur Instagram et des albums partagés. Maison Siranno m'a créé un écrin digital qui reflète vraiment mon univers artistique. Les ventes de tirages ont démarré sans publicité et les demandes de séances mariage ont bondi de 40%.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    projectId: "studio-lumiere"
  },
  {
    name: "Sylvain ROUX",
    role: "Directeur",
    company: "Immo Loiret Prestige",
    content: "Notre ancien site ne correspondait plus à notre positionnement haut de gamme. La refonte a été un signal fort pour nos clients — trois mandats exclusifs signés dans le mois suivant le lancement. L'investissement a été rentabilisé en quelques semaines.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    projectId: "immo-loiret-prestige"
  },
  {
    name: "Isabelle MOREAU",
    role: "Présidente",
    company: "Scènes d'Orléans",
    content: "Avant, nous dépendions des réseaux sociaux pour toucher notre public. Avec notre nouveau site et la newsletter automatisée, nous avons triplé notre base d'abonnés en six mois. La billetterie en ligne a représenté 35% des ventes dès la première saison.",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    projectId: "scenes-orleans"
  }
];

// Ensemble complet — un témoignage par projet
export const allTestimonials: Testimonial[] = [
  ...homeTestimonials,
  ...projectsTestimonials,
  ...additionalTestimonials,
];
