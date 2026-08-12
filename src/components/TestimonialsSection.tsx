import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { REVIEWS_DATA } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  // Select 3 concise reviews for the homepage
  const homepageReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>PATIENT TESTIMONIALS</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Loved by Our Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Rated 4.9 out of 5 stars based on over 380 verified patient reviews.
          </p>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homepageReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[10px] font-mono font-medium">
                    {rev.serviceCategory}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-4">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shrink-0">
                  {rev.patientName.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                    <span>{rev.patientName}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 inline" title="Verified Patient" />
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400">Verified Patient</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Patient Reviews CTA */}
        <div className="text-center pt-4">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>View Patient Reviews</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
