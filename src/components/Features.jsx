import React, { useState } from 'react';

export default function Features() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Infinite Visual Canvas',
      colSpan: 'md:col-span-2',
      desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and custom node actions to craft seamless execution pathways.',
      extra: () => (
        <div className="mt-8 bg-[#172B36]/60 border border-[#114C5A]/20 rounded-xl p-5 h-36 flex items-center justify-center relative overflow-hidden">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="h-2 w-16 bg-[#114C5A]/40 rounded-full" />
            <div className="h-2 w-24 bg-[#FFC801]/20 rounded-full" />
            <div className="h-2 w-12 bg-[#114C5A]/20 rounded-full" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Autonomous Trees',
      colSpan: 'md:col-span-1',
      desc: 'Run complex decision branches without manual oversight or operational loops. Our self-healing execution engine handles conditional rollbacks.',
      extra: () => (
        <div className="mt-6 flex items-center justify-between bg-[#FF9932]/5 border border-[#FF9932]/10 rounded-xl p-4">
          <div className="h-1.5 w-1/2 bg-[#FF9932]/20 rounded-full" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9932] animate-ping" />
        </div>
      )
    },
    {
      id: 3,
      title: '12ms Global Latency',
      colSpan: 'md:col-span-1',
      desc: 'Optimized for ultra-fast, raw transactional data distribution across geographically distributed edge inference networks.',
      extra: () => (
        <div className="mt-6 pt-4 border-t border-[#114C5A]/10 flex items-baseline space-x-2">
          <span className="text-4xl font-mono font-light text-[#F1F6F4]">99.99%</span>
        </div>
      )
    },
    {
      id: 4,
      title: 'Enterprise Guard & Vault',
      colSpan: 'md:col-span-2',
      desc: 'Every sensitive node data transfer is heavily shielded by hardware-level industrial encryption keys. Maintain granular access metrics over your organizational datasets.',
      extra: () => (
        <div className="mt-8 grid grid-cols-3 gap-3 font-mono text-[11px] text-center">
          <div className="py-3 px-2 bg-[#172B36]/60 rounded-xl border border-[#114C5A]/20 text-[#D9E8E2]/70 font-medium">SOC2 Type II</div>
          <div className="py-3 px-2 bg-[#172B36]/60 rounded-xl border border-[#114C5A]/20 text-[#D9E8E2]/70 font-medium">AES-256 GCM</div>
          <div className="py-3 px-2 bg-[#172B36]/60 rounded-xl border border-[#114C5A]/20 text-[#D9E8E2]/70 font-medium">ISO 27001</div>
        </div>
      )
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-28 flex flex-col">
      {/* Title to Content strictly at 56px (mb-14) */}
      <div className="max-w-3xl mb-14 brick-reveal">
        <h2 className="font-sans text-3xl md:text-[48px] font-bold tracking-tight text-[#F1F6F4] leading-tight">
          Engineered for extreme visual execution logic.
        </h2>
      </div>

      {/* Cards Gap and padding set to 32px (gap-8, p-8) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 shortcut-grid">
        {features.map((card) => {
          const isDimmed = hoveredCardId !== null && hoveredCardId !== card.id;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className={`${card.colSpan} bg-gradient-to-b from-[#114C5A]/10 to-transparent border border-[#114C5A]/20 rounded-[20px] p-8 flex flex-col justify-between group transition-all duration-500 ease-out transform will-change-transform brick-reveal premium-border-glow relative ${
                isDimmed ? 'opacity-40 scale-[0.99]' : 'opacity-100 hover:-translate-y-2 hover:rotate-[0.5deg]'
              }`}
            >
              <div>
                <div className="mb-6 flex items-center justify-end">
                  <span className="w-2 h-2 bg-[#114C5A]/30 rounded-sm transform transition-transform duration-500 group-hover:rotate-90 group-hover:bg-[#FFC801]" />
                </div>
                <h3 className="font-sans text-[20px] font-bold text-[#F1F6F4] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#D9E8E2]/70 text-[16px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
              {card.extra()}
            </div>
          );
        })}
      </div>
    </section>
  );
}