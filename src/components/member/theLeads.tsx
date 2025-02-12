import Image from "next/image";

export default function TheLeads() {
  const leaders = [
    {
      name: "Rani Anggraini",
      role: "Ketua 1",
      image: "/images/female.png",
      order: "md:order-1",
    },
    {
      name: "Rejaka Abimanyu S.",
      role: "Koordinator",
      image: "/images/male.png",
      order: "md:order-2 scale-110",
    },
    {
      name: "M. Rizqullah Azka S.",
      role: "Ketua 2",
      image: "/images/male.png",
      order: "md:order-3",
    },
  ];

  return (
    <section className="relative px-6 py-20 bg-[#0d1216] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Kepemimpinan
          </h2>
          <p className="text-gray-300 text-lg">Tim Inti TASIS</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`relative group ${leader.order} transition-transform duration-300 hover:scale-105`}
            >
              <div className="relative w-52 h-64 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#ebae3a]/20 to-transparent transition-opacity duration-300" />
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover filter grayscale"
                />
              </div>
              <div className="text-center mt-4 space-y-2">
                <h3 className="text-2xl font-semibold font-inter-tight text-[#ebae3a]">
                  {leader.name}
                </h3>
                <p className="text-gray-300">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
