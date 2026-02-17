import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'accueil',
  SERVICES = 'expertise',
  PROJECTS = 'realisations',
  ABOUT = 'a-propos',
  TESTIMONIALS = 'temoignages',
  CONTACT = 'contact'
}