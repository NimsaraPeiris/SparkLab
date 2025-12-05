import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  { question: "When are sessions conducted?", answer: "Our live sessions are typically held on weekends (Saturday & Sunday) evenings to accommodate school schedules. Specific times are announced weekly." },
  { question: "Are the sessions free?", answer: "Yes! 90% of our concept classes and webinars are completely free. We also offer premium bootcamps for intensive exam revision." },
  { question: "How do I join the WhatsApp group?", answer: "Click the 'Contact' button or the WhatsApp icon at the bottom of the page. You'll be directed to our community invite link." },
  { question: "Can I request specific topics?", answer: "Absolutely. We have a 'Student Voice' form in our community where you can vote for the next week's topics." },
  { question: "Do you provide recorded sessions?", answer: "Yes, all live sessions are recorded and uploaded to our YouTube channel within 24 hours for revision." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Common questions about our platform and sessions.</p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};