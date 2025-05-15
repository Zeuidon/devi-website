import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  const [loadingDots, setLoadingDots] = useState('');
  
  useEffect(() => {
    // Simple loading animation effect
    const interval = setInterval(() => {
      setLoadingDots(dots => {
        if (dots.length >= 3) return '';
        return dots + '.';
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#A7C4BC]/30 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#73320D]">
          Coming Soon!
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-12">
          <p className="text-xl md:text-2xl mb-8 text-[#6A5ACD]">
            We're working on something beautiful and sustainable
            <span className="inline-block w-12 text-left">{loadingDots}</span>
          </p>
          
          {/* Loading animation */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-[#F4D19C] rounded-full opacity-25"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[#73320D] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
        
        <Link 
          to="/" 
          className="px-8 py-3 rounded-full text-white font-bold bg-[#6A5ACD] hover:bg-[#73320D] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;