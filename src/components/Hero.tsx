import React, { useState } from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, Zap, Laptop, Terminal, Activity } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import OfficialLogo from "./OfficialLogo";

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  // Coordinates for the interactive premium Card Hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-200, 200], [15, -15]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-200, 200], [-15, 15]), { damping: 25, stiffness: 150 });

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Words for the staggered headline animation
  const headlineWords = "A imagem profissional que sua marca exige.".split(" ");

  return (
    <section id="hero-section" className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between pt-6 pb-12 md:py-16">
      
      {/* Premium background grid lines (extremely thin and subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating elegant particle glows (very high-end and minimalist) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-zinc-900/30 blur-[180px] pointer-events-none" />

      {/* Exquisite animated glowing spark accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        <div className="absolute top-[65%] left-[10%] w-1 h-1 rounded-full bg-white/50" />
        <div className="absolute top-[45%] right-[20%] w-1 h-1 rounded-full bg-white/70 animate-pulse" />
      </div>

      {/* Navigation Header */}
      <header id="main-header" className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-5 border-b border-white/[0.03] backdrop-blur-md mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          {/* Animated Official Logo in Header */}
          <div className="p-1.5 bg-zinc-950 border border-zinc-900 rounded-xl group-hover:border-zinc-700 transition-all duration-300">
            <OfficialLogo size={28} animate={true} />
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-widest text-white leading-none">
            MAKADO
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-5"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Suporte Direto
          </a>
        </motion.div>
      </header>

      {/* Main Hero Body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24 my-auto">
        
        {/* Left Side: Elegant typography and CTAs */}
        <div className="flex-1 text-left flex flex-col items-start max-w-xl lg:max-w-none">
          {/* Top Premium Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-900 mb-8 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] md:text-xs font-mono text-zinc-300 uppercase tracking-widest font-black">
              WEBSITES | SISTEMAS | ESTRUTURAS
            </span>
          </motion.div>

          {/* Luxury Headings with staggered word animation */}
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.05] mb-6">
            {headlineWords.map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-end look
                  delay: 0.05 * idx,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed mb-10 max-w-lg"
          >
            Nós não fazemos apenas páginas. Desenvolvemos <span className="text-white font-semibold">Websites de altíssimo nível</span>, <span className="text-white font-semibold">Sistemas modernos sob medida</span> e <span className="text-white font-semibold">Estruturas digitais completas</span> que transformam cliques em lucros e posicionam sua marca no topo.
          </motion.p>

          {/* Elegant CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              id="hero-cta-primary"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_10px_25px_rgba(255,255,255,0.08)] hover:bg-zinc-200 transition-all duration-300 group"
            >
              Iniciar Meu Projeto Grátis
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>

            <motion.button
              id="hero-cta-secondary"
              onClick={onLearnMoreClick}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-300 font-mono text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              Conhecer Mais
            </motion.button>
          </motion.div>

          {/* Thin Micro Metadata Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="grid grid-cols-2 gap-6 mt-12 border-t border-white/[0.04] pt-6 w-full max-w-md"
          >
            <div className="flex items-center gap-2 text-zinc-500">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Desempenho Extremo</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Código Autoral</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Magnificent Interactive 3D Card Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg lg:max-w-none flex items-center justify-center relative py-8"
        >
          {/* Backing Ambient concentric rings */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.02] flex items-center justify-center animate-[spin_50s_linear_infinite]" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-white/[0.015] flex items-center justify-center animate-[spin_70s_linear_infinite_reverse]" />

          {/* Interactive 3D Rotational Canvas */}
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[340px] p-8 md:p-10 bg-[#09090b] border border-white/[0.06] rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] hover:border-white/[0.12] transition-colors duration-500 cursor-grab active:cursor-grabbing select-none overflow-hidden"
          >
            {/* Ambient reflective glow overlay inside the card */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

            {/* Futuristic corner frame lines */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/20" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/20" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/20" />

            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[8px] font-mono font-bold tracking-widest text-zinc-400 uppercase">IDENTIDADE DIGITAL</span>
            </div>

            {/* Massive Floating Official Logo representation with floating bounce */}
            <div className="my-10 py-6 flex flex-col items-center justify-center" style={{ transform: "translateZ(50px)" }}>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="drop-shadow-[0_0_40px_rgba(255,255,255,0.18)] hover:drop-shadow-[0_0_55px_rgba(255,255,255,0.3)] transition-all"
              >
                <OfficialLogo size={180} animate={true} />
              </motion.div>
            </div>

            {/* Card Footer details */}
            <div className="text-center" style={{ transform: "translateZ(30px)" }}>
              <p className="text-[10px] font-mono text-zinc-400 font-bold tracking-[0.3em] uppercase">MAKADO ACTIVE</p>
              <p className="text-[9px] text-zinc-600 font-mono mt-1.5">Arraste a logo ou passe o mouse para orbitar</p>
            </div>
          </motion.div>

          {/* Luxury Micro status badges floating */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute -top-3 -right-2 bg-zinc-950/90 border border-white/[0.04] rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 backdrop-blur-sm"
          >
            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-[8px] text-zinc-500 font-mono uppercase tracking-wider">CÓDIGO DE ELITE</p>
              <p className="text-[10px] font-extrabold text-white">Sistemas sob medida</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-2 -left-6 bg-zinc-950/90 border border-white/[0.04] rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 backdrop-blur-sm"
          >
            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-[8px] text-zinc-500 font-mono uppercase tracking-wider">PERFORMANCE</p>
              <p className="text-[10px] font-extrabold text-white">Velocidade Extrema</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Discover Bottom Button */}
      <div className="w-full text-center mt-8 mb-2 relative z-10">
        <button
          onClick={onLearnMoreClick}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors flex flex-col items-center gap-2 mx-auto animate-bounce cursor-pointer"
        >
          <span>Descobrir como funciona</span>
          <span className="text-white">↓</span>
        </button>
      </div>
    </section>
  );
}

