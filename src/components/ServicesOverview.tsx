import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calendar, Info } from 'lucide-react';
import { SERVICES_DATA } from '../data/dentalData';
import { ServiceItem } from '../types/dental';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesOverviewProps {
  onOpenBookingForService: (serviceId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onOpenBookingForService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Select 6 primary dental services for clean homepage presentation
  const coreServices = SERVICES_DATA.slice(0, 6);

  return (
    <section id="services" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>PRIMARY DENTAL SERVICES</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Comprehensive Care for Every Smile
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gentle, precise dental treatments tailored to your comfort and long-term oral health.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden clinical-shadow hover:clinical-shadow-hover transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider">
                  {service.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onOpenBookingForService(service.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center pt-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          setSelectedService(null);
          onOpenBookingForService(serviceId);
        }}
      />
    </section>
  );
};
