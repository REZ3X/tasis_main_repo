'use client'

import Image from 'next/image';

/**
 * Gallery Component
 * Displays a responsive grid of images with hover effects
 * Images are displayed in a masonry-style layout with varying sizes
 * Each image has a hover effect showing its description
 */
export default function Gallery() {
  const images = [
    {
      src: "/images/piket.jpg",
      alt: "Piket Rutin",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/images/allin.jpg",
      alt: "Rapat Rutin Perdana",
      className: "col-span-2 row-span-2"
    },
    {
      src: "/images/tasishutri.JPG",
      alt: "Setelah Upacara Pengibaran Bendera",
      className: "col-span-1 row-span-2"
    },
    {
      src: "/images/tss.JPG",
      alt: "Setelah Upcara Penurunan Bendera",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/images/upcr.JPG",
      alt: "Petugas Presensi Upcara TASIS",
      className: "col-span-2 row-span-1"
    },
    {
      src: "/images/upcr2.JPG",
      alt: "Petugas Presensi Upacara TASIS",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="relative px-6 py-20 bg-[#1f1c16] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Galeri Kegiatan
          </h2>
          <p className="text-gray-300 text-lg">
            Dokumentasi kegiatan dan aktivitas Tim TASIS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}