'use client';

import { useState, useEffect } from 'react';

export function Container({ children, className = '', ...props }) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Grid({ children, cols = 1, gap = 'gap-6', className = '', responsive = true, ...props }) {
  const baseClasses = `grid ${gap}`;
  
  let gridClass = '';
  if (typeof cols === 'number') {
    gridClass = `grid-cols-${cols}`;
  } else {
    gridClass = cols;
  }
  
  const responsiveClasses = responsive ? `
    sm:grid-cols-2 
    md:${cols >= 3 ? 'grid-cols-2' : 'grid-cols-1'} 
    lg:${cols >= 3 ? 'grid-cols-3' : cols >= 2 ? 'grid-cols-2' : 'grid-cols-1'}
    xl:${cols >= 4 ? 'grid-cols-4' : cols >= 3 ? 'grid-cols-3' : cols >= 2 ? 'grid-cols-2' : 'grid-cols-1'}
  ` : '';
  
  return (
    <div className={`${baseClasses} ${gridClass} ${responsiveClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Card({ children, className = '', hover = false, ...props }) {
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({ children, className = '', ...props }) {
  return (
    <section className={`py-12 ${className}`} {...props}>
      {children}
    </section>
  );
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

// 响应式断点检测Hook
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else if (width >= 640) setBreakpoint('sm');
      else setBreakpoint('xs');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return breakpoint;
}

// 移动端检测Hook
export function useMobile() {
  const breakpoint = useBreakpoint();
  return ['xs', 'sm'].includes(breakpoint);
}