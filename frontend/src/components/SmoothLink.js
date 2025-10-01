'use client';

import { useNavigation } from './NavigationContext';

export default function SmoothLink({ href, children, className, activeClassName = "", isActive = false }) {
  const { navigateWithTransition } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigateWithTransition(href);
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </a>
  );
}
