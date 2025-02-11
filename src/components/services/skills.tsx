import {
  FaShieldAlt,
  FaBalanceScale,
  FaBullseye,
  FaHandshake,
  FaUserTie,
  FaRunning,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section className="relative px-6 py-20 bg-[#1f1c16] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Kemampuan Tim
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tim kami memiliki kemampuan yang unggul dalam berbagai aspek yang
            diperlukan untuk memberikan layanan keamanan dan penegakan peraturan
            yang profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserTie size={30} />,
              title: "Profesionalisme",
              skills: [
                "Etika Kerja Tinggi",
                "Disiplin",
                "Integritas",
                "Tanggung Jawab",
              ],
            },
            {
              icon: <FaShieldAlt size={30} />,
              title: "Keahlian Keamanan",
              skills: [
                "Pengawasan Aktif",
                "Kontrol Akses",
                "Penyelidikan",
                "Pencegahan Insiden",
              ],
            },
            {
              icon: <FaBalanceScale size={30} />,
              title: "Penegakan Aturan",
              skills: [
                "Pengetahuan Regulasi",
                "Keadilan",
                "Konsistensi",
                "Penertiban",
              ],
            },
            {
              icon: <FaRunning size={30} />,
              title: "Kesiapsiagaan",
              skills: [
                "Respons Cepat",
                "Antisipasi",
                "Patroli Efektif",
                "Kewaspadaan",
              ],
            },
            {
              icon: <FaHandshake size={30} />,
              title: "Komunikasi",
              skills: [
                "Komunikasi Efektif",
                "Penanganan Konflik",
                "Koordinasi Tim",
                "Pencarian Informasi",
              ],
            },
            {
              icon: <FaBullseye size={30} />,
              title: "Pengembangan",
              skills: [
                "Digitalisasi",
                "Evaluasi Kinerja",
                "Adaptasi",
                "Pembaruan Prosedur",
              ],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0d1216] to-[#231918] p-6 rounded-xl
                border border-[#594925]/20 hover:border-[#ebae3a]/30 transition-all duration-500
                hover:shadow-lg hover:shadow-[#ebae3a]/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#ebae3a] group-hover:scale-110 transform transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#ebae3a] font-inter-tight group-hover:text-[#efbb4a] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#ebae3a]/50 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
