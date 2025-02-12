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

export default function Home() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main className="min-h-screen bg-[#0d1216] pt-20"> {/* Added pt-20 for navbar spacing */}
        <Hero />
        <div id="msvs"></div>
        <MissionVision />
        <Services />
        <Skills />
        <Activity />
        <Gallery />
        <MailForm />
        <Footer />
        <ButtonToUp />
      </main>
    </>
  );
}