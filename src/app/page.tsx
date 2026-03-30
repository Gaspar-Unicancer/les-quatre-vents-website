import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EspritSection from "@/components/EspritSection";
import FormulesSection from "@/components/FormulesSection";
import CarteSection from "@/components/CarteSection";
import TerrasseSection from "@/components/TerrasseSection";
import InfosSection from "@/components/InfosSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <EspritSection />
        <FormulesSection />
        <CarteSection />
        <TerrasseSection />
        <InfosSection />
      </main>
      <Footer />
    </>
  );
}
