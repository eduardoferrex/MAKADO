import React, { useState } from "react";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyItMatters from "./components/WhyItMatters";
import FreeMeeting from "./components/FreeMeeting";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import EntranceLoader from "./components/EntranceLoader";
import { AnimatePresence } from "motion/react";
import { StarsBackground } from "@/components/ui/stars";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth scroll handler to scroll past the hero section
  const handleScrollToWhatWeDo = () => {
    const section = document.getElementById("what-we-do-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      const targetY = rect.top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <EntranceLoader key="loader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <StarsBackground 
        className="min-h-screen bg-[#050507] text-white selection:bg-[#ffffff] selection:text-black antialiased font-sans relative overflow-x-hidden"
        starCount={180}
      >
        {/* High-end Tactile noise texture overlay sitting above elements but passing mouse events */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay opacity-80" />

        <SmoothScroll>
          {/* 1. Abertura (Hero) */}
          <Hero onLearnMoreClick={handleScrollToWhatWeDo} />

          {/* 2. O que a MAKADO faz */}
          <WhatWeDo />

          {/* 3. Por que isso importa */}
          <WhyItMatters />

          {/* 4. Como funciona a reunião gratuita */}
          <FreeMeeting />

          {/* 5. Perguntas Frequentes */}
          <FAQ />

          {/* 6. Chamada final */}
          <FinalCTA />

          {/* 7. Rodapé */}
          <Footer />
        </SmoothScroll>

        {/* Persistent Floating Support Trigger */}
        <FloatingWA />
      </StarsBackground>
    </>
  );
}
