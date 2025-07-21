import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useFadeInOnScroll } from './useFadeInOnScroll';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  isActive: boolean;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState('');
  const fullText = 'WebforMY';
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fadeInRef = useFadeInOnScroll<HTMLDivElement>();
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  // Particle configuration
  const PARTICLE_COUNT = 30;
  const COLORS = ['#FF2E92', '#00D4FF', '#8B5CF6', '#FFFFFF', '#E879F9', '#06B6D4'];
  const SIZES = [3, 4, 5, 6, 7];
  const MOUSE_INFLUENCE_RADIUS = 150;
  const MOUSE_FORCE = 0.5;

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        id: i,
        x: Math.random() * (window.innerWidth || 1200),
        y: Math.random() * (window.innerHeight || 800),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.3 + Math.random() * 0.4,
        life: 0,
        maxLife: 0,
        isActive: true,
      });
    }
    particlesRef.current = particles;
  };

  // Animation loop
  const animateParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    const mouseX = mousePosition.x;
    const mouseY = mousePosition.y;

    particles.forEach((particle) => {
      if (!particle.isActive) return;

      // Mouse interaction - particles move away from cursor
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_INFLUENCE_RADIUS && distance > 0) {
        const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;
        // Move particles away from cursor (negative direction)
        particle.vx -= (dx / distance) * force * MOUSE_FORCE;
        particle.vy -= (dy / distance) * force * MOUSE_FORCE;
      }
      
      // Add subtle random movement for more organic motion
      particle.vx += (Math.random() - 0.5) * 0.02;
      particle.vy += (Math.random() - 0.5) * 0.02;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Damping with minimum velocity to keep particles moving
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Ensure minimum velocity to prevent particles from stopping
      const minVelocity = 0.3;
      const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      
      if (currentSpeed < minVelocity) {
        const angle = Math.atan2(particle.vy, particle.vx);
        particle.vx = Math.cos(angle) * minVelocity;
        particle.vy = Math.sin(angle) * minVelocity;
      }

      // Keep particles within bounds
      if (particle.x < -20) particle.x = canvas.width + 20;
      if (particle.x > canvas.width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = canvas.height + 20;
      if (particle.y > canvas.height + 20) particle.y = -20;

      // Use constant opacity
      const currentOpacity = particle.opacity;

      // Draw particle
      ctx.save();
      ctx.globalAlpha = currentOpacity;
      
      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Core particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    animationRef.current = requestAnimationFrame(animateParticles);
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Handle window resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas && heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  };

  useEffect(() => {
    const heroElement = heroRef.current;
    const canvas = canvasRef.current;
    
    if (heroElement && canvas) {
      // Set up event listeners
      heroElement.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      // Initialize canvas with proper dimensions
      const rect = heroElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Set canvas style dimensions
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // Initialize particles
      initParticles();
      
      // Start animation loop
      const startAnimation = () => {
        animateParticles();
      };
      
      // Small delay to ensure everything is ready
      setTimeout(startAnimation, 100);

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#05010F] via-[#0B0B45] to-[#2B0040] pt-28 md:pt-28"
    >
      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF2E92] to-[#2B0040] rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#0B0B45] to-[#640043] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* 1. Headline and subheadline */}
      <div ref={fadeInRef} className="fade-in relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mx-auto mb-8 flex justify-center">
          <div className="premium-gradient-border relative px-10 py-6 md:px-16 md:py-8 rounded-3xl shadow-2xl bg-white/10 bg-clip-padding backdrop-blur-strong overflow-hidden"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 #FF2E9244',
            }}
          >
            <h1 className="text-5xl md:text-7xl font-poppins font-bold tracking-wide flex items-center gap-2 select-none animate-float-premium">
              <span className="bg-gradient-to-r from-white via-[#e0e7ef] to-[#b6c6e3] bg-clip-text text-transparent">
                {typingText}
              </span>
              <span className="animate-blink">|</span>
            </h1>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl font-inter text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design high-converting, SEO-optimized websites that turn visitors into customers
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            className="group relative px-10 py-4 rounded-2xl font-poppins font-semibold text-lg text-white border border-white/30 shadow-lg transition-all duration-300 focus:outline-none backdrop-blur-strong bg-[#3B2177]"
            style={{ minWidth: '180px', boxShadow: '0 4px 24px 0 rgba(59,33,119,0.18), 0 1.5px 8px 0 #3B217744' }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10 flex items-center gap-2 text-shadow">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/30 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_24px_6px_rgba(62,203,255,0.25)]"
              style={{ boxShadow: 'none', background: 'linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))' }}
            />
          </button>
          <button
            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg text-white border border-white/30 shadow-lg transition-all duration-300 focus:outline-none overflow-hidden backdrop-blur-strong bg-[#3B2177]"
            style={{ minWidth: '180px', boxShadow: '0 4px 24px 0 rgba(59,33,119,0.18), 0 1.5px 8px 0 #3B217744' }}
            onClick={() => {
              const el = document.getElementById('portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Play className="w-5 h-5 text-cyan-100 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 text-shadow">View Our Work</span>
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/30 transition-all duration-300 group-hover:border-fuchsia-400 group-hover:shadow-[0_0_24px_6px_rgba(255,95,162,0.22)]"
              style={{ boxShadow: 'none', background: 'linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))' }}
            />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '10+', label: 'Websites Delivered' },
            { number: '10-15', label: 'Days Average Delivery' },
            { number: '98%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {stat.number}
              </div>
              <div className="text-white font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;