import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    quote: "The Python sessions completely changed how I approach coding. I went from failing my practicals to top of the class.",
    rating: 5,
    achievement: "Moved from C to A",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Chen",
    role: "A-Level Candidate",
    quote: "ICT Hub's exam strategies are a game changer. The notes are concise and exactly what you need for revision.",
    rating: 5,
    achievement: "Scored 98% in Finals",
    image: "https://picsum.photos/seed/david/100/100"
  },
  {
    name: "Emily Davis",
    role: "University Freshman",
    quote: "Thanks to the career guidance webinars, I found my passion in Data Science early on.",
    rating: 5,
    achievement: "Secured Internship",
    image: "https://picsum.photos/seed/emily/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="success" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Student Success Stories
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 200} direction='up'>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative pt-12 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 shadow-md object-cover" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-primary font-medium">{item.role}</p>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-gray-200 dark:text-gray-700 absolute -top-4 -left-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic relative z-10 text-center mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex flex-col items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold rounded-full">
                    {item.achievement}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};