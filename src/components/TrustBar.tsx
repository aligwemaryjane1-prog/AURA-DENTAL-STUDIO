import React from 'react';
import { Award, Heart, Cpu, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const points = [
    { icon: Award, title: 'Experienced Dental Care' },
    { icon: Heart, title: 'Patient-Centred Approach' },
    { icon: Cpu, title: 'Modern Dental Technology' },
    { icon: Sparkles, title: 'Comprehensive Treatments' },
  ];

  return (
    <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-heading font-semibold text-xs sm:text-sm text-slate-100 tracking-tight">
                  {pt.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
