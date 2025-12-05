import React from 'react';
import { GraduationCap, ArrowUp, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-primary" size={32} />
              <span className="text-2xl font-display font-bold">Spark Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of tech leaders with quality education, resources, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#sessions" className="hover:text-primary transition-colors">Sessions</a></li>
              <li><a href="#success" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for weekly updates and free notes.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full text-white focus:ring-2 focus:ring-primary outline-none"
              />
              <button type="submit" className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-lg transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ICT Hub. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};