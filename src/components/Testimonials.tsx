import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ahmad Rahman',
      company: 'Tech Solutions Malaysia',
      role: 'CEO',
      content: 'WebforMY transformed our online presence completely. The website they created not only looks stunning but also increased our leads by 300% in just 3 months.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Tan',
      company: 'Bloom Fashion Boutique',
      role: 'Founder',
      content: 'The e-commerce website WebforMY built for us is incredible. Sales increased by 250% and customers love the smooth shopping experience. Best investment we made!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Wong',
      company: 'KL Dental Clinic',
      role: 'Director',
      content: 'Professional, fast, and reliable. WebforMY delivered our clinic website in just 2 weeks. The online booking system has made our operations so much more efficient.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      company: 'Spice Kitchen Restaurant',
      role: 'Owner',
      content: 'Our restaurant website looks amazing and the online ordering system is perfect. WebforMY understood exactly what we needed for the Malaysian market.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative py-20 px-6 bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FF2E92]/5 to-[#640043]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#0B0B45]/5 to-[#2B0040]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div ref={fadeInRef} className="fade-in relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Real success stories from Malaysian businesses we've helped grow online
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92]/50 via-[#640043]/50 to-[#0B0B45]/50 rounded-3xl p-[2px]">
              <div className="bg-gradient-to-br from-[#0B0B45]/30 to-[#2B0040]/30 rounded-3xl h-full w-full" />
            </div>

            <div className="relative p-12 text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-300 font-inter italic mb-8 leading-relaxed max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FF2E92] fill-current mx-1" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF2E92]/50"
                />
                <div className="text-left">
                  <div className="text-white font-poppins font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#FF2E92] font-inter">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-400 font-inter text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-[#FF2E92] to-[#640043] scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '100%', label: 'Project Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0B0B45]/20 to-[#2B0040]/20 border border-[#640043]/30">
              <div className="text-4xl font-poppins font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {stat.number}
              </div>
              <div className="text-gray-400 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;