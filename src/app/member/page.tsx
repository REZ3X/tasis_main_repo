import DesktopNav from "@/components/nav/desktopNav";
import MobileNav from "@/components/nav/mobileNav";
import Upper from "@/components/member/upper";
import TheLeads from "@/components/member/theLeads";
import TheLegals from "@/components/member/theLegals";
import TheAccountant from "@/components/member/theAccountant";
import AllMember from "@/components/member/allMember";
import Footer from "@/components/footer/footer";

export default function MemberPage() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen mobile:mt-8 bg-[#0d1216] overflow-x-hidden">
        {/* Hero Section with Title */}
        <section className="relative px-6 py-20 bg-[#0d1216]">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Decorative wave pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 Q25,45 50,50 T100,50 V100 H0 Z"
                  fill="#ebae3a"
                  className="animate-[wave_15s_ease-in-out_infinite]"
                />
                <path
                  d="M0,50 Q25,55 50,50 T100,50 V100 H0 Z"
                  fill="#594925"
                  className="animate-[wave_10s_ease-in-out_infinite]"
                  opacity="0.5"
                />
              </svg>
            </div>

            {/* Existing blur effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[#ebae3a] font-inter-tight mb-6">
                Anggota TASIS
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                Mengenal lebih dekat tim yang berkomitmen menjaga ketertiban
                sekolah
              </p>
            </div>
          </div>
        </section>

        {/* Upper Component */}
        <Upper />
        <TheLeads />
        <TheLegals />
        <TheAccountant />
        <AllMember />
      </main>
      <Footer /> 
    </>
  );
}