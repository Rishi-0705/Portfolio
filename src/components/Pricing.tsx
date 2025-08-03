import React from 'react';
import { Check, Star } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const Pricing = () => {
  const features = [
    'Custom Website Design',
    'Mobile Responsive Layout',
    'SEO Optimization',
    'Contact Form Integration',
    'SSL Certificate',
    'Free Hosting',
    'Domain Setup Included',
    'Social Media Integration'
  ];

  const testimonials = [
    {
      name: 'Magesh, Riddhi Boutique Owner',
      quote: "The website design delivered by WebforMY is very nice! I love it- Would definitely recommend to others who need a professional website!",
    },
    {
      name: 'Farah, HomeStyle Services',
      quote: "We finally have an online presence! WebforMY made the process smooth and easy to understand. Highly recommended for small businesses!",
    },
    {
      name: 'Jason, AutoFix Workshop',
      quote: "I didn’t know we needed a website until WebforMY showed us what’s possible. Now customers are finding us online. Fantastic job!",
    },
  ];

  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section id="pricing" className="relative py-20 px-6 bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-[#FF2E92]/10 to-[#0B0B45]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-[#640043]/10 to-[#2B0040]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div ref={fadeInRef} className="fade-in relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            Complete Website Package
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Everything you need to launch your business online, professionally designed and optimized for success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="relative">
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92] via-[#640043] to-[#0B0B45] rounded-3xl p-[3px] animate-gradient-xy">
              <div className="bg-[#05010F] rounded-3xl h-full w-full" />
            </div>

            <div className="relative p-12 text-center">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full">
                  <Star className="w-4 h-4 text-white fill-current" />
                  <span className="text-white font-poppins font-semibold text-sm">Most Popular</span>
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-6xl md:text-8xl font-poppins font-bold bg-gradient-to-r from-white via-[#e0e7ef] to-[#b6c6e3] bg-clip-text text-transparent mb-2">
                  Free Preview 
                </div>
                <div className="text-gray-400 font-inter text-lg">
                  • Complete Package • 
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 font-inter">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="group relative inline-block px-12 py-6 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full font-poppins font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/50 mb-6"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </a>

              <p className="text-gray-400 font-inter text-sm">
                💳 50% deposit + 50% payment upon project completion • 📞 Free consultation included
              </p>
            </div>
          </div>

          {/* Testimonials - 3 Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-gradient-to-br from-[#0B0B45]/90 to-[#2B0040]/90 border-2 border-[#FF2E92]/30 shadow-2xl shadow-[#FF2E92]/10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex justify-center mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-[#FF2E92] fill-current transform transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_#FF2E92]"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-base italic font-inter mb-4 leading-relaxed">
                  "{review.quote}"
                </blockquote>
                <cite className="text-[#FF2E92] font-poppins font-semibold block text-sm">
                  — {review.name}
                </cite>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
