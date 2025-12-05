import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import { Reveal } from './UI/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <Reveal direction='right'>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-lg"></div>
              <img 
                src="https://picsum.photos/seed/teamwork/600/400" 
                alt="Team working together" 
                className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform hover:scale-[1.02] duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-700">
                <span className="text-3xl font-bold text-primary">5+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Years Experience</span>
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                Who We Are
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                ICT Hub is more than just a learning platform; it's a movement dedicated to demystifying technology for students. We bridge the gap between theoretical syllabus and real-world application, ensuring our students don't just pass exams—they understand the digital world.
              </p>
            </Reveal>

            <div className="space-y-6">
              {[
                { 
                  icon: <Target className="w-6 h-6 text-primary" />, 
                  title: "Our Mission", 
                  desc: "To provide accessible, high-quality ICT education that inspires innovation." 
                },
                { 
                  icon: <Lightbulb className="w-6 h-6 text-secondary" />, 
                  title: "Our Vision", 
                  desc: "A generation of tech-savvy students ready to lead the digital future." 
                },
                { 
                  icon: <Users className="w-6 h-6 text-accent" />, 
                  title: "Community First", 
                  desc: "Building a supportive network where every question is valued." 
                }
              ].map((item, index) => (
                <Reveal key={index} delay={300 + (index * 100)} direction='left'>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};