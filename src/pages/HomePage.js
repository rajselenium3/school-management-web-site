import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HeroSection from '../components/HeroSection.js';
import FeaturesSection from '../components/FeaturesSection.js';
import TestimonialsSection from '../components/TestimonialsSection.js';
import CTASection from '../components/CTASection.js';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
