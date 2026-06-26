import React from 'react';

export default function Footer() {
  const gridNodes = Array.from({ length: 24 });

  return (
    // Top padding at 96px, bottom padding at 48px
    <footer className="border-t border-[#F1F6F4]/5 bg-[#172B36] pt-24 pb-12 relative overflow-hidden">
      {/* Precision grid container alignment */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-4 h-4 bg-gradient-to-r from-[#FFC801] to-[#FF9932] rounded-sm" />
              <span className="font-mono text-base font-bold tracking-tight text-[#F1F6F4]">brick.ai</span>
            </div>
            <p className="text-[16px] text-[#D9E8E2]/40 max-w-sm leading-relaxed">
              Next-generation logical automation canvas and multi-agent deployment framework layers. Built for strict protocol telemetry execution tracking.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#FF9932] mb-4">Platform</h4>
            <ul className="space-y-3 text-[16px] text-[#D9E8E2]/60">
              <li><a href="#features" className="hover:text-[#F1F6F4] transition-colors duration-200">Core Canvas</a></li>
              <li><a href="#" className="hover:text-[#F1F6F4] transition-colors duration-200">Edge Engine</a></li>
              <li><a href="#pricing" className="hover:text-[#F1F6F4] transition-colors duration-200">Pricing Options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#D9E8E2]/80 mb-4">Resources</h4>
            <ul className="space-y-3 text-[16px] text-[#D9E8E2]/60">
              <li><a href="#" className="hover:text-[#F1F6F4] transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-[#F1F6F4] transition-colors duration-200">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#D9E8E2]/40 mb-4">Node Wave</h4>
            <div className="grid grid-cols-6 gap-1.5 w-24">
              {gridNodes.map((_, i) => (
                <div 
                  key={i} 
                  className="w-2.5 h-2.5 bg-[#114C5A]/30 rounded-sm footer-wave-brick"
                  style={{ animationDelay: `${(i % 6) * 120}ms` }}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="select-none pointer-events-none my-8 opacity-[0.02] text-center font-mono font-bold text-[8vw] leading-none text-[#F1F6F4] tracking-tighter uppercase">
          BRICK.AI
        </div>

        <div className="border-t border-[#F1F6F4]/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#D9E8E2]/40">
          <p>© 2026 Brick Intelligence Inc. All engineering systems operational.</p>
          <div className="flex space-x-6">
            <span>LATENCY: 12MS</span>
            <span className="text-emerald-400">CLUSTER: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}