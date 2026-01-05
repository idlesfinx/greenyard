
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import SustainabilitySection from './components/SustainabilitySection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#39FF14] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Sub-hero feature highlight */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">The Yard Verification™</h3>
                <p className="text-white/40 text-lg leading-relaxed max-w-lg">
                  Every item listed on our premium tier goes through a 48-point diagnostic check 
                  at our local hubs. Quality you can trust, price you can afford.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center text-[#39FF14]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <span className="text-white text-xs font-bold uppercase">Certified</span>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 bg-[#39FF14]/20 rounded-full flex items-center justify-center text-[#39FF14]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <span className="text-white text-xs font-bold uppercase">Best Price</span>
                </div>
             </div>
          </div>
        </section>

        <FeaturedGrid />
        
        <SustainabilitySection />

        {/* Call to action section */}
        <section className="py-24 px-6 bg-[#39FF14] text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">READY TO CLEAN <br /> YOUR YARD?</h2>
            <p className="text-xl font-medium mb-10 opacity-70">
              Join 150k+ eco-conscious shoppers saving an average of $340 per transaction.
            </p>
            <button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl">
              GET STARTED NOW
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
