import React from 'react';
import { ArrowRight, Play, Users, BookOpen, Award } from 'lucide-react';
import { Reveal } from './UI/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 -z-20"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 dark:bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-cyan-300 dark:bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">New sessions starting soon</span>
             </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 dark:text-white leading-tight">
              Empowering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ICT Students</span>
              <br/> to Excel
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Master complex ICT concepts, ace your exams with proven strategies, and build the foundation for a thriving tech career. Join thousands of successful students today.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Join Our Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#sessions" className="group px-8 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                View Sessions
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Image / Visuals */}
        <div className="relative hidden lg:block h-[600px]">
           {/* Abstract Phone/App Representation */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-80 h-[500px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl z-20 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
               <img src="https://picsum.photos/seed/tech1/400/800" alt="App Interface" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-6 right-6">
                 <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white font-bold">Upcoming: Python Masterclass</p>
                    <p className="text-gray-300 text-sm">Tomorrow, 10:00 AM</p>
                 </div>
               </div>
             </div>

             {/* Floating Cards */}
             <div className="absolute top-20 right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">500+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Active Students</p>
                  </div>
                </div>
             </div>

             <div className="absolute bottom-40 -left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-30 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg text-green-600 dark:text-green-300">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">95%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Success Rate</p>
                  </div>
                </div>
             </div>
             
             <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-10 animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">100+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Recorded Sessions</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};