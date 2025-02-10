import { FaShieldAlt, FaBalanceScale, FaBullseye, FaHandshake } from 'react-icons/fa';

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
                Menjadi standar keunggulan dalam keamanan pendidikan dan penegakan 
                peraturan, menciptakan lingkungan di mana pembelajaran dapat 
                berkembang melalui keamanan yang terjamin dan budaya saling menghormati.
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
                    Berkomitmen untuk memberikan layanan keamanan terbaik dengan 
                    standar profesional tertinggi.
                  </p>
                </div>
                <div className="p-4 bg-[#0d1216]/60 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHandshake className="text-[#efbb4a] w-5 h-5" />
                    <h3 className="text-[#efbb4a] font-inter-tight font-semibold text-lg">
                      Integritas
                    </h3>
                  </div>
                  <p className="text-[#594925]">
                    Menjunjung tinggi kejujuran dan etika dalam setiap aspek 
                    pekerjaan kami.
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
                Menyediakan lingkungan pendidikan yang aman dan tertib melalui 
                pendekatan keamanan yang profesional dan penerapan peraturan yang 
                efektif, sambil mempertahankan nilai-nilai integritas, kehormatan, 
                dan rasa hormat dalam setiap tindakan kami.
              </p>
              <ul className="space-y-4 text-[#efbb4a]">
                <li className="flex items-center gap-3">
                  <FaBalanceScale className="w-5 h-5" />
                  Keamanan Kampus 24/7
                </li>
                <li className="flex items-center gap-3">
                  <FaBalanceScale className="w-5 h-5" />
                  Penegakan Peraturan yang Adil
                </li>
                <li className="flex items-center gap-3">
                  <FaBalanceScale className="w-5 h-5" />
                  Respons Cepat Terhadap Insiden
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}