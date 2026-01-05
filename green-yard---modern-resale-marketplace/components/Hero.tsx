
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39FF14] opacity-[0.03] blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#39FF14] opacity-[0.05] blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#39FF14]">New: Premium AI Search</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
          EVERY TECH DESERVES <br />
          <span className="text-[#39FF14]">A SECOND CHANCE</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light">
          Experience the most sophisticated resale platform. We verify, restore, and 
          reimagine pre-loved luxury and tech for a circular future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#39FF14] text-black font-bold rounded-2xl shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:bg-[#2ecc12] transition-all transform hover:-translate-y-1">
            Shop Collection
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
            List an Item
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Verified Products', value: '12K+' },
            { label: 'CO2 Saved (Tons)', value: '450' },
            { label: 'Active Sellers', value: '8.4K' },
            { label: 'Avg. Savings', value: '45%' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
