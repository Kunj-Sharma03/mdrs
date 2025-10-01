'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [animationPhase, setAnimationPhase] = useState('initial'); // initial, morphing, complete
  
  useEffect(() => {
    // Phase 1: Show loading screen for 2.5 seconds
    const timer1 = setTimeout(() => {
      setAnimationPhase('morphing');
    }, 2500);

    // Phase 2: Morphing animation (1.5 seconds)
    const timer2 = setTimeout(() => {
      setAnimationPhase('complete');
    }, 4000);

    // Phase 3: Complete loading
    const timer3 = setTimeout(() => {
      onLoadingComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoadingComplete]);

  return (
    <>
      {/* Loading Screen Background */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-1000 ease-in-out ${
          animationPhase === 'complete' 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #F7F016 100%)'
        }}
      >
      </div>

      {/* Morphing Logo and School Name */}
      <div 
        className={`fixed z-[60] transition-all duration-[1500ms] ease-in-out ${
          animationPhase === 'initial' 
            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' 
            : animationPhase === 'morphing'
            ? 'top-[1.25rem] left-[1.5rem] transform translate-x-0 translate-y-0'
            : 'top-[1.25rem] left-[1.5rem] transform translate-x-0 translate-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center space-x-4">
          {/* Morphing Logo */}
          <div 
            className={`bg-blue-600 rounded-lg flex items-center justify-center shadow-2xl transition-all duration-[1500ms] ease-in-out ${
              animationPhase === 'initial' 
                ? 'w-32 h-32' 
                : 'w-12 h-12'
            }`}
          >
            <span 
              className={`text-white font-black transition-all duration-[1500ms] ease-in-out ${
                animationPhase === 'initial' 
                  ? 'text-6xl' 
                  : 'text-xl'
              }`}
            >
              M
            </span>
          </div>
          
          {/* Morphing School Name */}
          <div className={`transition-all duration-[1500ms] ease-in-out ${
            animationPhase === 'initial' ? 'text-center' : 'text-left'
          }`}>
            <h1 
              className={`font-black text-gray-800 transition-all duration-[1500ms] ease-in-out ${
                animationPhase === 'initial' 
                  ? 'text-7xl mb-6' 
                  : 'text-xl mb-0'
              }`}
            >
              M.D.R.S.
            </h1>
            <p 
              className={`text-gray-600 font-semibold transition-all duration-[1500ms] ease-in-out ${
                animationPhase === 'initial' 
                  ? 'text-2xl opacity-100' 
                  : 'text-sm opacity-80'
              }`}
            >
              Memorial Public School
            </p>
          </div>
        </div>
      </div>

      {/* Gradient overlay that fades out */}
      <div 
        className={`fixed inset-0 z-[55] transition-opacity duration-1000 ${
          animationPhase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(247, 240, 22, 0.1) 0%, transparent 70%)'
        }}
      />
    </>
  );
}
