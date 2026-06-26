import React, { useState, useMemo } from 'react';

const PRICING_MATRIX = {
  Developer: { USD: 0, EUR: 0, INR: 0 },
  "Scale Pro": { USD: 129, EUR: 119, INR: 9999 },
  "Enterprise Core": { custom: true }
};

const CURRENCIES = {
  USD: { symbol: '$', label: 'USD ($)' },
  EUR: { symbol: '€', label: 'EUR (€)' },
  INR: { symbol: '₹', label: 'INR (₹)' }
};

export default function Pricing() {
  const [currency, setCurrency] = useState('USD');
  const [billing, setBilling] = useState('monthly');

  const tiers = useMemo(() => {
    const baseData = [
      {
        name: 'Developer',
        tagline: 'Ideal for prototyping modular AI building block configurations.',
        features: ['Up to 3 custom agents', '15,000 baseline executions/mo', 'Community support channels', 'Standard edge network performance'],
        buttonText: 'Start Free Canvas',
        popular: false
      },
      {
        name: 'Scale Pro',
        tagline: 'For high-throughput platforms demanding sub-15ms latency metrics.',
        features: ['Unlimited custom agents', '500,000 premium executions/mo', 'Priority Slack support connection', 'Advanced visual debugger tool', 'SOC2 data governance tracking Framework System Structure'],
        buttonText: 'Upgrade to Scale',
        popular: true
      },
      {
        name: 'Enterprise Core',
        tagline: 'Custom limits, isolated compute infrastructure tenancy pools.',
        features: ['Infinite monthly executions', 'Custom SLA contracts', 'Isolated hardware tenancy layers', 'Dedicated system architect engineer', 'White-glove design training'],
        buttonText: 'Contact Systems Team',
        popular: false
      }
    ];

    return baseData.map(tier => {
      const pricingInfo = PRICING_MATRIX[tier.name];
      let priceDisplay = '';
      let periodDisplay = '';

      if (pricingInfo.custom) {
        priceDisplay = 'Custom';
        periodDisplay = 'tailored setup';
      } else {
        const monthlyPrice = pricingInfo[currency];
        const symbol = CURRENCIES[currency].symbol;

        if (monthlyPrice === 0) {
          priceDisplay = `${symbol}0`;
          periodDisplay = billing === 'annual' ? 'per year' : 'forever';
        } else {
          if (billing === 'annual') {
            const annualPrice = Math.round(monthlyPrice * 12 * 0.8);
            priceDisplay = `${symbol}${annualPrice.toLocaleString()}`;
            periodDisplay = 'per year';
          } else {
            priceDisplay = `${symbol}${monthlyPrice.toLocaleString()}`;
            periodDisplay = 'per month';
          }
        }
      }

      return { ...tier, price: priceDisplay, period: periodDisplay };
    });
  }, [currency, billing]);

  return (
    <section className="w-full py-28 bg-[#172B36]/20 border-t border-[#F1F6F4]/5 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 lg:px-10">
        
        {/* Title strictly at 56px bottom margin */}
        <div className="text-center max-w-2xl mx-auto mb-14 brick-reveal">
          <h2 className="font-sans text-3xl md:text-[48px] font-bold tracking-tight text-[#F1F6F4] leading-tight">
            Scale-friendly models.
          </h2>
        </div>

        {/* Enhanced Controls Row: Height, Padding, and Arrow Separation Fixes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 brick-reveal">
          {/* Height-enforced perfectly centered Toggle */}
          <div className="bg-[#114C5A]/15 border border-[#114C5A]/30 p-1 rounded-xl flex items-center relative h-12 w-64 shrink-0">
            <button
              onClick={() => setBilling('monthly')}
              className={`flex-1 h-full flex items-center justify-center font-mono text-[11px] uppercase tracking-wider transition-all duration-300 relative z-10 ${
                billing === 'monthly' ? 'text-[#172B36] font-bold' : 'text-[#D9E8E2]/70 hover:text-[#F1F6F4]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`flex-1 h-full flex items-center justify-center font-mono text-[11px] uppercase tracking-wider transition-all duration-300 relative z-10 ${
                billing === 'annual' ? 'text-[#172B36] font-bold' : 'text-[#D9E8E2]/70 hover:text-[#F1F6F4]'
              }`}
            >
              Annual
            </button>
            <div 
              className="absolute top-1 bottom-1 left-1 bg-[#F1F6F4] rounded-lg transition-transform duration-300 ease-out"
              style={{
                width: 'calc(50% - 4px)',
                transform: billing === 'annual' ? 'translateX(100%)' : 'translateX(0%)'
              }}
            />
          </div>

          {/* Expanded Currency Picker Dropdown with unclipped space for Arrow Icon */}
          <div className="relative h-12 w-48 shrink-0">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full h-full bg-[#114C5A]/15 border border-[#114C5A]/30 text-[#F1F6F4] font-mono text-[11px] uppercase tracking-wider pl-5 pr-12 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-[#FFC801] transition-colors"
            >
              {Object.keys(CURRENCIES).map((currKey) => (
                <option key={currKey} value={currKey} className="bg-[#172B36] text-[#F1F6F4]">
                  {CURRENCIES[currKey].label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#D9E8E2]/50">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Grid with equal cards height (items-stretch) and 32px padding/gap system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`rounded-[20px] p-8 flex flex-col justify-between bg-[#172B36] border transition-all duration-500 transform hover:scale-[1.02] brick-reveal h-full ${
                tier.popular 
                  ? 'popular-border-glow shadow-2xl shadow-black/30' 
                  : 'border-[#114C5A]/20 hover:border-[#114C5A]/40'
              }`}
            >
              <div>
                <h3 className="font-sans text-[20px] font-bold text-[#F1F6F4] mb-2">{tier.name}</h3>
                <p className="text-[16px] text-[#D9E8E2]/60 mb-8 leading-relaxed">{tier.tagline}</p>
                
                <div className="h-16 overflow-hidden mb-8 flex items-baseline space-x-2 relative">
                  <span className="font-sans text-4xl md:text-[48px] font-bold tracking-tight text-[#F1F6F4]">
                    {tier.price}
                  </span>
                  <span className="text-[16px] font-mono text-[#D9E8E2]/40">/ {tier.period}</span>
                </div>

                {/* Checklist Flex Alignment with exact layout 12px gap mapping */}
                <ul className="space-y-4 border-t border-[#F1F6F4]/5 pt-6 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-[16px] text-[#D9E8E2]/80 leading-normal">
                      <span className="text-[#FFC801] font-mono text-[14px] mt-[3px] shrink-0 select-none">✓</span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full font-mono text-[16px] font-medium py-3.5 rounded-xl transition-all duration-300 transform active:scale-98 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-[#FFC801] to-[#FF9932] text-[#172B36] font-bold shadow-md hover:opacity-95' 
                    : 'bg-[#114C5A]/10 border border-[#114C5A]/30 text-[#F1F6F4] hover:bg-[#114C5A]/20'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}