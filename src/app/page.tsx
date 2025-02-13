import DesktopNav from '@/components/nav/desktopNav';
import Hero from '@/components/hero/hero';
import MissionVision from '@/components/hero/missionVission';
import Services from '@/components/services/services';
import Skills from '@/components/services/skills';
import MailForm from '@/components/contact/mailForm';
import Footer from '@/components/footer/footer';
import ButtonToUp from '@/components/feature/buttonToUp';
import MobileNav from '@/components/nav/mobileNav';
import Gallery from '@/components/gallery/gallery';
import Activity from '@/components/activity/activity';
import Link from 'next/link';

/**
 * Home component serves as the main landing page of the application.
 * Includes navigation, hero section, mission/vision, services, skills,
 * activities, gallery, contact form and footer.
 * @returns {JSX.Element} The rendered Home page
 */
export default function Home() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen bg-[#0d1216] pt-20">
        <Hero />
        <div id="msvs"></div>
        <MissionVision />
        <Services />
        <Skills />
        <Activity />
        <section className="relative px-6 py-4 bg-[#1f1c16]">
          <div className="max-w-7xl mx-auto text-center">
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ebae3a] text-[#0d1216] 
                rounded-lg font-semibold text-lg hover:bg-[#efbb4a] 
                transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-[#ebae3a]/20"
            >
              Lebih Detail
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </section>
        <Gallery />
        <MailForm />
        <Footer />
        <ButtonToUp />
      </main>
    </>
  );
}