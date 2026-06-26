import React from 'react';

export default function Testimonials() {
  const feed = [
    {
      title: 'Infrastructure that scales cleanly',
      comment: 'The core block reliability of Brick.ai is incredible. We migrated our entire multi-step logical pipeline models to their framework without encountering synchronization issues.',
      author: 'Marcus Vance',
      role: 'Principal Architect at Vertex Labs'
    },
    {
      title: 'Saved us months of R&D logic',
      comment: 'Instead of spending vital internal engineering hours constructing custom fallback layers, we integrated Brick.ai. We achieved platform system autonomy within hours.',
      author: 'Elena Rostova',
      role: 'Head of Infrastructure, PixelRoute AI'
    },
    {
      title: 'Unmatched telemetry data precision',
      comment: 'The system telemetry dashboard provides our monitoring networks with transparent node tracking logs. Truly foundational layer for our production infrastructure environment.',
      author: 'Devon Takahashi',
      role: 'Lead Systems Engineer, Neural Sync'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-28 brick-reveal">
      <div className="max-w-2xl mb-14">
        <h2 className="font-sans text-3xl md:text-[48px] font-bold tracking-tight text-[#F1F6F4]">
          Trusted by the pioneers.
        </h2>
      </div>

      {/* Grid gap and padding mapped precisely to 32px values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {feed.map((card, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-b from-[#114C5A]/10 to-transparent border border-[#114C5A]/20 rounded-[20px] p-8 flex flex-col justify-between hover:border-[#114C5A]/50 group transition-all duration-300 transform will-change-transform"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div>
              <div className="text-[#114C5A] text-xl font-serif mb-5 transform transition-transform duration-500 group-hover:rotate-12 group-hover:text-[#FF9932]">“</div>
              <h3 className="font-sans text-base font-semibold text-[#F1F6F4] mb-3">"{card.title}"</h3>
              <p className="text-[#D9E8E2]/70 text-[16px] leading-relaxed mb-8">
                {card.comment}
              </p>
            </div>
            <div className="border-t border-[#F1F6F4]/5 pt-5 flex items-center justify-between">
              <div>
                <p className="font-sans text-sm font-semibold text-[#F1F6F4]">{card.author}</p>
                <p className="text-xs font-mono text-[#D9E8E2]/40 mt-1">{card.role}</p>
              </div>
              <div className="w-7 h-7 bg-[#114C5A]/30 rounded-full border border-[#114C5A]/60 overflow-hidden transform transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}