import Image from 'next/image';

/**
 * AllMember Component
 * Displays a grid of team members with their photos and names
 * Uses responsive grid layout and hover effects
 * @returns JSX.Element
 */
export default function AllMember() {
  /** Array of team members with their names and profile images */
  const members = [
    { name: "Abel Deandra M.P", image: "/images/male.png" },
    { name: "Alfina Aura K.", image: "/images/female.png" },
    { name: "Alila Qonita A.", image: "/images/female.png" },
    { name: "Ameilia Widya P. S.", image: "/images/female.png" },
    { name: "Ananda keisya K. S.", image: "/images/female.png" },
    { name: "Azka Satria Aji", image: "/images/male.png" },
    { name: "Elysia Adisty P. N.", image: "/images/female.png" },
    { name: "Gamaliel Faustina T.", image: "/images/female.png" },
    { name: "Hafifah Alifia R.", image: "/images/female.png" },
    { name: "Hendy Yoga Raditya", image: "/images/male.png" },
    { name: "Miftahul Huda", image: "/images/male.png" },
    { name: "Muhammad Chusni ", image: "/images/male.png" },
    { name: "Muhamad Zhafier R. S.", image: "/images/male.png" },
    { name: "Muhammad Farrel D. N.", image: "/images/male.png" },
    { name: "Muhammad Majid", image: "/images/male.png" },
    { name: "Muhammad Ridho M.", image: "/images/male.png" },
    { name: "Nadhira Nur Alifta P.", image: "/images/female.png" },
    { name: "Nisa Kirani", image: "/images/female.png" },
    { name: "Nisa Nur Aini", image: "/images/female.png" },
    { name: "Quinn Marsha S.", image: "/images/female.png" },
    { name: "Rachell Princessa A.", image: "/images/female.png" },
    { name: "Raka Bintang P.", image: "/images/male.png" },
    { name: "Rara Meiva Fizahra", image: "/images/female.png" },
    { name: "Raya Bhumi Djalma", image: "/images/female.png" },
    { name: "Sasongko Alfauzan S.", image: "/images/male.png" },
    { name: "Zaky Yulba Ayyasy", image: "/images/male.png" },
    { name: "Zaydan A. A. G.", image: "/images/male.png" },
    { name: "Zefanya Yasinta A. R ", image: "/images/female.png" },
  ];

  return (
    <section className="relative px-6 py-20 bg-[#0d1216] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ebae3a] font-inter-tight mb-4">
            Anggota
          </h2>
          <p className="text-gray-300 text-lg">
            Tim TASIS
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 max-w-[320px] sm:max-w-none">
            {members.map((member, index) => (
              <div
                key={index}
                className="relative group transition-transform duration-300 hover:scale-105 w-36 sm:w-32"
              >
                <div className="relative w-full h-40 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ebae3a]/20 to-transparent transition-opacity duration-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale"
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-sm font-medium text-gray-300 font-inter-tight">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}