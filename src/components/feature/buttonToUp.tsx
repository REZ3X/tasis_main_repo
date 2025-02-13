'use client'

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

/**
 * ButtonToUp Component
 * Renders a floating button that appears when scrolling down the page.
 * When clicked, smoothly scrolls the page back to the top.
 * Button appears after scrolling 300px from the top.
 */
export default function ButtonToUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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