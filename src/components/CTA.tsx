import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Malaysian Business Online?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of Malaysian businesses who trust WebforMY for their online presence. 
          Get your professional website starting from RM147/month.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="https://wa.me/60125545562"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
          >
            WhatsApp Us Now
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
          <span>✓ No setup fees</span>
          <span>✓ 7-day delivery</span>
          <span>✓ Money-back guarantee</span>
          <span>✓ Malaysian support team</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;