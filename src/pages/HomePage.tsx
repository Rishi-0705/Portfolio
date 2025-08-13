import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import PortfolioPreview from '../components/PortfolioPreview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default HomePage;