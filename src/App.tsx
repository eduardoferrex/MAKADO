import React from "react";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Proof from "./components/Proof";
import Steps from "./components/Steps";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  // Smooth scroll handler for anchor navigation
  const handleScrollToProblem = () => {
    const section = document.getElementById("problem-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="makedo-app-root" className="min-h-screen bg-[#08080A] text-white selection:bg-[#B5FF00] selection:text-black antialiased font-sans">
      {/* 1. Hero Landing & Header */}
      <Hero onLearnMoreClick={handleScrollToProblem} />

      {/* 2. Pain Points & Contrast */}
      <Problem />

      {/* 3. Solutions Grid (What we do) */}
      <Solution />

      {/* 4. Results & Portfolio Simulator */}
      <Proof />

      {/* 5. Process Roadmap (Reunião Gratuita) */}
      <Steps />

      {/* 6. High impact Call To Action */}
      <CTASection />

      {/* 7. Footer credentials */}
      <Footer />

      {/* Persistent Flotating Support Trigger */}
      <FloatingWA />
    </div>
  );
}
