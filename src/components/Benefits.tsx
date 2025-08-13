import React from 'react';
import { DollarSign, Clock, Search } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Professional websites starting from RM147/month. No hidden fees, no setup costs. Perfect for Malaysian small businesses.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Get your website live in just 7 days. We understand Malaysian businesses need to move fast in today\'s market.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Search,
      title: 'Google-Optimized',
      description: 'Every website is optimized for Malaysian searches. Get found by customers looking for your services online.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Malaysian Businesses Choose WebforMY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand the unique needs of Malaysian businesses and deliver websites that work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;