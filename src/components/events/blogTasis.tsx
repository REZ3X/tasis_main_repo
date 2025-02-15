'use client'

import { FaNewspaper } from 'react-icons/fa';

export default function BlogTasis() {
  return (
    <section className="px-6 py-12 bg-[#1f1c16] min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex p-6 bg-[#0d1216] rounded-full mb-8">
          <FaNewspaper className="w-16 h-16 text-[#ebae3a]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#ebae3a] mb-6">
          Blog TASIS Segera Hadir
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Kami sedang menyiapkan konten menarik untuk berbagi cerita, pengalaman, 
          dan informasi seputar kegiatan TASIS. Nantikan update selanjutnya!
        </p>

        <div className="flex justify-center gap-4">
          <div className="w-3 h-3 bg-[#ebae3a] rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-[#ebae3a] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-[#ebae3a] rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </section>
  );
}