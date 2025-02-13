import Image from "next/image";

/**
 * Upper component displays a section showcasing mentors/supervisors
 * with their images and roles in a responsive grid layout.
 * Features gradient backgrounds and highlight effects for key members.
 */
export default function Upper() {
  const mentors = [
    {
      name: "Pak W",
      role: "Pembina TASIS",
      image: "/images/male.png",
      isHighlighted: true,
    },
    {
      name: "Pak Yudi",
      role: "Honorable Mention",
      image: "/images/male.png",
      isHighlighted: false,
    },
  ];

  return (
    <section className="relative px-6 py-20 bg-[#1f1c16] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Pembimbing
          </h2>
          <p className="text-gray-300 text-lg">Mentor dan Pembina Tim TASIS</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`relative group ${
                mentor.isHighlighted ? "scale-110" : "scale-100"
              }`}
            >
              <div className="relative w-52 h-64 overflow-hidden rounded-xl">
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    mentor.isHighlighted
                      ? "bg-gradient-to-t from-[#ebae3a]/20 to-transparent"
                      : "bg-gradient-to-t from-[#594925]/20 to-transparent"
                  }`}
                />
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover filter grayscale"
                />
              </div>
              <div className="text-center mt-4 space-y-2">
                <h3
                  className={`text-2xl font-semibold font-inter-tight ${
                    mentor.isHighlighted ? "text-[#ebae3a]" : "text-[#594925]"
                  }`}
                >
                  {mentor.name}
                </h3>
                <p className="text-gray-400">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
