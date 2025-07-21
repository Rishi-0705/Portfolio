import React, { useState, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      title: 'Riddhi Boutique',
      category: 'Boutique Website',
      description: 'Modern website with WhatsApp integrated orders and gallery-style pop view images.',
      image: 'https://i.postimg.cc/SRj6bHGM/image.png',
      gallery: [
        'https://i.postimg.cc/SRj6bHGM/image.png',
        'https://i.postimg.cc/XqyT71jr/image.png',
        'https://i.postimg.cc/mgfGhH5P/image.png'
      ],
      link: 'https://www.riddhiboutique.store/', // Example link
      features: ['Pop up view style', 'WhatsApp-Integrated', 'Social Media Quick Links'],
      gradient: 'from-[#FF2E92] to-[#640043]'
    },
    {
      title: 'FCS Clothing',
      category: 'Custom Jersey Store',
      description: 'A jersey store featuring custom designs, easy ordering, and a sleek interface.',
      image: 'https://i.postimg.cc/jdPXqYbH/image.png',
      gallery: [
        'https://i.postimg.cc/jdPXqYbH/image.png',
        'https://i.postimg.cc/tRsTxF2k/image.png',
        'https://i.postimg.cc/kgkw7MVv/image.png'
      ],
      link: 'https://fcs-clothing.vercel.app/', // Example link
      features: ['Mobile-Optimized Design', 'Appealing Animations', 'Google Form Integration'],
      gradient: 'from-[#0B0B45] to-[#2B0040]'
    },
    {
      title: 'Hygiena Expert',
      category: 'Cleaning Service Website',
      description: 'Professional cleaning service website with WhatsApp-integrated form, service showcase, and quick contact options.',
      image: 'https://i.postimg.cc/76h9qCHh/image.png',
      gallery: [
        'https://i.postimg.cc/76h9qCHh/image.png',
        'https://i.postimg.cc/gkjKRL8K/image.png',
        'https://i.postimg.cc/SRvCVVCf/image.png'
      ],
      link: 'https://hygiena-expert.com', // Example link
      features: ['Online Booking Form', 'Service Packages Showcase', 'WhatsApp Contact Integration'],
      gradient: 'from-[#2B0040] to-[#640043]'
    }
  ];

  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();

  const openGallery = (project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setIsOpen(true);
    // Lock body scroll when modal opens
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  };

  const closeGallery = () => {
    // Restore body scroll when modal closes
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setIsOpen(false);
  };
  const goNext = () => setCurrentImageIndex((prev) => (prev + 1) % currentProject.gallery.length);
  const goPrev = () => setCurrentImageIndex((prev) => (prev - 1 + currentProject.gallery.length) % currentProject.gallery.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => { touchEndX.current = e.changedTouches[0].clientX; handleSwipe(); };
  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closeGallery();
    }
  };

  return (
    <section id="portfolio" className="relative py-20 px-6 bg-gradient-to-br from-[#0B0B45] via-[#05010F] to-[#2B0040]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FF2E92]/5 to-[#640043]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-[#0B0B45]/5 to-[#2B0040]/5 rounded-full blur-3xl" />
      </div>

      <div ref={fadeInRef} className="fade-in relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 text-white">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF2E92] to-[#640043] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped Malaysian businesses achieve digital success
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B0B45]/30 to-[#2B0040]/30 border border-[#640043]/30 hover:border-[#FF2E92]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF2E92]/20"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => openGallery(project, 0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010F] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-sm font-poppins font-semibold text-white bg-gradient-to-r ${project.gradient} rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-poppins font-bold text-white mb-2 group-hover:text-[#FF2E92] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 font-inter mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-inter text-gray-300 bg-[#0B0B45]/50 rounded-full border border-[#640043]/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Project & Visit Site Buttons */}
                <div className="flex justify-center gap-4 mt-4">
  <button
    onClick={() => openGallery(project, 0)}
    className="group relative px-6 py-3 bg-gradient-to-r from-[#FF2E92] to-[#640043] rounded-full font-poppins font-semibold text-white text-sm shadow-lg hover:shadow-[#FF2E92]/50 hover:scale-105 transition-all duration-300"
  >
    <span className="relative z-10 flex items-center gap-2">
      View Project
      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
    </span>
  </button>

  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative px-6 py-3 bg-gradient-to-r from-[#0B0B45] to-[#2B0040] rounded-full font-poppins font-semibold text-white text-sm shadow-lg hover:shadow-[#0B0B45]/50 hover:scale-105 transition-all duration-300"
    >
      <span className="relative z-10 flex items-center gap-2">
        Visit Site
        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
      </span>
    </a>
  )}
</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Popup */}
        {isOpen && currentProject && (
          <div
            className="popup-overlay fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 0,
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleClickOutside}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="relative bg-white/5 p-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm w-full max-w-4xl mx-auto"
              style={{
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Close Button */}
              <button
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#FF2E92] to-[#640043] text-white rounded-full flex items-center justify-center text-xl md:text-2xl shadow-lg hover:scale-110 transition-transform duration-300 z-10"
                onClick={closeGallery}
              >
                &times;
              </button>

              {/* Main Image */}
              <img
                src={currentProject.gallery[currentImageIndex]}
                alt="Gallery"
                className="max-h-[60vh] md:max-h-[70vh] max-w-full w-auto h-auto rounded-xl shadow-xl border border-white/10 transition-transform duration-300 object-contain"
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  width: 'auto',
                  height: 'auto'
                }}
              />

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 md:gap-3 mt-4 overflow-x-auto max-w-full">
                {currentProject.gallery.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    alt={`Thumbnail ${idx}`}
                    className={`h-12 w-16 md:h-16 md:w-24 object-cover rounded-md border-2 cursor-pointer transition-transform hover:scale-105 flex-shrink-0 ${
                      currentImageIndex === idx ? 'border-[#FF2E92]' : 'border-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0B0B45] to-[#2B0040] text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform duration-300 z-10"
              onClick={goPrev}
            >
              &#10094;
            </button>
            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0B0B45] to-[#2B0040] text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform duration-300 z-10"
              onClick={goNext}
            >
              &#10095;
            </button>
          </div>
        )}

        
      </div>
    </section>
  );
};

export default Portfolio;
