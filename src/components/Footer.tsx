import React from 'react';
import { Phone, ExternalLink, Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-4 h-4 text-white"
  >
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.736 5.486 2.012 7.795L0 32l8.5-2.217A15.944 15.944 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.056a12.974 12.974 0 01-6.597-1.791l-.472-.28-5.048 1.317 1.343-4.919-.306-.504A12.956 12.956 0 013.048 16C3.048 8.832 8.832 3.048 16 3.048c7.168 0 12.952 5.784 12.952 12.952S23.168 28.952 16 28.952z" />
    <path d="M23.307 18.692c-.36-.18-2.112-1.04-2.44-1.16-.328-.12-.568-.18-.808.18-.24.36-.928 1.16-1.136 1.4-.208.24-.416.27-.776.09-.36-.18-1.52-.56-2.896-1.78-1.07-.956-1.792-2.14-2-.5-.208-.36-.02-.56.16-.74.164-.163.36-.426.54-.64.18-.214.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.808-1.96-1.104-2.68-.29-.7-.58-.6-.808-.61-.21-.01-.45-.01-.69-.01s-.63.09-.96.45c-.33.36-1.26 1.23-1.26 3 .01 1.77 1.3 3.48 1.48 3.72.18.24 2.54 3.88 6.16 5.44 3.62 1.56 4.36 1.25 5.14 1.18.78-.07 2.54-1.04 2.9-2.05.36-1.01.36-1.87.25-2.05-.11-.18-.33-.29-.69-.46z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#05010F] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF2E92]/5 to-[#640043]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#0B0B45]/5 to-[#2B0040]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-3xl font-poppins font-bold bg-gradient-to-r from-[#FF2E92] to-[#0B0B45] bg-clip-text text-transparent mb-4">
                    WebforMY
                  </h3>
                  <p className="text-gray-300 font-inter leading-relaxed max-w-md">
                    Malaysia's premier web design agency. We create stunning, high-converting websites
                    that help businesses grow online. Professional, fast, and affordable.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/60125545562"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <WhatsAppIcon />
                    </a>
                    <a
                      href="https://wa.me/60125545562"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 font-inter hover:text-[#FF2E92] transition-colors duration-300"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Instagram (below WhatsApp) */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/webforMY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/webforMY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 font-inter hover:text-[#FF2E92] transition-colors duration-300"
                    >
                      @webforMY
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 font-inter">+60 12-554 5562</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-poppins font-semibold text-white mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-300 font-inter hover:text-[#FF2E92] transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#640043]/30 px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="text-gray-400 font-inter text-sm text-center md:text-center">
                © {currentYear} WebforMY. All rights reserved. | Web Design Malaysia | Website Development Malaysia
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-[#FF2E92] font-inter text-sm transition-colors duration-300">
                  
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF2E92] font-inter text-sm transition-colors duration-300">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
