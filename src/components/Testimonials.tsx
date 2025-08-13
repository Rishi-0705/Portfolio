import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Magesh Kumar',
      business: 'Riddhi Boutique, KL',
      content: 'The website design delivered by WebforMY is very nice! I love it. Would definitely recommend to others who need a professional website for their Malaysian business.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Farah Abdullah',
      business: 'HomeStyle Services, Selangor',
      content: 'We finally have an online presence! WebforMY made the process smooth and easy to understand. Highly recommended for small Malaysian businesses!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Jason Lim',
      business: 'AutoFix Workshop, Penang',
      content: 'I didn\'t know we needed a website until WebforMY showed us what\'s possible. Now customers are finding us online. Fantastic job for our Malaysian workshop!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Malaysian Business Owners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real testimonials from Malaysian businesses who've grown online with WebforMY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;