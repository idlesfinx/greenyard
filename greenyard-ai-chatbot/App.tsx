import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import { Bot, X, MessageSquare, ChevronDown } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    // In a real integration, this outer div might be your existing website's container. 
    // We use pointer-events-none so clicks pass through to your site, except for our widget.
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-end justify-end p-4 sm:p-6">
      
      {/* Chat Window Container */}
      <div 
        className={`
          pointer-events-auto
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right
          w-full sm:w-[380px] h-[600px] max-h-[80vh]
          bg-dark-950 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10
          flex flex-col overflow-hidden mb-4
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
        `}
      >
        {/* Widget Header */}
        <div className="bg-dark-900 p-4 border-b border-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
             <div className="relative">
               <div className="w-10 h-10 rounded-full bg-neon-500 flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(60,242,22,0.4)]">
                 <Bot size={20} />
               </div>
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-500 border-2 border-dark-900 rounded-full"></div>
             </div>
             <div>
               <h3 className="font-bold text-white text-sm">Yard Assistant</h3>
               <p className="text-[10px] text-neon-500 font-mono tracking-wider">ONLINE // AI POWERED</p>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-hidden relative">
           <ChatInterface />
        </div>
      </div>

      {/* Floating Action Button (Launcher) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          pointer-events-auto
          relative group flex items-center justify-center
          w-14 h-14 rounded-full 
          bg-neon-500 text-black 
          shadow-[0_0_20px_rgba(60,242,22,0.4)]
          hover:shadow-[0_0_30px_rgba(60,242,22,0.6)]
          hover:scale-110 active:scale-95
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        `}
      >
        <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
          <MessageSquare size={24} fill="black" />
        </div>
        <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
          <ChevronDown size={28} />
        </div>

        {/* Tooltip hint */}
        <div className={`
            absolute right-16 bg-dark-800 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap
            transition-all duration-300 origin-right
            ${!isOpen && isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-2'}
        `}>
            Need help?
        </div>
      </button>

    </div>
  );
}

export default App;