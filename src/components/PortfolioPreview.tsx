import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioPreview = () => {
  const projects = [
    {
      title: 'Riddhi Boutique',
      category: 'E-commerce Website',
      description: 'Modern boutique website with WhatsApp integration for Kuala Lumpur fashion business',
      image: 'https://i.postimg.cc/SRj6bHGM/image.png',
      link: 'https://www.riddhiboutique.store/',
      results: '300% increase in online orders'
    },
    {
      title: 'FCS Clothing',
      category: 'Custom Jersey Store',
      description: 'Professional website for custom jersey business in Selangor with online ordering',
      image: 'https://i.postimg.cc/jdPXqYbH/image.png',
      link: 'https://fcs-clothing.vercel.app/',
      results: '200% more custom orders'
    },
    {
      title: 'Hygiena Expert',
      category: 'Service Website',
      description: 'Cleaning service website for Petaling Jaya with online booking system',
      image: 'https://i.postimg.cc/76h9qCHh/image.png',
      link: 'https://hygiena-expert.vercel.app/',
      results: '150% more bookings'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Websites We've Built for Malaysian Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped Malaysian businesses grow online with professional, results-driven websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} for Malaysian business`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-300"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">
                    {project.results}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300"
                  >
                    View Site →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = '/portfolio'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;