'use client'

import { useEffect, useState } from 'react';

/**
 * Loader Component
 * Displays a full-screen loading animation with a logo and spinner
 * Automatically fades out once the page content is ready
 */
export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0d1216]
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        transition-opacity duration-500`}
    >
      <div className="relative">
        {/* Logo */}
        <div className="w-24 h-24 relative mb-8">
          <svg
            className="absolute inset-0"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#594925"
              strokeWidth="2"
              className="opacity-20"
            />
            <path
              d="M50 5 A45 45 0 0 1 95 50"
              stroke="#ebae3a"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-spin origin-center"
              style={{ animationDuration: '1s' }}
            />
          </svg>
          
          {/* Your logo or text here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#ebae3a] font-inter-tight">
              TASIS
            </span>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-[#ebae3a] text-sm animate-pulse">
            Memuat...
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -inset-10 -z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebae3a]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#594925]/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}