import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import EntranceLoader from "./components/EntranceLoader";
import AnimatedBackground from "./components/AnimatedBackground";
import SmoothScroll from "./components/SmoothScroll";
import SectionTransition from "./components/SectionTransition";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* 1. Loader overlay */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <EntranceLoader key="loader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full bg-black text-white selection:bg-zinc-800 selection:text-white antialiased font-sans relative overflow-x-hidden">
        {/* Subtle noise overlay */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay opacity-80" />

        {/* Dynamic Animated Background with particles, moving light orbs and sine waves */}
        <AnimatedBackground />

        {/* 2. Fixed sticky header */}
        <Header />

        {/* 3. Smooth Lenis Scroll Container */}
        <SmoothScroll>
          <div className="relative z-10 flex flex-col w-full">
            {/* Section 1: Hero */}
            <SectionTransition id="inicio" showDivider={false}>
              <Hero />
            </SectionTransition>

            {/* Section 2: About (Sobre) */}
            <SectionTransition id="sobre">
              <About />
            </SectionTransition>

            {/* Section 3: Services (Serviços) */}
            <SectionTransition id="servicos">
              <Services />
            </SectionTransition>

            {/* Section 4: Portfolio */}
            <SectionTransition id="portfolio">
              <Portfolio />
            </SectionTransition>

            {/* Section 5: FAQ */}
            <SectionTransition id="faq">
              <FAQ />
            </SectionTransition>

            {/* Section 6: Final CTA + Footer */}
            <SectionTransition id="contato">
              <FinalCTA />
            </SectionTransition>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScroll>

        {/* Persistent Floating Support Trigger */}
        <FloatingWA />
      </div>
    </>
  );
}
