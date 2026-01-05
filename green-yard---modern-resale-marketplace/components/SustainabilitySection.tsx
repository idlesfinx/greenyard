
import React from 'react';

const SustainabilitySection: React.FC = () => {
  return (
    <section id="stats" className="py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#39FF14]/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
            THE COST OF <br />
            <span className="text-[#39FF14]">NEW</span> IS TOO HIGH.
          </h2>
          <p className="text-white/50 text-lg mb-10 font-light leading-relaxed">
            Every year, millions of tons of high-quality electronics and furniture end up in landfills. 
            Green Yard aims to close the loop. When you buy pre-loved, you're not just saving money; 
            you're saving the planet from unnecessary carbon output.
          </p>

          <div className="space-y-6">
            {[
              { title: 'Circular Economy', desc: 'Extending product lifespan by an average of 4.2 years.', icon: '♻️' },
              { title: 'Carbon Neutrality', desc: 'Every transaction is offset by our reforestation partner.', icon: '🌳' },
              { title: 'Quality Guaranteed', desc: 'Our technicians inspect and verify every single unit.', icon: '🛡️' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square glass rounded-[64px] border border-[#39FF14]/20 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <span className="text-[#39FF14] text-xs font-black uppercase tracking-[0.2em]">Live Impact Metric</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-7xl font-black text-white">2.4M</span>
                <span className="text-2xl font-bold text-white/30">KG</span>
              </div>
              <p className="text-white/40 font-medium mt-2">Total CO2 Saved by our community this month.</p>
            </div>

            <div className="relative z-10 flex gap-1 items-end h-32">
              {[40, 65, 45, 90, 70, 85, 100, 80, 95, 60, 40].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#39FF14]/20 rounded-t-lg transition-all hover:bg-[#39FF14]"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10 flex justify-between items-center text-[10px] text-white/30 font-bold uppercase tracking-widest">
              <span>Jan 01</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
