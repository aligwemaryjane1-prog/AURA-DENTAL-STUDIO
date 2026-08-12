import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServicesOverview } from '../components/ServicesOverview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { MeetDentists } from '../components/MeetDentists';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        onNavigate={(route) => {
          if (route === 'services') navigate('/services');
          if (route === 'about') navigate('/about');
          if (route === 'contact') navigate('/contact');
        }}
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 2. TRUST / CREDIBILITY SECTION */}
      <TrustBar />

      {/* 3. SERVICES SECTION */}
      <ServicesOverview onOpenBookingForService={(id) => onOpenBooking(id)} />

      {/* 4. WHY AURA DENTAL SECTION */}
      <WhyChooseUs />

      {/* 5. DENTIST / TEAM SECTION */}
      <MeetDentists onOpenBooking={() => onOpenBooking()} />

      {/* 6. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. FINAL CTA */}
      <FinalCTA onOpenBooking={() => onOpenBooking()} />
    </>
  );
};
