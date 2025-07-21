import React from 'react';
import { Monitor, Smartphone, Search, ShoppingCart, Zap, BarChart, Pen, Magnet } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Design',
      description: 'Custom websites that reflect your brand and convert visitors into customers',
      features: ['Responsive Design', 'Modern UI/UX', 'Brand Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure perfect performance across all devices and screen sizes',
      features: ['Mobile-First', 'Touch Optimized', 'Fast Loading']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Get found on Google with our proven SEO strategies',
      features: ['Keyword Research', 'On-Page SEO', 'Local SEO']
    },
    // Copywriting card
    {
      icon: Pen,
      title: 'Copywriting',
      description: 'Compelling copy that speaks directly to your target audience and drives action',
      features: ['Website Copy', 'Sales Pages', 'Converting CTA']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast websites that keep visitors engaged',
      features: ['Speed Optimization', 'CDN Integration', 'Caching']
    },
    // Lead Generation card
    {
      icon: Magnet,
      title: 'Lead Generation',
      description: 'Capture and convert visitors into customers with integrated forms',
      features: ['Contact Forms Integration', 'Interactive Form', 'Typeform / Whatsapp']
    }
  ];

  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section id="services" className="relative py-20 px-6 bg-gradient-to-br from-[#2B0040] via-[#05010F] to-[#0B0B45]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF2E92]/10 to-[#2B0040]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-[#0B0B45]/10 to-[#640043]/10 rounded-full blur-3xl" />
      </div>

      <div ref={fadeInRef} className="fade-in relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Comprehensive web solutions tailored for Malaysian businesses to succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0B0B45]/20 to-[#2B0040]/20 border-2 border-transparent hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{
                background: `
                  linear-gradient(rgba(5, 1, 15, 0.8), rgba(5, 1, 15, 0.8)),
                  linear-gradient(135deg, #0B0B45, #2B0040, #640043)
                `,
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box'
              }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#0B0B45] via-[#2B0040] to-[#640043] group-hover:from-[#FF2E92] group-hover:via-[#640043] group-hover:to-[#0B0B45] transition-all duration-500">
                <div className="bg-[#05010F] rounded-2xl h-full w-full" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#FF2E92] to-[#640043] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-poppins font-bold text-white mb-4 group-hover:text-[#FF2E92] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 font-inter mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 font-inter">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF2E92]/10 to-[#640043]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/50"
            style={{ zIndex: 20, willChange: 'transform, box-shadow' }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Discuss Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;