 
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Values from './Values';
import About from './About';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';
import NavbarEn from './en/NavbarEn';
import HeroEn from './en/HeroEn';
import FeaturesEn from './en/FeaturesEn';
import ValuesEn from './en/ValuesEn';
import AboutEn from './en/AboutEn';
import FAQEn from './en/FAQEn';
import CTAEn from './en/CTAEn';
import FooterEn from './en/FooterEn';

export default function LocalizedView({ initialLocale = 'vi' }: { initialLocale?: 'vi' | 'en' }) {
  const isEn = initialLocale === 'en';

  if (isEn) {
    return (
      <div className="bg-[#0f1218] text-gray-200">
        <NavbarEn />
        <HeroEn />
        <FeaturesEn />
        <ValuesEn />
        <AboutEn />
        <FAQEn />
        <CTAEn />
        <FooterEn />
      </div>
    );
  }

  return (
    <div className="bg-[#0f1218] text-gray-200">
      <Navbar />
      <Hero />
      <Features />
      <Values />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
