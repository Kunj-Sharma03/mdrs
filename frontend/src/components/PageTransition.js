'use client';

import { useState, useEffect } from 'react';

export default function PageTransition({ children, isNavigating }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (isNavigating) {
      // Start fade out
      setShowOverlay(true);
      setShowContent(false);
      
      // After fade completes, hide overlay and show new content
      const timer = setTimeout(() => {
        setShowOverlay(false);
        setShowContent(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  return (
    <>
      {/* Content */}
      <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {/* Page Transition Overlay - Same as Loading Screen */}
      {showOverlay && (
        <div 
          className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${
            showOverlay && !showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #F7F016 100%)'
          }}
        />
      )}
    </>
  );
}
