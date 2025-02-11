import Link from 'next/link';
import { FaArrowLeft, FaClock } from 'react-icons/fa';

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-[#0d1216] flex flex-col items-center justify-center px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Icon */}
        <div className="inline-flex p-6 bg-[#1f1c16] rounded-full mb-6">
          <FaClock className="w-16 h-16 text-[#ebae3a]" />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ebae3a] font-inter-tight">
            Coming Soon
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Halaman ini sedang dalam pengembangan. Silakan kembali lagi nanti.
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#231918] text-[#ebae3a] 
            rounded-lg hover:bg-[#1f1c16] border border-[#ebae3a]/20 hover:border-[#ebae3a]
            transition-all duration-300 mt-8 relative"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </main>
  );
}