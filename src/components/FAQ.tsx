import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a website cost for Malaysian businesses?',
      answer: 'Our website packages start from RM147/month for basic websites, RM297/month for standard websites with advanced features, and RM497/month for premium e-commerce solutions. All packages include hosting, SSL certificate, and ongoing support with no setup fees.'
    },
    {
      question: 'How long does it take to build a website in Malaysia?',
      answer: 'Most websites are completed within 7-14 days. Basic websites can be ready in 7 days, while more complex e-commerce or custom websites may take up to 14 days. We provide regular updates throughout the process and work efficiently to get your Malaysian business online quickly.'
    },
    {
      question: 'Do you provide hosting and domain registration?',
      answer: 'Yes! All our packages include reliable Malaysian hosting and SSL certificates. We can also help you register a .com.my or .my domain name, or work with your existing domain. Everything is included in your monthly package price.'
    },
    {
      question: 'Will my website work on mobile phones?',
      answer: 'Absolutely! All websites we create are fully mobile-responsive and optimized for Malaysian mobile users. With over 80% of Malaysians using mobile devices to browse the internet, we ensure your website looks perfect on all screen sizes.'
    },
    {
      question: 'Do you optimize websites for Google Malaysia?',
      answer: 'Yes, every website includes basic SEO optimization for Malaysian searches. We optimize for local keywords, set up Google Business Profile, and ensure your website follows SEO best practices to help Malaysian customers find your business online.'
    },
    {
      question: 'Can you integrate WhatsApp into my website?',
      answer: 'Definitely! WhatsApp integration is included in all our packages. We add WhatsApp contact buttons that make it easy for Malaysian customers to reach you directly. This is essential for Malaysian businesses as WhatsApp is widely used for business communication.'
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We provide ongoing technical support, security updates, and basic content updates. Our Malaysian support team is available during business hours to help with any questions or issues. We also provide monthly performance reports for premium packages.'
    },
    {
      question: 'Can I update my website content myself?',
      answer: 'Yes! We can provide you with easy-to-use content management access, or we can handle updates for you. For premium packages, we include monthly content updates as part of the service. We\'ll train you on how to make basic updates if you prefer to manage content yourself.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about web design services for Malaysian businesses
          </p>
        </div>

        {/* Schema Markup for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions about getting a website for your Malaysian business?
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
          >
            Contact Us for Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;