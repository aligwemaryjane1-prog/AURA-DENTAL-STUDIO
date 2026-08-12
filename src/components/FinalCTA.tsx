import React from 'react';
import { Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Soft gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
          Ready for a healthier, more confident smile?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-sans">
          Take the first step toward personalised dental care.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base transition-all shadow-lg hover:shadow-sky-500/20 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Book an Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
