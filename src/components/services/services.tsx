import {
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-br from-[#231918] via-[#1f1c16] to-[#0d1216] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1f1c16]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4 hover:scale-105 transition-transform duration-300">
            Layanan Kami
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Memberikan keamanan dan penegakan peraturan yang profesional untuk
            lingkungan pendidikan yang lebih baik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          {[
            {
              icon: <FaShieldAlt size={40} />,
              title: "Patroli Kampus",
              description:
                "Pengawasan 24/7 untuk memastikan keamanan seluruh area kampus.",
            },
            {
              icon: <FaUserShield size={40} />,
              title: "Kontrol Akses",
              description:
                "Pengaturan dan pemantauan akses ke area-area tertentu kampus.",
            },
            {
              icon: <FaClock size={40} />,
              title: "Respons Cepat",
              description:
                "Penanganan cepat untuk setiap insiden keamanan yang terjadi.",
            },
            {
              icon: <FaClipboardCheck size={40} />,
              title: "Penegakan Aturan",
              description:
                "Implementasi konsisten peraturan kampus untuk ketertiban.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0d1216] to-[#231918] p-6 rounded-xl 
                border border-[#594925]/20 hover:border-[#ebae3a]/50 transition-all duration-500
                hover:shadow-lg hover:shadow-[#ebae3a]/10 hover:-translate-y-1"
            >
              <div className="mb-4 text-[#ebae3a] group-hover:scale-110 transform transition-all duration-300 ease-out">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#ebae3a] mb-2 font-inter-tight group-hover:text-[#efbb4a] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
