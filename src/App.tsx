import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import IdealClientFilter from "./components/IdealClientFilter";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import AnimatedBackground from "./components/AnimatedBackground";
import SmoothScroll from "./components/SmoothScroll";
import SectionTransition from "./components/SectionTransition";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-zinc-800 selection:text-white antialiased font-sans relative overflow-x-hidden">
      {/* Subtle noise overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay opacity-80" />

      {/* Dynamic Animated Background with particles, moving light orbs and sine waves */}
      <AnimatedBackground />

      {/* Fixed sticky header */}
      <Header />

      {/* Smooth Lenis Scroll Container */}
      <SmoothScroll>
        <div className="relative z-10 flex flex-col w-full">
          {/* Section 1: Hero */}
          <SectionTransition id="inicio" showDivider={false} accentShape="ring">
            <Hero />
          </SectionTransition>

          {/* Section 2: About (Sobre) */}
          <SectionTransition id="sobre" accentShape="square">
            <About />
          </SectionTransition>

          {/* Section 3: Services (Serviços) */}
          <SectionTransition id="servicos" accentShape="circle">
            <Services />
          </SectionTransition>

          {/* Section 4: Portfolio */}
          <SectionTransition id="portfolio" accentShape="dots">
            <Portfolio />
          </SectionTransition>

          {/* Section 5: Para Quem É x Para Quem Não É */}
          <SectionTransition id="qualificacao" accentShape="square">
            <IdealClientFilter />
          </SectionTransition>

          {/* Section 6: FAQ */}
          <SectionTransition id="faq" accentShape="ring">
            <FAQ />
          </SectionTransition>

          {/* Section 6: Final CTA + Footer */}
          <SectionTransition id="contato" accentShape="square">
            <FinalCTA />
          </SectionTransition>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>

      {/* Persistent Floating Support Trigger */}
      <FloatingWA />
    </div>
  );
}
