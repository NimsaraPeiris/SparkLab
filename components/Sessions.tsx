import React from 'react';
import { CheckCircle, Calendar, Clock, Video } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { SessionItem } from '../types';

const sessions: SessionItem[] = [
  {
    title: "Weekly Concept Classes",
    description: "Deep dive into core syllabus topics with practical examples.",
    features: ["Interactive whiteboard", "Recording available", "Notes provided"]
  },
  {
    title: "Exam Strategy Sessions",
    description: "Learn how to approach paper questions and manage time effectively.",
    features: ["Past paper breakdown", "Marking scheme analysis", "Mock tests"]
  },
  {
    title: "Revision Bootcamps",
    description: "Intensive crash courses before major exams to refresh memory.",
    features: ["Fast-paced review", "Key definitions list", "Q&A focus"]
  }
];

export const Sessions: React.FC = () => {
  return (
    <section id="sessions" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Content List */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Live Learning Sessions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                Join our interactive live sessions designed to boost your understanding and confidence.
              </p>
            </Reveal>

            <div className="space-y-8">
              {sessions.map((session, index) => (
                <Reveal key={index} delay={index * 150} direction='left'>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-primary hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{session.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{session.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {session.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-accent mr-1.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={600}>
               <div className="mt-10">
                 <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How to Join:</h4>
                 <p className="text-gray-600 dark:text-gray-400 mb-4">Links are shared in our WhatsApp community 15 minutes before start.</p>
                 <a href="#contact" className="text-primary font-semibold hover:underline">Join WhatsApp Group →</a>
               </div>
            </Reveal>
          </div>

          {/* Right: Preview Card */}
          <div className="lg:pl-8 flex flex-col justify-center">
            <Reveal direction='right' delay={300}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 text-white">
                <div className="absolute inset-0">
                  <img src="https://picsum.photos/seed/codingclass/600/800" alt="Live Session" className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                
                <div className="relative p-8 md:p-12 h-full flex flex-col justify-end min-h-[500px]">
                  <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                    Next Session
                  </span>
                  <h3 className="text-3xl font-bold mb-4">Networking Fundamentals: OSI Model Explained</h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>Saturday, Oct 24th</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>07:00 PM - 08:30 PM</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Video className="w-5 h-5 mr-3" />
                      <span>Google Meet</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};