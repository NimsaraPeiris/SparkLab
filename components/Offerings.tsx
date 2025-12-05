import React from 'react';
import { Laptop, GraduationCap, Trophy, Wrench, Video } from 'lucide-react';
import { Reveal } from './UI/Reveal';

const categories = [
  {
    title: "Technology",
    icon: <Laptop className="w-8 h-8" />,
    description: "Latest tech news, trends, and real-world applications of ICT concepts.",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Academic",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Comprehensive notes, past papers, and exam preparation guides.",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Motivation",
    icon: <Trophy className="w-8 h-8" />,
    description: "Career guidance, student success stories, and study motivation.",
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Tricks & Tools",
    icon: <Wrench className="w-8 h-8" />,
    description: "Coding hacks, productivity tools, and software shortcuts.",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Courses",
    icon: <Video className="w-8 h-8" />,
    description: "In-depth video learning sessions, workshops, and tutorials.",
    color: "bg-red-500",
    gradient: "from-red-500 to-red-600"
  }
];

export const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Everything you need to succeed in your ICT journey, all in one place.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore Category <span className="ml-2">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};