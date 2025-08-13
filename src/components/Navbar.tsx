import React, { useState, useRef } from 'react';
import logo from '../assets/image.png';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/web-design-malaysia' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    window.location.href = href;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 select-none">
          <img src={logo} alt="WebforMY - Malaysia Web Design" className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full bg-blue-50 p-1" />
          <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-wide">WebforMY</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden">
            <div className="py-4">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-6 py-3">
                <button
                  onClick={() => handleLinkClick('/contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;