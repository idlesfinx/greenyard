
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#39FF14] rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg">G</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">GREEN<span className="neon-text">YARD</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Redefining the secondary market with style, tech, and a commitment to our planet.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Shop</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-[#39FF14]">Electronics</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Furniture</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Fashion</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Outdoors</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-[#39FF14]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Careers</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Press Kit</a></li>
              <li><a href="#" className="hover:text-[#39FF14]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Join the Newsletter</h5>
            <div className="flex gap-2">
              <input type="email" placeholder="email@example.com" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#39FF14]" />
              <button className="bg-[#39FF14] text-black px-4 py-3 rounded-xl font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-white/20 font-bold uppercase tracking-widest">
          <p>© 2024 Green Yard Technologies. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
