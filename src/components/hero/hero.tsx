import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[-70px] flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 bg-[#0d1216] min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          {/* First set of waves with more pronounced curves */}
          {Array.from({ length: 45 }).map((_, index) => (
            <path
              key={index}
              d={`M0,${150 + index * 12} C180,${90 + index * 12} 360,${
                210 + index * 12
              } 540,${150 + index * 12} C720,${90 + index * 12} 900,${
                210 + index * 12
              } 1080,${150 + index * 12} C1260,${90 + index * 12} 1440,${
                210 + index * 12
              } 1440,${150 + index * 12}`}
              fill="none"
              stroke="#f0c158"
              strokeWidth="1.2"
              strokeOpacity={0.5}
            />
          ))}
          {/* Second set of waves with different curve pattern */}
          {Array.from({ length: 45 }).map((_, index) => (
            <path
              key={`second-${index}`}
              d={`M0,${350 + index * 12} C180,${290 + index * 12} 360,${
                410 + index * 12
              } 540,${350 + index * 12} C720,${290 + index * 12} 900,${
                410 + index * 12
              } 1080,${350 + index * 12} C1260,${290 + index * 12} 1440,${
                410 + index * 12
              } 1440,${350 + index * 12}`}
              fill="none"
              stroke="#7a6435"
              strokeWidth="1.2"
              strokeOpacity={0.4}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6 lg:pr-12 relative z-10">
        <h1 className="font-inter-tight text-5xl lg:text-6xl font-black text-[#ebae3a] leading-tight">
          Garda Terdepan <br />
          <span className="text-[#efbb4a]">Penerapan Tata Tertib Stembayo</span>
        </h1>

        <h2 className="font-inter-tight text-xl lg:text-2xl font-semibold text-[#594925]">
          Penertiban dan Kemananan Profesional
        </h2>

        <p className="font-inter-tight text-lg text-white max-w-2xl leading-relaxed">
          Tim Tata Tertib Siswa (TASIS) SMKN 2 Depok Sleman. Kami berkomitmen menciptakan lingkungan belajar yang tertib
          dan teratur.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            className="px-8 py-4 bg-[#ebae3a] text-[#231918] font-inter-tight font-bold 
            rounded-md hover:bg-[#efbb4a] transition-colors duration-300"
          >
            Visi dan Misi Kami
          </button>

          <Link
            href="/comingSoon"
            className="px-8 py-4 bg-[#231918] text-[#ebae3a] font-inter-tight font-bold 
            rounded-md hover:bg-[#1f1c16] border border-[#ebae3a]/20 hover:border-[#ebae3a]
            transition-all duration-300"
          >
            Anggota
          </Link>

          <Link
            href="/comingSoon"
            className="px-8 py-4 bg-[#231918] text-[#ebae3a] font-inter-tight font-bold 
            rounded-md hover:bg-[#1f1c16] border border-[#ebae3a]/20 hover:border-[#ebae3a]
            transition-all duration-300"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      <div className="flex-1 mt-12 lg:mt-0 relative h-[200px] lg:h-[350px] w-full z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1216]/80 via-transparent to-[#0d1216]/80 z-10"></div>
        <Image
          src="/images/tss.JPG"
          alt="Security Team in Action"
          fill
          className="object-cover rounded-lg shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
