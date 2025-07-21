import React, { useState, useRef } from 'react';
import logo from '../assets/image.png';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const handleMenuButtonClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleMenuMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleMenuMouseLeave = () => {
    closeTimeout.current = window.setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040] bg-opacity-90 shadow-lg backdrop-blur-strong">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3 select-none">
          <img src={logo} alt="WebforMY Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full bg-white/10 p-1" />
          <span className="text-2xl md:text-3xl font-poppins font-bold text-white tracking-wide">WebforMY</span>
        </a>
        <div className="relative group">
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 shadow-md hover:bg-gradient-to-r hover:from-[#FF2E92]/30 hover:to-[#0B0B45]/30 transition-all duration-300 focus:outline-none"
            aria-label="Open menu"
            type="button"
            onClick={handleMenuButtonClick}
          >
            <Menu className="w-7 h-7 text-white" />
          </button>
          {menuOpen && (
            <ul
              className="absolute right-0 mt-3 w-48 bg-white/10 backdrop-blur-strong border border-white/10 rounded-2xl shadow-2xl py-3 flex flex-col gap-2 animate-fade-in-up"
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
            >
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 font-inter text-lg text-white rounded-xl hover:bg-gradient-to-r hover:from-[#FF2E92]/30 hover:to-[#0B0B45]/30 hover:text-[#FF2E92] transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 