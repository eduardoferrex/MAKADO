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
import { AnimatePresence } from "motion/react";
import SmoothScroll from "./components/SmoothScroll";

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

      <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white antialiased font-sans relative overflow-x-hidden">
        {/* Subtle noise pattern across the site */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay opacity-80" />

        {/* 2. Fixed sticky header (placed outside of SmoothScroll so it is viewport-fixed) */}
        <Header />

        {/* 3. Smooth inert scroll wrapper */}
        <SmoothScroll>
          {/* Hero Section */}
          <Hero />

          {/* About Section (Sobre a MAKADO) */}
          <About />

          {/* Services Section (Serviços) */}
          <Services />

          {/* Portfolio Section */}
          <Portfolio />

          {/* FAQ Section */}
          <FAQ />

          {/* Final CTA */}
          <FinalCTA />

          {/* Rodapé (Footer) */}
          <Footer />
        </SmoothScroll>

        {/* Persistent Floating Support Trigger */}
        <FloatingWA />
      </div>
    </>
  );
}
