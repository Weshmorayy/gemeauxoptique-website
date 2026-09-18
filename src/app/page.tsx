import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroLookbook from '@/components/sections/HeroLookbook';
import MarqueeGold from '@/components/sections/MarqueeGold';
import CuratedDropsSection from '@/components/sections/CuratedDropsSection';
import BlueLightSpotlight from '@/components/sections/BlueLightSpotlight';
import FaceMorphologyGuide from '@/components/sections/FaceMorphologyGuide';
import OpticianCraftSection from '@/components/sections/OpticianCraftSection';
import DakarTestimonials from '@/components/sections/DakarTestimonials';
import WhatsAppVipClub from '@/components/sections/WhatsAppVipClub';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Header />
      <HeroLookbook />
      <MarqueeGold />
      <CuratedDropsSection />
      <BlueLightSpotlight />
      <FaceMorphologyGuide />
      <OpticianCraftSection />
      <DakarTestimonials />
      <WhatsAppVipClub />
      <Footer />
    </main>
  );
}
