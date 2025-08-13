import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Trusted by 50+ Malaysian businesses</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Websites for{' '}
              <span className="text-blue-600">Malaysian Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get a stunning, mobile-friendly website that attracts customers and grows your business. 
              <strong className="text-orange-600"> Starting from RM147/month</strong> with everything included.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Fast 7-day delivery',
                'Mobile-responsive design',
                'SEO optimized for Malaysia',
                'WhatsApp integration included'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Get Your Website Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
              >
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by Malaysian businesses:</p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span>✓ No setup fees</span>
                <span>✓ Money-back guarantee</span>
                <span>✓ Malaysian support team</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="bg-gray-100 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">W</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Business Website</h3>
                  <p className="text-gray-600">Professional • Fast • Mobile-Friendly</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Mobile responsive design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">SEO optimized for Google</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">WhatsApp integration</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              From RM147/month
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              7-day delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;