import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/Values';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
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
