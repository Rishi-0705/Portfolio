import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-[#05010F] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;