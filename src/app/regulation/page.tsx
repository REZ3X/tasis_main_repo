"use client";

import DesktopNav from "@/components/nav/desktopNav";
import MobileNav from "@/components/nav/mobileNav";
import BehaviorTable from "@/components/regulation/behavior";
import NeatTable from "@/components/regulation/neat";
import CraftingTable from "@/components/regulation/crafting";
import ButtonToUp from "@/components/feature/buttonToUp";
import Footer from "@/components/footer/footer";

export default function RegulationPage() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen bg-[#0d1216] pt-20">
        <section className="relative px-6 py-12 bg-[#1f1c16]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#ebae3a] mb-4">
                Tata Tertib Sekolah
              </h1>
              <p className="text-gray-300 text-lg">
                Peraturan dan poin pelanggaran untuk menciptakan lingkungan
                sekolah yang tertib
              </p>
            </div>
            <div className="bg-[#0d1216] p-6 rounded-lg shadow-lg border border-[#594925]/20">
              <h2 className="text-2xl font-bold text-[#ebae3a] mb-6">
                Pelanggaran Kelakuan
              </h2>
              <BehaviorTable />
            </div>
            <div className="bg-[#0d1216] p-6 rounded-lg shadow-lg border border-[#594925]/20">
              <h2 className="text-2xl font-bold text-[#ebae3a] mb-6">
                Pelanggaran Kerapian
              </h2>
              <NeatTable />
            </div>
            <div className="bg-[#0d1216] p-6 rounded-lg shadow-lg border border-[#594925]/20">
              <h2 className="text-2xl font-bold text-[#ebae3a] mb-6">
                Pelanggaran Kerajinan
              </h2>
              <CraftingTable />
            </div>
            <div className="mt-8 p-8 bg-[#231918] rounded-lg">
              <h3 className="text-2xl font-bold text-[#ebae3a] mb-6 text-center">
                Catatan Penting
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="font-semibold text-yellow-400">
                      Peringatan Lisan
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Akumulasi poin di bawah 36
                  </p>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-blue-400">
                      Surat Peringatan 1
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Akumulasi 36-50 poin
                    <span className="block mt-1 text-blue-400/70 text-xs">
                      Pembinaan karakter selama 15 hari
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-orange-400">
                      Surat Peringatan 2
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Akumulasi 51-75 poin
                    <span className="block mt-1 text-orange-400/70 text-xs">
                      Pembinaan karakter selama 30 hari
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="font-semibold text-red-400">
                      Surat Peringatan 3
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Akumulasi 76-124 poin
                    <span className="block mt-1 text-red-400/70 text-xs">
                      Pembinaan karakter selama 45 hari
                    </span>
                  </p>
                </div>

                {/* Drop Out Card */}
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 md:col-span-2 lg:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="font-semibold text-purple-400">
                      Dikembalikan ke Orang Tua/Wali
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Akumulasi mencapai 125 poin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ButtonToUp />
    </>
  );
}
