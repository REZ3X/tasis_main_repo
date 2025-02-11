'use client'

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ButtonToUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll coordinate to 0
  // Behavior set to 'smooth' for smooth scrolling
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-3 rounded-full 
            bg-[#ebae3a] text-[#0d1216] shadow-lg 
            hover:bg-[#efbb4a] transition-all duration-300 
            transform hover:scale-110 z-50
            border-2 border-[#ebae3a]/20"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}