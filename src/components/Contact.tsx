import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [focused, setFocused] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, company, message } = formData;

    const whatsappNumber = "60125545562"; // Without '+' for wa.me link

    const whatsappMessage = `Hello! My name is ${name}.
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@thesnuzy.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call/Whatsapp Us',
      content: '+60 12-554 5562',
      description: 'Mon-Fri 9AM-6PM (GMT+8)'
    },
    {
      icon: Instagram,
      title: 'DM Us',
      content: '@webforMY',
      description: 'Check out our IG',
      link: 'https://instagram.com/webforMY'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF2E92]/10 to-[#0B0B45]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#640043]/10 to-[#2B0040]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            Get Your Free Quote
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business online? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B45]/90 to-[#2B0040]/90 rounded-3xl border-2 border-[#FF2E92]/30 shadow-2xl shadow-[#FF2E92]/10" />
            <div className="relative p-8">
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">
                Tell us about your project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 bg-[#05010F]/50 border-2 border-[#640043]/30 rounded-xl text-white font-inter placeholder-transparent focus:border-[#FF2E92]/50 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter ${
                      focused === 'name' || formData.name
                        ? 'top-2 text-xs text-[#FF2E92]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    Your Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 bg-[#05010F]/50 border-2 border-[#640043]/30 rounded-xl text-white font-inter placeholder-transparent focus:border-[#FF2E92]/50 focus:outline-none transition-all duration-300"
                    placeholder="Email Address"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter ${
                      focused === 'email' || formData.email
                        ? 'top-2 text-xs text-[#FF2E92]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    Email Address *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 bg-[#05010F]/50 border-2 border-[#640043]/30 rounded-xl text-white font-inter placeholder-transparent focus:border-[#FF2E92]/50 focus:outline-none transition-all duration-300"
                    placeholder="Phone Number"
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter ${
                      focused === 'phone' || formData.phone
                        ? 'top-2 text-xs text-[#FF2E92]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>

                {/* Company */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 bg-[#05010F]/50 border-2 border-[#640043]/30 rounded-xl text-white font-inter placeholder-transparent focus:border-[#FF2E92]/50 focus:outline-none transition-all duration-300"
                    placeholder="Company Name"
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter ${
                      focused === 'company' || formData.company
                        ? 'top-2 text-xs text-[#FF2E92]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    Company Name
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    rows={4}
                    className="w-full px-4 py-4 bg-[#05010F]/50 border-2 border-[#640043]/30 rounded-xl text-white font-inter placeholder-transparent focus:border-[#FF2E92]/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Project Details"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter ${
                      focused === 'message' || formData.message
                        ? 'top-2 text-xs text-[#FF2E92]'
                        : 'top-4 text-gray-400'
                    }`}
                  >
                    Tell us about your business/project *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-xl font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-[#0B0B45]/90 to-[#2B0040]/90 rounded-3xl border-2 border-[#FF2E92]/30 shadow-2xl shadow-[#FF2E92]/10">
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">
                Get in touch
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-8">
                Ready to start your project? We're here to help you every step of the way. 
                Contact us today for a free consultation and quote.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-poppins font-semibold mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF2E92] font-inter font-semibold mb-1 hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-[#FF2E92] font-inter font-semibold mb-1">
                          {info.content}
                        </p>
                      )}
                      <p className="text-gray-400 font-inter text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 bg-gradient-to-r from-[#FF2E92]/25 to-[#640043]/25 rounded-2xl border-2 border-[#FF2E92]/40 shadow-lg shadow-[#FF2E92]/10">
              <h4 className="text-white font-poppins font-semibold mb-2">
                ⚡ Quick Response Guarantee
              </h4>
              <p className="text-gray-300 font-inter text-sm">
                We respond to all inquiries within 2 hours during business hours. 
                Get your free quote and project timeline today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
