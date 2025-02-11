import Link from 'next/link';
import { FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, 
         FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#0d1216] text-white">
    {/* Background Pattern */}
    <div className="absolute inset-0 z-0">
      <svg
        className="absolute w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Diagonal lines pattern */}
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
        {/* Second set of lines with different angle */}
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
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#ebae3a] text-2xl" />
              <h3 className="text-xl font-bold font-inter-tight text-[#ebae3a]">TaSis</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Memberikan layanan keamanan dan penegakan peraturan profesional untuk lingkungan pendidikan yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 relative"> {/* Added relative */}
              <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
                Tautan Cepat
              </h3>
              <ul className="space-y-2">
                {['Beranda', 'Tentang Kami', 'Layanan', 'Kontak'].map((item) => (
                  <li key={item} className="relative"> {/* Added relative */}
                    <Link 
                      href="#" 
                      className="text-gray-300 hover:text-[#ebae3a] transition-colors duration-300 block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-[#ebae3a]" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-[#ebae3a]" />
                <span>info@tasis.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-[#ebae3a]" />
                <span>Jl. Contoh No. 123, Kota, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 relative"> {/* Added relative */}
              <h3 className="text-lg font-semibold text-[#ebae3a] font-inter-tight">
                Ikuti Kami
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, href: '#' },
                  { icon: <FaTwitter />, href: '#' },
                  { icon: <FaInstagram />, href: '#' },
                  { icon: <FaLinkedinIn />, href: '#' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
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

      {/* Bottom Footer */}
      <div className="border-t border-[#1f1c16]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tim Tata Tertib Siswa SMKN 2 Depok. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-[#ebae3a] text-sm transition-colors duration-300"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                href="#" 
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