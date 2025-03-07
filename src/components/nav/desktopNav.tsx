'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useActiveRoute } from '@/hooks/useActiveRoute';

/**
 * DesktopNav Component
 * Renders the desktop navigation bar with logo and navigation links
 * Hidden on mobile devices, fixed position on laptop screens
 * Contains organization branding and main navigation menu
 */
export default function DesktopNav() {
  const isActive = useActiveRoute();

  const links = [
    { name: 'Beranda', href: '/' },
    { name: 'Anggota', href: '/member' },
    { name: "Acara", href: "/events"},
    { name: 'Pengaduan', href: '/reporting' },
    { name: 'Tentang Kami', href: '/comingSoon' },
    { name: "Tata Tertib", href: "/regulation"},
  ];

  return (
    <nav className="mobile:hidden laptop:fixed top-0 left-0 right-0 z-50 bg-[#0d1216] border-b border-[#594925]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/logo.svg"
                alt="TaSis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#ebae3a] font-inter-tight">
                TASIS
              </span>
              <span className="text-xs text-[#594925]">
                Tata Tertib Siswa (2024/2025)
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group py-2 transition-colors duration-300
                  ${isActive(link.href) 
                    ? 'text-[#ebae3a]' 
                    : 'text-[#594925] hover:text-[#ebae3a]'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ebae3a] transform 
                  transition-transform duration-300
                  ${isActive(link.href) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}