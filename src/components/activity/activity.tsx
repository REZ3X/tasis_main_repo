import { FaClock, FaCheckCircle } from 'react-icons/fa';

/**
 * Activity Component
 * Displays a section showing past and future activities in a two-column layout
 * Features a stylized background with gradient effects and interactive cards
 * @returns JSX.Element - A section containing activity cards
 */
export default function Activity() {
  const pastActivities = [
    {
      title: "Perbantuan Keamanan Clasmeet",
      date: "Desember 2024",
      description: "Membantu pengamanan kegiatan classmeet 2024 di SMKN 2 Depok Sleman."
    },
    {
      title: "Perbantuan Keamanan Diklat KBPL",
      date: "Januari 2025",
      description: "Membantu pengamanan kegiatan Diklat Sekbid KBPL 2025."
    },
    {
      title: "Perbantuan Keamanan Kajian KTYME-I",
      date: "Februari 2025",
      description: "Membantu pengamanan kegiatan Kajian KTYME-I 2025."
    }
  ];

  const futureActivities = [
    {
      title: "Perbantuan Keamanan Open House Stembayo",
      date: "Mei 2025",
      description: "Membantu pengamanan kegiatan Open House Stembayo 2025."
    },
    {
      title: "Perbantuan Keamanan History #5",
      date: "??? 2025",
      description: "Membantu pengamanan kegiatan History #5 2025."
    },
    {
      title: "Perbantuan Keamanan Kemah Besar 2025",
      date: "Mei 2025",
      description: "Membantu pengamanan kegiatan Kemah Besar 2025."
    }
  ];

  return (
    <section className="relative px-6 py-8 bg-[#1f1c16] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Aktivitas Kami
          </h2>
          <p className="text-gray-300 text-lg">
            Kegiatan yang telah dan akan kami laksanakan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <FaCheckCircle className="text-[#ebae3a] w-6 h-6" />
              <h3 className="text-2xl font-semibold text-[#ebae3a] font-inter-tight">
                Telah Terlaksana
              </h3>
            </div>
            {pastActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-[#0d1216] p-6 rounded-xl border border-[#594925]/20 
                  hover:border-[#ebae3a]/30 transition-all duration-300 
                  hover:shadow-lg hover:shadow-[#ebae3a]/5"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-[#ebae3a] font-semibold">{activity.title}</h4>
                  <span className="text-gray-400 text-sm">{activity.date}</span>
                </div>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <FaClock className="text-[#ebae3a] w-6 h-6" />
              <h3 className="text-2xl font-semibold text-[#ebae3a] font-inter-tight">
                Akan Datang
              </h3>
            </div>
            {futureActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-[#0d1216] p-6 rounded-xl border border-[#594925]/20 
                  hover:border-[#ebae3a]/30 transition-all duration-300 
                  hover:shadow-lg hover:shadow-[#ebae3a]/5"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-[#ebae3a] font-semibold">{activity.title}</h4>
                  <span className="text-gray-400 text-sm">{activity.date}</span>
                </div>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}