import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, MessageCircle, Video } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { PlatformItem } from '../types';

// Note: Lucide doesn't have official TikTok/WhatsApp brand icons, using approximations or standard SVG if needed. 
// For this strict react implementation, we use best-match Lucide icons or colored wrappers.

const platforms: PlatformItem[] = [
  {
    name: "Facebook",
    description: "Join our student community group for discussions.",
    icon: <Facebook className="w-8 h-8" />,
    color: "bg-blue-600",
    btnColor: "hover:bg-blue-700",
    url: "#"
  },
  {
    name: "TikTok",
    description: "Quick tips and tech hacks in under 60 seconds.",
    icon: <Video className="w-8 h-8" />, // Approximation
    color: "bg-black",
    btnColor: "hover:bg-gray-800",
    url: "#"
  },
  {
    name: "LinkedIn",
    description: "Professional networking and career opportunities.",
    icon: <Linkedin className="w-8 h-8" />,
    color: "bg-blue-700",
    btnColor: "hover:bg-blue-800",
    url: "#"
  },
  {
    name: "Instagram",
    description: "Daily quizzes, motivation, and visual notes.",
    icon: <Instagram className="w-8 h-8" />,
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
    btnColor: "hover:opacity-90",
    url: "#"
  },
  {
    name: "YouTube",
    description: "Full length tutorials and recorded sessions.",
    icon: <Youtube className="w-8 h-8" />,
    color: "bg-red-600",
    btnColor: "hover:bg-red-700",
    url: "#"
  },
  {
    name: "WhatsApp",
    description: "Instant updates and direct Q&A.",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "bg-green-500",
    btnColor: "hover:bg-green-600",
    url: "#"
  }
];

export const Platforms: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Follow Us On
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Stay connected across all your favorite platforms.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${platform.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <a href={platform.url} className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white ${platform.color} ${platform.btnColor} transition-colors opacity-0 group-hover:opacity-100`}>
                    Follow
                  </a>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{platform.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{platform.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};