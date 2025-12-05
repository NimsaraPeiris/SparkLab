import React from 'react';
import { Brain, Star, Clock, Zap, Book, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  { title: "Expert Guidance", icon: <Brain /> },
  { title: "Proven Strategies", icon: <Star /> },
  { title: "Free Live Sessions", icon: <Clock /> },
  { title: "Tech Trend Updates", icon: <Zap /> },
  { title: "Exclusive Materials", icon: <Book /> },
  { title: "Community Access", icon: <Users /> },
  { title: "Career Advice", icon: <TrendingUp /> },
  { title: "Exam Mastery", icon: <ShieldCheck /> },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Join ICT Hub?
            </h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Unlock your potential with resources tailored for your success.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 50} direction='up'>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-lg">
                  {React.cloneElement(benefit.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="font-semibold text-white">{benefit.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};