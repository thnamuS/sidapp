import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import ServicesSection from "@/components/servicessection";
import ContactSection from "@/components/contactsection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
