import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

/**
 * Footer component for the TaSis website
 * Contains company info, quick links, contact information, and social media links
 * Features a decorative background pattern and responsive grid layout
 * @returns Footer component with multiple sections and bottom copyright bar
 */
export default function Footer() {
  return (
    <footer className="relative bg-[#0d1216] text-white">
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <path
              key={index}
              d={`M${-200 + index * 60},800 L${index * 60},0`}
              stroke="#ebae3a"
              strokeWidth="1"
              strokeOpacity={0.3}
              fill="none"
            />
          ))}
          {Array.from({ length: 50 }).map((_, index) => (
            <path
              key={`second-${index}`}
              d={`M${1640 - index * 60},800 L${1440 - index * 60},0`}
              stroke="#594925"
              strokeWidth="1"
              strokeOpacity={0.2}
              fill="none"
            />
          ))}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="TaSis Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-xl font-bold font-inter-tight text-[#ebae3a]">
                TASIS
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tim Tata Tertib Siswa SMKN 2 Depok adalah tim yang bertugas untuk
              memberikan layanan keamanan dan penegakan peraturan yang
              profesional di lingkungan sekolah.
            </p>
          </div>

          <div className="space-y-4 relative">
            <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Acara", href: "/events" },
                { name: "Pengaduan", href: "/reporting" },
                { name: "Tata Tertib", href: "/regulation" },
                { name: "Pengembang", href: "https://rejaka.me"}
              ].map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#ebae3a] transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 relative">
            <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
              Hubungi Kami
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+6282141884664"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ebae3a] transition-colors duration-300 group"
                >
                  <FaPhone className="text-[#ebae3a] group-hover:scale-110 transition-transform duration-300" />
                  <span>+62 821-4188-4664 (Rejaka)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tasis@stembayo.sch.id"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ebae3a] transition-colors duration-300 group"
                >
                  <FaEnvelope className="text-[#ebae3a] group-hover:scale-110 transition-transform duration-300" />
                  <span>tasis@stembayo.sch.id</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=SMKN+2+Depok+Sleman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#ebae3a] transition-colors duration-300 group"
                >
                  <FaMapMarkerAlt className="text-[#ebae3a] group-hover:scale-110 transition-transform duration-300" />
                  <span>
                    Mrican, Caturtunggal, Depok, Sleman, Yogyakarta 55281
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 relative">
            <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
              Ikuti Kami
            </h3>
            <div className="flex gap-4">
              {[{ icon: <FaInstagram />, href: "https://www.instagram.com/tasisstembayo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="relative w-10 h-10 rounded-full bg-[#1f1c16] flex items-center justify-center
                      text-[#ebae3a] hover:bg-[#ebae3a] hover:text-[#0d1216] transition-all duration-300
                      border border-[#ebae3a]/20 hover:border-[#ebae3a] z-10"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f1c16]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tim Tata Tertib Siswa SMKN 2 Depok.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/comingSoon"
                className="text-gray-400 hover:text-[#ebae3a] text-sm transition-colors duration-300"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/comingSoon"
                className="text-gray-400 hover:text-[#ebae3a] text-sm transition-colors duration-300"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
