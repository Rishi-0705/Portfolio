import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-design-malaysia" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;