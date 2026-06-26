import React from 'react';

export default function TrustedCompanies() {
  const companies = [
    { name: 'Aetna', icon: '♣ aetna' },
    { name: 'Cigna', icon: 'cigna' },
    { name: 'Anthem', icon: 'Anthem' },
    { name: 'CVS Pharmacy', icon: 'CVS pharmacy' },
    { name: 'UnitedHealthcare', icon: 'UnitedHealthcare' }
  ];

  return (
    <section className="py-14 border-y border-[#F1F6F4]/5 bg-[#172B36]/20 brick-scroll-reveal">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#D9E8E2]/40 mb-10">
          TRUSTED BY LEADERS IN ENTERPRISE SYSTEMS & LABS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="font-mono text-lg font-medium tracking-tight text-[#D9E8E2]/30 select-none hover:text-[#F1F6F4] hover:scale-105 transition-all duration-300 ease-out cursor-default"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {company.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}