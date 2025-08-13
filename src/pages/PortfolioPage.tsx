import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Riddhi Boutique',
      category: 'Fashion E-commerce Website',
      location: 'Kuala Lumpur',
      description: 'Modern e-commerce website for Malaysian boutique with WhatsApp integration and mobile-optimized shopping experience.',
      image: 'https://i.postimg.cc/SRj6bHGM/image.png',
      link: 'https://www.riddhiboutique.store/',
      features: ['E-commerce Integration', 'WhatsApp Orders', 'Mobile Optimized', 'SEO Optimized'],
      results: ['300% increase in online orders', 'Mobile traffic up 250%', 'Google ranking improved']
    },
    {
      title: 'FCS Clothing',
      category: 'Custom Jersey Store Website',
      location: 'Selangor',
      description: 'Professional website for custom jersey business with online ordering system and portfolio showcase.',
      image: 'https://i.postimg.cc/jdPXqYbH/image.png',
      link: 'https://fcs-clothing.vercel.app/',
      features: ['Custom Design Portfolio', 'Order Management', 'Responsive Design', 'Fast Loading'],
      results: ['200% more custom orders', 'Reduced inquiry response time', 'Better customer experience']
    },
    {
      title: 'Hygiena Expert',
      category: 'Cleaning Service Website',
      location: 'Petaling Jaya',
      description: 'Professional cleaning service website with online booking system and service showcase for Malaysian homes and offices.',
      image: 'https://i.postimg.cc/76h9qCHh/image.png',
      link: 'https://hygiena-expert.vercel.app/',
      features: ['Online Booking', 'Service Packages', 'Local SEO', 'Contact Integration'],
      results: ['150% more bookings', 'Improved local visibility', 'Streamlined operations']
    },
    {
      title: 'KL Dental Clinic',
      category: 'Healthcare Website',
      location: 'Kuala Lumpur',
      description: 'Professional dental clinic website with appointment booking and service information for Malaysian patients.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      features: ['Appointment Booking', 'Service Information', 'Patient Portal', 'Mobile Friendly'],
      results: ['40% more appointments', 'Reduced phone calls', 'Better patient communication']
    },
    {
      title: 'Spice Kitchen Restaurant',
      category: 'Restaurant Website',
      location: 'Penang',
      description: 'Authentic Malaysian restaurant website with online menu and reservation system.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      features: ['Online Menu', 'Table Reservations', 'Food Gallery', 'Location Map'],
      results: ['60% increase in reservations', 'Higher customer engagement', 'Improved brand image']
    },
    {
      title: 'Tech Solutions Malaysia',
      category: 'IT Services Website',
      location: 'Cyberjaya',
      description: 'Professional IT services website showcasing technology solutions for Malaysian businesses.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      features: ['Service Portfolio', 'Client Testimonials', 'Contact Forms', 'Professional Design'],
      results: ['300% more leads', 'Better conversion rate', 'Enhanced credibility']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio of Malaysian Websites
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how we've helped Malaysian businesses succeed online with professional, 
            SEO-optimized websites that drive real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ 50+ Websites Delivered</span>
            <span>✓ 98% Client Satisfaction</span>
            <span>✓ Average 200% Traffic Increase</span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} in ${project.location}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  {project.link !== '#' && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-300"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results Achieved:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-green-600 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      View Live Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a professional website that drives real results for your Malaysian business
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;