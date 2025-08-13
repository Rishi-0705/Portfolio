import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const packages = [
    {
      name: 'Basic Website',
      price: 'RM147',
      period: '/month',
      popular: false,
      description: 'Perfect for small Malaysian businesses getting started online',
      features: [
        '5-page professional website',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form integration',
        'Social media links',
        'Free SSL certificate',
        'Basic hosting included',
        '1 month support'
      ],
      cta: 'Get Started',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Standard Website',
      price: 'RM297',
      period: '/month',
      popular: true,
      description: 'Most popular choice for growing Malaysian businesses',
      features: [
        '10-page professional website',
        'Advanced mobile optimization',
        'Complete SEO optimization',
        'Google Business Profile setup',
        'WhatsApp integration',
        'Image gallery/portfolio',
        'Premium hosting included',
        'Domain registration included',
        '3 months support',
        'Google Analytics setup'
      ],
      cta: 'Most Popular',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Premium Website',
      price: 'RM497',
      period: '/month',
      popular: false,
      description: 'Complete solution for established Malaysian businesses',
      features: [
        'Unlimited pages',
        'E-commerce functionality',
        'Advanced SEO & marketing',
        'Custom design & branding',
        'Online booking system',
        'Payment gateway integration',
        'Premium hosting & security',
        'Custom domain included',
        '6 months support',
        'Monthly performance reports',
        'Social media management',
        'Content updates included'
      ],
      cta: 'Go Premium',
      gradient: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Web Design Malaysia Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional website packages designed specifically for Malaysian businesses. 
            Choose the perfect plan to grow your online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ No Setup Fees</span>
            <span>✓ Fast 7-Day Delivery</span>
            <span>✓ Malaysian Support Team</span>
            <span>✓ Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Website Packages for Malaysian Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small kedai to growing enterprises, we have the perfect website solution for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border-2 p-8 ${
                  pkg.popular 
                    ? 'border-orange-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                } transition-all duration-300 hover:shadow-lg bg-white`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.gradient} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  {pkg.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Every Website
            </h2>
            <p className="text-lg text-gray-600">
              Every website package includes these essential features for Malaysian businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SEO Optimization',
                description: 'Get found on Google with proper SEO setup for Malaysian searches'
              },
              {
                title: 'Mobile Responsive',
                description: 'Perfect display on all devices - phone, tablet, and desktop'
              },
              {
                title: 'Google Business Profile',
                description: 'Complete setup and optimization for local Malaysian searches'
              },
              {
                title: 'WhatsApp Integration',
                description: 'Direct WhatsApp contact buttons for easy customer communication'
              },
              {
                title: 'Fast Loading Speed',
                description: 'Optimized for Malaysian internet speeds and user experience'
              },
              {
                title: 'Secure Hosting',
                description: 'Reliable Malaysian hosting with SSL certificate included'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Website for Malaysian Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of Malaysian businesses who trust WebforMY for their online presence
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            Get Your Free Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;