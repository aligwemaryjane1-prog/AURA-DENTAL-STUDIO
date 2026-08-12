import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { DENTISTS_DATA } from '../data/dentalData';

interface MeetDentistsProps {
  onOpenBooking?: () => void;
}

export const MeetDentists: React.FC<MeetDentistsProps> = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>EXPERT CLINICAL LEADERSHIP</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Meet Our Doctors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our clinicians combine rigorous academic training with a gentle, patient-centered approach.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DENTISTS_DATA.map((dentist) => (
            <div
              key={dentist.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden clinical-shadow flex flex-col sm:flex-row items-stretch"
            >
              {/* Portrait Image */}
              <div className="sm:w-5/12 relative h-64 sm:h-auto bg-slate-100 shrink-0">
                <img
                  src={dentist.imageUrl}
                  alt={dentist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dentist Details */}
              <div className="p-6 sm:w-7/12 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">{dentist.name}</h3>
                    <p className="text-xs font-semibold text-sky-700 mt-0.5">{dentist.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dentist.id === 'dr-vance'
                      ? 'Dr. Vance specializes in cosmetic smile design and gentle digital dentistry. She is passionate about crafting natural, beautiful smiles in a tranquil studio environment.'
                      : 'Dr. Chen leads our implant and restorative care using precision 3D CBCT guided techniques. He focuses on durable, painless tooth restorations and oral health.'}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium">
                    {dentist.experienceYears}+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meet Our Team CTA */}
        <div className="text-center pt-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>Meet Our Team</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
