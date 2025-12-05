import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Offerings } from './components/Offerings';
import { Sessions } from './components/Sessions';
import { Benefits } from './components/Benefits';
import { Platforms } from './components/Platforms';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Check system preference or saved preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[100]" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Offerings />
        <Sessions />
        <Benefits />
        <Platforms />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
        <MessageCircle size={28} fill="currentColor" className="animate-pulse" />
      </a>
    </div>
  );
};

export default App;