import Image from 'next/image';

/**
 * PostersList Component
 * Displays a responsive grid of posters for national holidays and important dates
 * Features hover effects, background patterns, and gradient overlays
 * @returns {JSX.Element} A section containing a grid of poster images
 */
export default function PostersList() {
    const posters = [
        {
            title: "Hari Kesaktian Pancasila",
            date: "1 Oktober",
            image: "/images/posters/Hari Kesaktian Pancasila.jpg"
        },
        {
            title: "Hari Sumpah Pemuda",
            date: "28 Oktober",
            image: "/images/posters/SUMPAH PEMUDA.png"
        },
        {
            title: "Hari Pahlawan",
            date: "10 November",
            image: "/images/posters/IMG-20241110-WA0005.jpg"
        },
        {
            title: "Hari Ibu",
            date: "22 Desember",
            image: "/images/posters/Cream And Orange Bold Happy Mother's Day Your Story_20241222_105155_0000.png"
        },
        {
            title: "Natal 2024",
            date: "25 Desember",
            image: "/images/posters/SELAMAT NATAL.png"
        },
        {
            title: "Isra' Miraj 2025",
            date: "27 Januari",
            image: "/images/posters/PAMFLET HARI BESAR.png"
        },
        {
            title: "Imlek 2025",
            date: "29 Januari",
            image: "/images/posters/TAHUN BARU IMLEK_20250129_071105_0000.png"
        }
    ];

    return (
        <section className="relative px-6 py-8 bg-[#1f1c16]">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full">
                        <pattern
                            id="diagonalLines"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)"
                        >
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="40"
                                stroke="#ebae3a"
                                strokeWidth="2"
                            />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
                        Galeri Poster
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Koleksi poster untuk memperingati hari-hari besar nasional
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posters
                        .map((poster, index) => ({ ...poster, index }))
                        .sort((a, b) => b.index - a.index)
                        .map((poster, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-[#0d1216] 
                        border border-[#594925]/20 hover:border-[#ebae3a]/30 
                        transition-all duration-300"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={poster.image}
                                    alt={poster.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-[#ebae3a] font-semibold mb-1">
                                            {poster.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">{poster.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}