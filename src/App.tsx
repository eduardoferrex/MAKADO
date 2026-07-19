import React from "react";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyItMatters from "./components/WhyItMatters";
import FreeMeeting from "./components/FreeMeeting";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  // Smooth scroll handler to scroll past the hero section
  const handleScrollToWhatWeDo = () => {
    const section = document.getElementById("what-we-do-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
      id="makedo-app-root" 
      className="min-h-screen bg-[#08080a] text-white selection:bg-[#ffffff] selection:text-black antialiased font-sans"
    >
      {/* 1. Abertura (Hero) */}
      <Hero onLearnMoreClick={handleScrollToWhatWeDo} />

      {/* 2. O que a MAKEDO faz */}
      <WhatWeDo />

      {/* 3. Por que isso importa */}
      <WhyItMatters />

      {/* 4. Como funciona a reunião gratuita */}
      <FreeMeeting />

      {/* 5. Chamada final */}
      <FinalCTA />

      {/* 6. Rodapé */}
      <Footer />

      {/* Persistent Floating Support Trigger */}
      <FloatingWA />
    </div>
  );
}
