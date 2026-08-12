import React from 'react';
import { Heart, Cpu, Smile, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Heart,
      title: 'Personalised Patient Care',
      description: 'We tailor every treatment plan to your unique oral health goals and comfort preferences. Every visit is relaxed and never rushed.'
    },
    {
      icon: Cpu,
      title: 'Modern Approach to Dentistry',
      description: 'We utilize ultra-low radiation 3D scanning and advanced digital technology for gentle, precise diagnostics.'
    },
    {
      icon: Smile,
      title: 'Comfortable, Professional Experience',
      description: 'Enjoy a peaceful, sanctuary-style environment with soothing amenities designed to put you completely at ease.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>THE AURA DIFFERENCE</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Why Choose Aura Dental Studio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            An elevated dental experience built around precision, empathy, and your total peace of mind.
          </p>
        </div>

        {/* 3 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-slate-200/90 bg-[#FAF9F6] space-y-4 text-center md:text-left transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto md:mx-0 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
