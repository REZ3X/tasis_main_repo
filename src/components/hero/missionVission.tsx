import {
  FaShieldAlt,
  FaBalanceScale,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="px-6 py-20 bg-[#0d1216]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Section */}
          <div className="relative overflow-hidden p-8 bg-[#231918] rounded-2xl border-2 border-[#594925]/30 shadow-lg shadow-[#594925]/10">
            {/* Background Icon */}
            <div className="absolute -right-20 -bottom-20 opacity-15">
              <FaBullseye className="w-64 h-64 text-[#ebae3a]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="font-inter-tight text-4xl font-bold text-[#ebae3a]">
                Visi Kami
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Menjadi standar keunggulan dalam penertiban dan penegakan tata
                tertib di lingkungan pendidikan, menciptakan lingkungan
                terintegrasi di mana pembelajran dapat berjalan secara tertib,
                teratur dan berkembang melalui penertiban dan keamanan yang
                terjamin.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-[#0d1216]/60 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHandshake className="text-[#efbb4a] w-5 h-5" />
                    <h3 className="text-[#efbb4a] font-inter-tight font-semibold text-lg">
                      Keunggulan
                    </h3>
                  </div>
                  <p className="text-[#594925]">
                    Berkomitmen untuk menjunjung tinggi tata tertib dan
                    peraturan sekolah melalui aksi nyata.
                  </p>
                </div>
                <div className="p-4 bg-[#0d1216]/60 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHandshake className="text-[#efbb4a] w-5 h-5" />
                    <h3 className="text-[#efbb4a] font-inter-tight font-semibold text-lg">
                      Digitalisasi
                    </h3>
                  </div>
                  <p className="text-[#594925]">
                    Menggunakan inovasi terkini berkaitan dengan teknologi
                    digital untuk menyebarkan, menerapkan, dan melakukan
                    kampanye taat peraturan sekolah.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section - Now Second */}
          <div className="relative overflow-hidden p-8 bg-[#1f1c16] rounded-2xl border-2 border-[#ebae3a]/20 shadow-lg shadow-[#ebae3a]/5">
            {/* Background Icon */}
            <div className="absolute -right-20 -bottom-20 opacity-15">
              <FaShieldAlt className="w-64 h-64 text-[#ebae3a]" />
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="font-inter-tight text-4xl font-bold text-[#ebae3a]">
                Misi Kami
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Membantu mewujudkan lingkungan belajar yang aman, nyaman,
                tertib, dan disiplin melalui berbagai aksi nyata. Melakukan
                penertiban tata tertib secara tertaur mencakup seluruh warga
                sekolah. Membantu dalam kegiatan keamanan di lingkungan sekolah.
                Menjadi garda terdepan dalam upaya penegakan tata tertib sekolah
                serta pencegahan pelanggaran peraturan.
              </p>
              <ul className="space-y-4 text-[#efbb4a]">
                <li className="flex items-center gap-3">
                  <FaBalanceScale className="w-5 h-5" />
                  Penegakan Tata Tertib Sekolah
                </li>
                <li className="flex items-center gap-3">
                  <FaShieldAlt className="w-5 h-5" />
                  Tindakan Prefentive Pelanggaran Peraturan
                </li>
                <li className="flex items-center gap-3">
                  <FaHandshake className="w-5 h-5" />
                  Perbantuan Keamanan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}