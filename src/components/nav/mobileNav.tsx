"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navigation - Hidden on desktop */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d1216] border-b border-[#594925]/20">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Name - Updated with description */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.svg"
                  alt="TaSis Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#ebae3a] font-inter-tight">
                  TASIS
                </span>
                <span className="text-xs text-[#594925]">
                  Tata Tertib Siswa
                </span>
              </div>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#ebae3a] p-2 hover:text-[#efbb4a] transition-colors"
              aria-label="Open menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        } z-40`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Navigation - Always present but transformed */}
      <div
        ref={sideNavRef}
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-[#0d1216] 
          transform transition-transform duration-300 ease-in-out 
          border-l border-[#594925]/20 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#ebae3a] p-2 
            hover:text-[#efbb4a] transition-colors"
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        {/* Navigation Links */}
        <div className="pt-16 px-6">
          <nav className="space-y-4">
            {[
              { name: "Beranda", href: "/" },
              { name: "Anggota", href: "/member" },
              { name: "Tentang Kami", href: "/comingSoon" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-[#ebae3a] 
                  transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
