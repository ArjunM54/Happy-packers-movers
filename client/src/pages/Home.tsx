import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickHighlights from '@/components/QuickHighlights';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import GstCertificates from '@/components/GstCertificates';
import Process from '@/components/Process';
import ElectricalServices from '@/components/ElectricalServices';
import CertificationSection from '@/components/CertificationSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

import CoverageMap from '@/components/CoverageMap';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickHighlights />
      <About />
      <Services />
      <WhyChooseUs />
      <GstCertificates />
      <Process />
      <CoverageMap />
      <ElectricalServices />
      <Testimonials />
      <CertificationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
