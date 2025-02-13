import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Interface for event data structure
 */
interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    status: string;
}

/**
 * EventList Component
 * Renders a list of upcoming events with their details including title, date, time, and location
 * @returns JSX.Element - A section containing the event list
 */
export default function EventList() {
    const events: Event[] = [
        {
            title: "Sosialisasi Tata Tertib Siswa",
            date: "Februari 2025",
            time: "Akan diumumkan",
            location: "Ruang Nakula Sadewa SMKN 2 Depok Sleman",
            description: "Sosialisasi peraturan dan tata tertib sekolah kepada seluruh ketua kelas 10 dan 11 SMKN 2 Depok Sleman.",
            status: "upcoming"
        }
    ];

    return (
        <section className="relative px-6 py-8 bg-[#0d1216]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
                        Program Terencana
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Agenda kegiatan yang telah kami rencanakan
                    </p>
                </div>

                <div className="grid gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1c16] p-8 rounded-xl border border-[#594925]/20 hover:border-[#ebae3a]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#ebae3a]/5"
                        >
                            <h3 className="text-2xl font-bold text-[#ebae3a] mb-4">
                                {event.title}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaCalendarAlt className="text-[#ebae3a]" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaClock className="text-[#ebae3a]" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaMapMarkerAlt className="text-[#ebae3a]" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {event.description}
                            </p>

                            <div className="mt-6">
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ebae3a]/10 text-[#ebae3a] text-sm">
                                    Akan Datang
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}