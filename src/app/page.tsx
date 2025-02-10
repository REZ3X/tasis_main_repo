import DesktopNav from '@/components/nav/desktopNav';
import Hero from '@/components/hero/hero';
import MissionVision from '@/components/hero/missionVission';
import Services from '@/components/services/services';
import Skills from '@/components/services/skills';
import MailForm from '@/components/contact/mailForm';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <DesktopNav />
      <main className="min-h-screen bg-[#0d1216] pt-20"> {/* Added pt-20 for navbar spacing */}
        <Hero />
        <MissionVision />
        <Services />
        <Skills />
        <MailForm />
        <Footer />
      </main>
    </>
  );
}