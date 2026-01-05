
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#39FF14] rounded-lg rotate-12 flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          <span className="text-black font-black text-lg">G</span>
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">GREEN<span className="neon-text">YARD</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#browse" className="hover:text-[#39FF14] transition-colors">Browse Marketplace</a>
        <a href="#sell" className="hover:text-[#39FF14] transition-colors">Sell Items</a>
        <a href="#stats" className="hover:text-[#39FF14] transition-colors">Impact Stats</a>
        <a href="#ai" className="hover:text-[#39FF14] transition-colors">AI Assistant</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-all">
          Sign In
        </button>
        <button className="bg-[#39FF14] text-black px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:scale-105 transition-transform active:scale-95">
          Join Yard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
