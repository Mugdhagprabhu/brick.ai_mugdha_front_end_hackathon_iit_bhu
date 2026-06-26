import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const links = [
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Customers' }
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
      isScrolled 
        ? 'border-[#F1F6F4]/5 bg-[#172B36]/85 backdrop-blur-xl pt-8 pb-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]' 
        : 'border-transparent bg-transparent pt-10 pb-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Prominent Logo (Scaled up 35%) */}
        <div className="flex items-center space-x-4 cursor-pointer group shrink-0">
          <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="absolute inset-0 bg-gradient-to-tr from-[#FF9932] to-[#FFC801] rounded-md transform group-hover:rotate-45 transition-transform duration-700 shadow-[0_0_15px_rgba(255,200,1,0.3)]" />
            <span className="relative z-10 font-mono text-[13px] font-black text-[#172B36]">B</span>
          </div>
          <span className="font-mono text-2xl font-bold tracking-tight text-[#F1F6F4]">
            brick<span className="text-[#D9E8E2]/60 font-light">.ai</span>
          </span>
        </div>

        {/* Navigation Links with generous 48px spacing */}
        <div className="hidden md:flex items-center gap-12 relative">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveTab(link.id)}
              className={`text-[14px] font-medium tracking-wide relative py-2 transition-colors duration-300 ${
                activeTab === link.id ? 'text-[#F1F6F4]' : 'text-[#D9E8E2]/70 hover:text-[#F1F6F4]'
              }`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFC801] rounded-full transition-all duration-300 transform scale-x-100" />
              )}
            </a>
          ))}
        </div>

        {/* Premium Action Buttons with 32px spacing and upgraded sizing */}
        <div className="hidden md:flex items-center gap-8 shrink-0">
          <button className="text-[14px] font-medium text-[#D9E8E2]/70 hover:text-[#F1F6F4] transition-colors py-2">
            Sign In
          </button>
          <button className="text-[14px] font-mono font-semibold bg-[#F1F6F4] text-[#172B36] hover:bg-[#D9E8E2] px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(241,246,244,0.2)] active:scale-95">
            Deploy Now
          </button>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-[#D9E8E2] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-full h-[1.5px] bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Panel Expansion */}
      <div className={`md:hidden overflow-hidden bg-[#172B36]/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 opacity-100 border-b border-[#F1F6F4]/5' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 py-6 space-y-4 flex flex-col">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={() => { setIsOpen(false); setActiveTab(link.id); }} 
              className="text-sm font-medium text-[#D9E8E2]/80 hover:text-[#F1F6F4]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#F1F6F4]/5 flex flex-col space-y-3">
            <button className="text-left text-sm font-medium text-[#D9E8E2]/70">Sign In</button>
            <button className="text-center bg-[#F1F6F4] text-[#172B36] font-mono text-xs py-2.5 rounded-md font-medium">Deploy Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}