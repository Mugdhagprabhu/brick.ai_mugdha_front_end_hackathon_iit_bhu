import React from 'react';

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-28 brick-reveal">
      {/* Strict 80px interior card padding layer applied directly */}
      <div className="bg-gradient-to-b from-[#114C5A]/15 to-transparent border border-[#114C5A]/30 rounded-[24px] p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
        
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFC801]/5 blur-[100px] rounded-full pointer-events-none transform transition-transform duration-700 group-hover:scale-110" />

        <div className="max-w-2xl text-left">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#F1F6F4] mb-4">
            Ready to deploy your next autonomous system?
          </h2>
          <p className="text-[#D9E8E2]/70 text-base leading-relaxed font-normal">
            Get started instantly with our modular infrastructure suite. Build resilient custom pathways, manage API keys seamlessly, and scale workflow compute power effortlessly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 relative z-10">
          <button className="w-full sm:w-auto font-mono text-xs font-bold bg-[#F1F6F4] text-[#172B36] hover:bg-[#D9E8E2] px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl active:scale-97">
            Create Free Account
          </button>
          <button className="w-full sm:w-auto font-mono text-xs font-medium bg-transparent border border-[#D9E8E2]/30 text-[#D9E8E2] hover:text-[#F1F6F4] hover:border-[#F1F6F4] px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5">
            Talk to Architect
          </button>
        </div>
      </div>
    </section>
  );
}