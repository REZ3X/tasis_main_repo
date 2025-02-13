import Link from 'next/link';
import Image from 'next/image';

export default function DesktopNav() {
  return (
<nav className="mobile:hidden laptop:fixed top-0 left-0 right-0 z-50 bg-[#0d1216] border-b border-[#594925]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Organization Name */}
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
                Tata Tertib Siswa
              </span>
            </div>
          </Link>


          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {[
              { name: 'Beranda', href: '/' },
              { name: 'Anggota', href: '/member' },
              { name: 'Pengaduan', href: '/comingSoon' },
              { name: 'Tentang Kami', href: '/comingSoon' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#594925] hover:text-[#ebae3a] transition-colors duration-300
                  relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ebae3a] transform scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300">
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}