'use client'

import { useState } from 'react';
import DesktopNav from "@/components/nav/desktopNav";
import MobileNav from "@/components/nav/mobileNav";
import ReportForm from "@/components/reporting/reportForm";
import TotalReport from "@/components/reporting/totalReport";
import ButtonToUp from "@/components/feature/buttonToUp";
import Footer from "@/components/footer/footer";

export default function ReportingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen bg-[#0d1216] pt-12">
        <section className="relative px-6 py-12 bg-[#1f1c16]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#ebae3a] mb-4">
                Pelaporan Pengaduan
              </h1>
              <p className="text-gray-300 text-lg">
                Sampaikan laporan Anda untuk menciptakan lingkungan sekolah yang lebih baik
              </p>
            </div>

            <div className="mb-8">
              <TotalReport />
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ebae3a] 
                  text-[#0d1216] rounded-lg font-semibold text-lg 
                  hover:bg-[#efbb4a] transition-all duration-300 
                  transform hover:scale-105"
              >
                {showForm ? 'Tutup Form' : 'Buat Laporan'}
              </button>
            </div>

            {showForm && (
              <div className="bg-[#0d1216] p-6 rounded-lg shadow-lg">
                <ReportForm />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ButtonToUp />
    </>
  );
}