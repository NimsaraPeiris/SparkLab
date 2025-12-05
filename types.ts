import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  icon: React.ReactNode;
}

export interface SessionItem {
  title: string;
  description: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
  achievement: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlatformItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  btnColor: string;
  url: string;
}