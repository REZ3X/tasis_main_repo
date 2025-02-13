'use client'

import { useState } from 'react';
import DesktopNav from "@/components/nav/desktopNav";
import MobileNav from "@/components/nav/mobileNav";
import Activity from "@/components/activity/activity";
import EventList from "@/components/events/eventList";
import Footer from "@/components/footer/footer";
import ButtonToUp from "@/components/feature/buttonToUp";
import PostersList from "@/components/gallery/postersList";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('acara');

  const tabs = [
    { id: 'acara', label: 'Acara' },
    { id: 'aktivitas', label: 'Aktivitas' },
    { id: 'pamflet', label: 'Pamflet' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'acara':
        return <EventList />;
      case 'aktivitas':
        return <Activity />;
      case 'pamflet':
        return <PostersList />;
      default:
        return <EventList />;
    }
  };

  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen bg-[#0d1216]">
        {/* Hero Section */}
        <section className="relative px-6 py-8 mt-12 bg-[#0d1216]">
          <div className="absolute inset-0 z-0">
            {/* Decorative pattern */}
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ebae3a]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#594925]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[#ebae3a] font-inter-tight mb-6">
                Acara TASIS
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12">
                Kegiatan dan program yang kami selenggarakan untuk menciptakan
                lingkungan sekolah yang lebih baik
              </p>

              {/* Tab Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                      ${activeTab === tab.id 
                        ? 'bg-[#ebae3a] text-[#0d1216]' 
                        : 'bg-[#1f1c16] text-[#ebae3a] hover:bg-[#ebae3a]/10'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Based on Active Tab */}
        {renderContent()}
      </main>
      <Footer />
      <ButtonToUp />
    </>
  );
}