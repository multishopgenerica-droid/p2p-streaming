import React from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { InstallationSection } from './components/InstallationSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CatalogSection } from './components/CatalogSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ComparisonSection } from './components/ComparisonSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { SupportSection } from './components/SupportSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ExitPopup } from './components/ExitPopup';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#050505] text-white selection:bg-[#FF6B00] selection:text-black">
      
      <ExitPopup />

      {/* 1. HERO */}
      <section className="min-h-screen w-full relative snap-start">
        <HeroSection />
      </section>

      {/* 2. INTRO / VIDEO */}
      <section className="min-h-screen w-full relative snap-start">
        <IntroSection />
      </section>

      {/* 3. INSTALLATION */}
      <section className="min-h-screen w-full relative snap-start">
        <InstallationSection />
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="min-h-screen w-full relative snap-start">
        <HowItWorksSection />
      </section>

      {/* 5. CATALOG / HIGHLIGHTS */}
      <section className="min-h-screen w-full relative snap-start">
        <CatalogSection />
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="min-h-screen w-full relative snap-start">
        <TestimonialSection />
      </section>

      {/* 7. COMPARISON */}
      <section className="min-h-screen w-full relative snap-start">
        <ComparisonSection />
      </section>

      {/* 8. OFFER / PRICING */}
      <section className="min-h-screen w-full relative snap-start">
        <OfferSection />
      </section>

      {/* 9. FAQ */}
      <section className="w-full relative py-20 bg-black snap-start">
        <FaqSection />
      </section>

      {/* 10. SUPPORT & FOOTER */}
      <section className="w-full relative bg-black pb-20 snap-start">
        <SupportSection />
        <FooterSection />
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;