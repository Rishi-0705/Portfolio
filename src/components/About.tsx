import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const About = () => {
  const stats = [
    { icon: Users, number: '10+', label: 'Websites Delivered', description: 'Successfully launched for Malaysian businesses' },
    { icon: Clock, number: '10-15', label: 'Days Turnaround', description: 'Fast delivery without compromising quality' },
    { icon: Award, number: '98%', label: 'Satisfaction Rate', description: 'Customer-friendly support system' },
    { icon: Shield, number: '24/7', label: 'Support Available', description: 'We\'re here when you need us most' }
  ];

  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section id="about" className="relative py-20 px-6 bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040]">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF2E92] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div ref={fadeInRef} className="fade-in relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            Why Malaysian Businesses Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            We understand the Malaysian market and create websites that resonate with local audiences while meeting international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0B0B45]/90 to-[#2B0040]/90 border-2 border-[#FF2E92]/30 hover:border-[#FF2E92]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/20"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E92]/10 to-[#640043]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF2E92] to-[#640043] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-poppins font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF2E92]/10 to-[#640043]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#0B0B45]/90 to-[#2B0040]/90 border-2 border-[#FF2E92]/30 shadow-2xl shadow-[#FF2E92]/10">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 font-inter mb-6 leading-relaxed">
              Join our growing list of happy clients &
              let's create something amazing together.
            </p>
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/50"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Start Your Project Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;