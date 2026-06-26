import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [engineState, setEngineState] = useState('drop'); 
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timerShatter = setTimeout(() => setEngineState('shatter'), 450);
    const timerNetwork = setTimeout(() => setEngineState('network'), 900);

    return () => {
      clearTimeout(timerShatter);
      clearTimeout(timerNetwork);
    };
  }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;
    setCoords({ x, y });
  };

  const bricks = [
    { baseTop: 'top-[20%]', baseLeft: 'left-[25%]', netTop: 'top-[15%]', netLeft: 'left-[10%]', size: 'w-10 h-10', bg: 'bg-[#114C5A]/30 border-[#114C5A]' },
    { baseTop: 'top-[35%]', baseLeft: 'left-[45%]', netTop: 'top-[22%]', netLeft: 'left-[48%]', size: 'w-12 h-12', bg: 'bg-gradient-to-br from-[#FFC801]/10 to-transparent border-[#FFC801]/30' },
    { baseTop: 'top-[50%]', baseLeft: 'left-[30%]', netTop: 'top-[60%]', netLeft: 'left-[15%]', size: 'w-14 h-14', bg: 'bg-[#172B36] border-[#114C5A]/40' },
    { baseTop: 'top-[40%]', baseLeft: 'left-[55%]', netTop: 'top-[75%]', netLeft: 'left-[45%]', size: 'w-11 h-11', bg: 'bg-gradient-to-br from-[#FF9932]/20 to-transparent border-[#FF9932]/40' },
    { baseTop: 'top-[25%]', baseLeft: 'left-[60%]', netTop: 'top-[30%]', netLeft: 'left-[80%]', size: 'w-14 h-14', bg: 'bg-[#114C5A]/40 border-[#114C5A]/80' },
    { baseTop: 'top-[55%]', baseLeft: 'left-[65%]', netTop: 'top-[65%]', netLeft: 'left-[75%]', size: 'w-12 h-12', bg: 'bg-[#172B36] border-[#FFC801]/20' }
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 pt-[120px] pb-[140px] mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden"
    >
      {/* Expanded Left Layout column container preventing headline layout splitting */}
      <div className="w-full text-left relative z-10 flex flex-col justify-center">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight leading-[1.1] text-[#F1F6F4] overflow-hidden">
          <span className="block opacity-0 animate-reveal-line" style={{ animationDelay: '100ms' }}>
            Build AI.
          </span>
          <span className="block opacity-0 animate-reveal-line bg-gradient-to-r from-[#FFC801] to-[#FF9932] bg-clip-text text-transparent text-accent-glow" style={{ animationDelay: '250ms' }}>
            Brick by Brick.
          </span>
        </h1>

        {/* Strict 32px Top Padding Margin Pass */}
        <p className="mt-8 text-[20px] text-[#D9E8E2]/70 font-normal leading-relaxed max-w-xl opacity-0 animate-reveal-line" style={{ animationDelay: '400ms' }}>
          Deploy custom enterprise agents and connect modular logic pathways effortlessly. Experience decentralized execution performance.
        </p>

        {/* Strict 40px Top Padding Margin Pass */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-reveal-line" style={{ animationDelay: '550ms' }}>
          <button className="font-mono text-[16px] font-bold bg-[#F1F6F4] text-[#172B36] hover:bg-[#D9E8E2] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative group flex items-center justify-center space-x-2">
            <span>Build a Workflow</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-xs">&rarr;</span>
          </button>
          <button className="font-mono text-[16px] font-medium bg-[#172B36] border border-[#114C5A]/40 text-[#D9E8E2] hover:bg-[#114C5A]/20 hover:text-[#F1F6F4] px-8 py-4 rounded-xl transition-all duration-300">
            Documentation
          </button>
        </div>
      </div>

      {/* Balanced 50% Right Column: Living Brick Engine Matrix */}
      <div className="h-[480px] w-full relative border border-[#114C5A]/10 bg-[#172B36]/30 rounded-[20px] overflow-hidden group">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFC801]/5 blur-[60px] rounded-full pointer-events-none" />

        {engineState === 'network' && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen">
            <path d="M 40 72 L 230 105 L 380 144 M 230 105 L 72 288 L 216 360 M 380 144 L 360 312 L 216 360" fill="none" stroke="#114C5A" strokeWidth="1" strokeDasharray="4 4" className="line-draw" />
          </svg>
        )}

        {bricks.map((brick, index) => {
          let posClass = 'top-[-100px] left-[40%] scale-50 opacity-0';
          if (engineState === 'drop') {
            posClass = 'top-[40%] left-[40%] scale-100 opacity-100';
          } else if (engineState === 'shatter') {
            posClass = `${brick.baseTop} ${brick.baseLeft} scale-105 opacity-100`;
          } else if (engineState === 'network') {
            posClass = `${brick.netTop} ${brick.netLeft} scale-100 opacity-100 ambient-float`;
          }

          return (
            <div
              key={index}
              className={`absolute border rounded-xl flex items-center justify-center backdrop-blur-sm shadow-xl transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) ${brick.size} ${brick.bg} ${posClass}`}
              style={{
                transitionDelay: `${index * 30}ms`,
                transform: engineState === 'network' 
                  ? `translate3d(calc(${coords.x * 0.2}px * ${index + 1} * 0.3), calc(${coords.y * 0.2}px * ${index + 1} * 0.3), 0) rotate(${index * 1.5}deg)` 
                  : '',
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="w-1.5 h-1.5 bg-[#FFC801]/40 rounded-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}