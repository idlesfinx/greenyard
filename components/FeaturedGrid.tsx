
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';

const FeaturedGrid: React.FC = () => {
  return (
    <section id="browse" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Curated Drops</h2>
            <p className="text-white/40">Handpicked items that just arrived at the Yard.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Electronics', 'Furniture', 'Fashion', 'Outdoor'].map((cat) => (
              <button key={cat} className="whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium glass hover:border-[#39FF14]/40 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="group glass rounded-3xl overflow-hidden neon-border transition-all flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                    {product.condition}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#39FF14] text-black rounded-full text-[10px] font-bold shadow-lg">
                    🌱 -{product.savedCo2}kg CO2
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="text-xl font-black text-white">${product.price}</span>
                </div>
                <p className="text-sm text-white/40 mb-6">{product.category}</p>
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white hover:text-black transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
