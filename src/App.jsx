import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Premium entry observer for scroll-triggered visual sequences
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.02
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('brick-entered');
        }
      });
    }, observerOptions);

    const revealTargets = document.querySelectorAll('.brick-fade-up');
    revealTargets.forEach((el) => observer.observe(el));

    // Page-wide lightweight pointer tracking for synchronized parallax loops
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#172B36] text-[#F1F6F4] font-sans antialiased selection:bg-[#FFC801] selection:text-[#172B36] overflow-x-hidden relative"
      style={{
        '--global-px': `${mousePos.x}px`,
        '--global-py': `${mousePos.y}px`
      }}
    >
      {/* Global CSS Style Layer for Custom Core Keyframes & Native Variables */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: reduce) {
          .brick-fade-up, .brick-engine-block, .line-draw, .floating-loop {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        /* Fluid Entrance State Configurations */
        .brick-fade-up {
          opacity: 0;
          transform: translate3d(0, 32px, 0);
          will-change: transform, opacity;
          transition: transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .brick-fade-up.brick-entered {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* Sequential Item Delays for Grid Modules */
        .stagger-grid > *:nth-child(1) { transition-delay: 0ms; }
        .stagger-grid > *:nth-child(2) { transition-delay: 100ms; }
        .stagger-grid > *:nth-child(3) { transition-delay: 200ms; }
        .stagger-grid > *:nth-child(4) { transition-delay: 300ms; }

        /* Structural Text Line Masks */
        @keyframes lineRevealUp {
          from { transform: translate3d(0, 100%, 0); opacity: 0; }
          to { transform: translate3d(0, 0, 0); opacity: 1; }
        }
        .animate-reveal-line {
          animation: lineRevealUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Hero Engine Core Physics Pipeline */
        @keyframes engineCubeDrop {
          0% { transform: translate3d(0, -180px, 0) scale3d(0.8, 1.2, 1); opacity: 0; }
          60% { transform: translate3d(0, 10px, 0) scale3d(1.05, 0.95, 1); opacity: 1; }
          75% { transform: translate3d(0, -5px, 0) scale3d(0.98, 1.02, 1); }
          100% { transform: translate3d(0, 0, 0) scale3d(1, 1, 1); opacity: 1; }
        }
        
        /* Continuous Subtle Floating Space Loop */
        @keyframes slowFloatLoop {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        .ambient-float {
          animation: slowFloatLoop 6s infinite ease-in-out;
        }

        /* Soft Text Accented Glow Pulse */
        @keyframes softTextGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,200,1,0.2); }
          50% { text-shadow: 0 0 35px rgba(255,200,1,0.5); }
        }
        .text-accent-glow {
          animation: softTextGlow 4s infinite ease-in-out;
        }

        /* Interactive Card Border Gradient Engine */
        .premium-border-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1.5px;
          background: linear-gradient(135deg, rgba(255,200,1,0.4), rgba(255,153,50,0.1), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: opacity 400ms ease;
        }
      `}} />

      {/* Ambient Moving Radial Background Glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-b from-[#114C5A]/15 to-transparent blur-[160px] rounded-full pointer-events-none transform mix-blend-screen transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(calc(-50% + (var(--global-px) * 0.3)), var(--global-py) * 0.3, 0)` }}
      />

      <Navbar />
      
      {/* Explicit 120px Major Section Rhythm Stack */}
      <main className="relative z-10 flex flex-col gap-[120px]">
        <Hero />
        <TrustedCompanies />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}