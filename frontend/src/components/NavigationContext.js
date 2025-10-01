'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const navigateWithTransition = (path) => {
    if (window.location.pathname === path) return;
    
    setIsNavigating(true);
    
    // Wait for fade out to complete, then navigate
    setTimeout(() => {
      router.push(path);
      // Reset navigation state after navigation
      setTimeout(() => {
        setIsNavigating(false);
      }, 100);
    }, 500); // Half the transition time for smooth crossfade
  };

  return (
    <NavigationContext.Provider value={{ isNavigating, navigateWithTransition }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
