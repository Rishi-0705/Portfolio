import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    message: ''
  });

  const [focused, setFocused] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, businessName, message } = formData;

    const whatsappNumber = "60125545562";
    const whatsappMessage = `Hello WebforMY! I'm interested in getting a website for my business.

Name: ${name}
Phone: ${phone}
Email: ${email}
Business: ${businessName || 'Not specified'}
Message: ${message}

Please send me more information about your website packages.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Your Free Website Quote
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to grow your Malaysian business online? Contact us today for a free consultation 
            and discover how we can help you succeed with a professional website.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No Obligation Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Same Day Response</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tell Us About Your Business
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours with a 
                personalized quote for your website project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder=" "
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'name' || formData.name
                        ? 'top-2 text-xs text-blue-600 bg-white px-1'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Name *
                  </label>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder=" "
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'phone' || formData.phone
                        ? 'top-2 text-xs text-blue-600 bg-white px-1'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Phone Number *
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder=" "
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'email' || formData.email
                        ? 'top-2 text-xs text-blue-600 bg-white px-1'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Email Address *
                  </label>
                </div>

                {/* Business Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('businessName')}
                    onBlur={() => setFocused('')}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'businessName' || formData.businessName
                        ? 'top-2 text-xs text-blue-600 bg-white px-1'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Business Name
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder=" "
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'message' || formData.message
                        ? 'top-2 text-xs text-blue-600 bg-white px-1'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Tell us about your business and website needs *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Message via WhatsApp
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help Malaysian businesses succeed online. 
                Contact us through any of these channels:
              </p>

              <div className="space-y-6 mb-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-blue-600 font-semibold">+60 12-554 5562</p>
                    <p className="text-gray-500 text-sm">Fastest response - usually within 30 minutes</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-blue-600 font-semibold">webformyagency@gmail.com</p>
                    <p className="text-gray-500 text-sm">We respond within 2 hours during business hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Serving all of Malaysia</p>
                    <p className="text-gray-500 text-sm">Remote consultations available nationwide</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Malaysian Time (GMT+8)</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2">
                  ⚡ Quick Response Guarantee
                </h3>
                <p className="text-blue-700 text-sm">
                  We understand that time is money for Malaysian businesses. 
                  That's why we guarantee a response within 2 hours during business hours, 
                  and often much faster via WhatsApp!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;