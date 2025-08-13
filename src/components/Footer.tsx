import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Web Design Malaysia', href: '/web-design-malaysia' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Website Design Malaysia',
    'E-commerce Development',
    'SEO Optimization',
    'Mobile Responsive Design',
    'WhatsApp Integration',
    'Google Business Setup'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              WebforMY
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Malaysia's trusted web design agency. We create professional, affordable websites 
              that help Malaysian businesses grow online. From small kedai to growing enterprises, 
              we have the perfect solution for your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="https://wa.me/60125545562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  +60 12-554 5562 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:webformyagency@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  webformyagency@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Serving all of Malaysia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} WebforMY. All rights reserved. | Professional Web Design Malaysia | 
              Affordable Website Development for Malaysian Businesses
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;