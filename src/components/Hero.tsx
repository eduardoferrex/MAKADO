import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import OfficialLogo from "./OfficialLogo";

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  // Headline words for staggered reveal effect
  const headlineWords = "Não é apenas um site. É a imagem da sua empresa.".split(" ");

  // Marquee terms for autorial styling
  const tickerItems = [
    "CÓDIGO INTEGRAL", "DESIGN EXCLUSIVO", "PERFORMANCE MÁXIMA", "EXPERIÊNCIA EXCLUSIVA", 
    "ESTRUTURAS HIGH-END", "CONVERSÃO MAXIMIZADA", "CORE WEB VITALS", "ARQUITETURA DE ELITE"
  ];

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen bg-[#0c0c0e] text-white overflow-hidden flex flex-col justify-between pt-6 pb-12"
    >
      {/* Background ultra-thin lines layout grid (for a structural designer feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111113_1px,transparent_1px),linear-gradient(to_bottom,#111113_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Background radial soft light points with drifting premium loop */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 0.95, 1],
          x: [0, 25, -15, 0],
          y: [0, -20, 25, 0] 
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white/[0.016] rounded-full blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 0.9, 1.05, 1],
          x: [0, -30, 20, 0],
          y: [0, 25, -15, 0] 
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-white/[0.009] rounded-full blur-[160px] pointer-events-none" 
      />

      {/* Decorative vertical running lines with draw transitions */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-[10%] w-[1px] h-full bg-white/[0.025] origin-top pointer-events-none hidden md:block" 
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-0 left-[40%] w-[1px] h-full bg-white/[0.025] origin-top pointer-events-none hidden md:block" 
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute top-0 right-[20%] w-[1px] h-full bg-white/[0.025] origin-top pointer-events-none hidden md:block" 
      />

      {/* Abstract Animated Floating Wireframe/Design Element (Upper Right Corner) */}
      <div className="absolute top-[18%] right-[8%] w-48 h-48 pointer-events-none hidden xl:block select-none opacity-40">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full text-zinc-800"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Wireframe geometric layout representing code & structures */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </div>

      {/* Navigation Header */}
      <header id="main-header" className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 border-b border-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-zinc-950 border border-white/5 rounded-lg">
            <OfficialLogo size={24} animate={true} />
          </div>
          <span className="font-display font-black text-base md:text-lg tracking-widest text-white leading-none">
            MAKADO
          </span>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-emerald-400 animate-ping transition-colors" />
          Fale Conosco
        </a>
      </header>

      {/* Main Autorial Asymmetric Body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 my-auto pt-12 md:pt-20">
        
        {/* Layout containing huge expressive typography as visual element */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column for massive text and brand elements */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-900">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.28em]">
                WEBSITES | SISTEMAS | ESTRUTURAS
              </span>
            </div>

            {/* Giant display title block with word staggered entry (scale + blur) */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light text-white tracking-tighter leading-[0.95] text-reveal-mask">
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className={`inline-block mr-3 ${word.includes("imagem") || word.includes("empresa") ? "font-extrabold text-white text-glow-white hover:scale-105 transition-transform duration-300 cursor-default" : ""}`}
                  initial={{ opacity: 0, filter: "blur(12px)", scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08 * idx,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

          </div>

          {/* Asymmetric offset block: description and CTAs */}
          <div className="lg:col-span-4 lg:pt-20 space-y-8 flex flex-col justify-end">
            
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed font-light border-l border-white/10 pl-6"
            >
              Criação de soluções digitais de alto impacto para marcas que exigem excelência. Construímos estruturas que geram credibilidade imediata e potencializam suas vendas diariamente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="pt-4"
            >
              <a
                id="hero-cta-primary"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-3.5 px-7 py-4.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-100 hover:rounded-2xl transition-all duration-500 ease-out cursor-pointer shadow-[0_15px_30px_rgba(255,255,255,0.04)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
              >
                {/* Radial glow highlight inside white button */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="absolute -inset-1 bg-gradient-to-r from-zinc-300 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur" />
                <span className="relative z-10">Inicie seu projeto</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </a>
            </motion.div>

          </div>

        </div>

        {/* Endless Horizontal Sliding Ticker (The visual signature of high-end design agencies) */}
        <div className="w-full overflow-hidden border-t border-b border-white/[0.03] py-4 my-10 relative">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap gap-12 animate-marquee text-[10px] font-mono tracking-[0.25em] text-zinc-550 uppercase">
            {/* First sequence of ticker items */}
            {tickerItems.map((item, i) => (
              <span key={`ticker-1-${i}`} className="flex items-center gap-3">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              </span>
            ))}
            {/* Second identical sequence of ticker items for seamless loop */}
            {tickerItems.map((item, i) => (
              <span key={`ticker-2-${i}`} className="flex items-center gap-3">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              </span>
            ))}
          </div>
        </div>

        {/* Unique Signature Decorative Element (Autorial Brand Stamp) */}
        <div className="mt-8 border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-start justify-between gap-6 text-[11px] font-mono text-zinc-500">
          <div className="flex gap-8">
            <div>
              <span className="text-zinc-600 block mb-1">DESIGN CODE</span>
              <span className="text-white">EDITION 2026</span>
            </div>
            <div>
              <span className="text-zinc-600 block mb-1">PROVA SOCIAL</span>
              <span className="text-zinc-400">QUALIDADE ASSEGURADA</span>
            </div>
          </div>
          <div className="max-w-xs font-light text-zinc-600 leading-normal">
            *Desenvolvido em código-fonte limpo, livre de plataformas automatizadas de IA ou templates prontos.
          </div>
        </div>

      </div>

      {/* Bounce bottom indicator */}
      <div className="w-full text-center mt-8">
        <button
          onClick={onLearnMoreClick}
          className="text-[10px] font-mono text-zinc-600 hover:text-white transition-colors inline-flex items-center gap-2 uppercase tracking-widest cursor-pointer animate-pulse"
        >
          <span>Role para Explorar</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}
