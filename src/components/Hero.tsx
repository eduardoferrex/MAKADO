import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle2, Cpu, Activity, ArrowUpRight, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import OfficialLogo from "./OfficialLogo";

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";
  const [activeTab, setActiveTab] = useState<"speed" | "conversion" | "code">("speed");
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Autoplay tabs to show live animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "speed" ? "conversion" : prev === "conversion" ? "code" : "speed"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen bg-[#050507] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background ultra-thin lines layout grid with subtle cyan glow points */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f111a_1px,transparent_1px),linear-gradient(to_bottom,#0f111a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* Floating subtle blue & cyan gradients */}
      <div className="absolute top-[20%] left-[20%] w-[600px] h-[350px] bg-cyan-500/[0.015] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-blue-500/[0.012] rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Minimalistic Premium Header */}
      <header className="relative z-30 border-b border-white/[0.03] bg-[#050507]/40 backdrop-blur-md py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <OfficialLogo size={20} animate={true} />
            </div>
            <span className="font-sans font-black text-sm tracking-[0.25em] text-white uppercase">
              MAKADO
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
            <button onClick={onLearnMoreClick} className="hover:text-cyan-400 transition-colors cursor-pointer">
              [ O que Fazemos ]
            </button>
            <a href="#why-it-matters" className="hover:text-cyan-400 transition-colors">
              [ A Diferença ]
            </a>
            <a href="#client-journey" className="hover:text-cyan-400 transition-colors">
              [ Metodologia ]
            </a>
          </nav>

          <div>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.03] hover:bg-cyan-500 text-[11px] text-cyan-300 hover:text-black font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Body Content */}
      <div className="flex-grow flex items-center py-12 md:py-20 px-6 md:px-12 relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left: Headline & Actions */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Tag / Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/15 bg-cyan-950/20 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-300 uppercase tracking-[0.2em]">
                  Sites Profissionais de Alta Conversão
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-tight leading-[1.08] text-white">
                Seu negócio merece <span className="font-extrabold bg-gradient-to-r from-white via-zinc-200 to-cyan-400 bg-clip-text text-transparent">mais do que um site comum</span>.
                <span className="block mt-4 text-zinc-400 font-normal text-lg sm:text-xl md:text-2xl leading-relaxed">
                  Criamos sites <span className="text-white border-b border-cyan-500/20 pb-0.5 font-medium">rápidos e modernos</span> que passam confiança absoluta e transformam cliques em novos clientes.
                </span>
              </motion.h1>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_35px_rgba(0,210,255,0.15)]"
                >
                  <span>Quero um Site Profissional</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button 
                  onClick={onLearnMoreClick}
                  className="px-8 py-4.5 rounded-full bg-zinc-950/50 hover:bg-zinc-900 border border-white/5 hover:border-cyan-500/30 text-zinc-300 text-xs font-mono uppercase tracking-wider hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver o que fazemos</span>
                  <span className="text-cyan-400 font-mono text-[10px]">// 02</span>
                </button>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.03]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">Visual Lindo e Exclusivo</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-0.5">Desenhado do zero para passar extrema seriedade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mt-0.5">
                    <Zap className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">Velocidade Máxima</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-0.5">Carregamento em milissegundos para não perder clientes.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Immersive & Beautiful Animated Interactive glass-dashboard (No Images!) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-lg group"
            >
              {/* Performance Rating Floating Chip */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 px-3.5 py-2 bg-[#08080c]/90 border border-cyan-500/20 backdrop-blur-md rounded-2xl flex items-center gap-2.5 shadow-[0_12px_25px_rgba(0,0,0,0.5)]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block leading-none">Velocidade</span>
                  <span className="text-[11px] font-bold text-cyan-300 font-mono tracking-tight">Abre em 0.3 Segundos</span>
                </div>
              </motion.div>

              {/* Conversion rate indicator */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-20 px-3.5 py-2.5 bg-[#08080c]/90 border border-blue-500/20 backdrop-blur-md rounded-2xl flex items-center gap-3 shadow-[0_12px_25px_rgba(0,0,0,0.5)]"
              >
                <div className="p-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block leading-none">Mais Clientes</span>
                  <span className="text-[11px] font-bold text-emerald-400 font-mono">+280% de Retorno</span>
                </div>
              </motion.div>

              {/* Main Laptop/Showcase Screen frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#08080c] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                {/* Top browser/window bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-950/80 rounded-t-xl border-b border-white/[0.04] text-zinc-500">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-4 text-[8px] font-mono tracking-widest text-zinc-500 uppercase flex-grow text-center pr-8">
                    makado.agency/velocidade-real
                  </div>
                </div>

                {/* Simulated Glass Interactive UI Console */}
                <div className="relative aspect-[16/10] bg-[#050508] p-5 rounded-b-xl flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle dynamic matrix grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

                  {/* Tabs selector inside screen */}
                  <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 z-10">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Demonstração
                    </span>
                    <div className="flex gap-1 bg-zinc-950 p-0.5 rounded-lg border border-white/5">
                      {(["speed", "conversion", "code"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`text-[9px] font-mono uppercase px-2.5 py-1 rounded-md transition-all duration-300 ${
                            activeTab === tab
                              ? "bg-white/10 text-white shadow-inner font-semibold border border-white/5"
                              : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {tab === "speed" ? "Velocidade" : tab === "conversion" ? "Mais Vendas" : "Tecnologia"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content based on tab */}
                  <div className="flex-grow flex items-center justify-center py-4 relative z-10">
                    <AnimatePresence mode="wait">
                      {activeTab === "speed" && (
                        <motion.div
                          key="speed-tab"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col justify-between"
                        >
                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 bg-zinc-950/60 border border-cyan-500/10 rounded-xl text-center space-y-1">
                              <span className="text-[8px] font-mono text-zinc-500 uppercase block">Nota Google</span>
                              <span className="text-lg font-bold font-mono text-cyan-400 text-glow-cyan">100%</span>
                              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} className="h-full bg-cyan-400" />
                              </div>
                            </div>
                            <div className="p-3 bg-zinc-950/60 border border-white/5 rounded-xl text-center space-y-1">
                              <span className="text-[8px] font-mono text-zinc-500 uppercase block">Abertura</span>
                              <span className="text-lg font-bold font-mono text-white">0.1s</span>
                              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.1 }} className="h-full bg-emerald-400" />
                              </div>
                            </div>
                            <div className="p-3 bg-zinc-950/60 border border-white/5 rounded-xl text-center space-y-1">
                              <span className="text-[8px] font-mono text-zinc-500 uppercase block">Carregado</span>
                              <span className="text-lg font-bold font-mono text-white">0.3s</span>
                              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.2 }} className="h-full bg-emerald-400" />
                              </div>
                            </div>
                          </div>

                          {/* Dynamic speed dial graphic */}
                          <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3 flex items-center justify-between gap-4 mt-2">
                            <div className="flex items-center gap-2.5">
                              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                <Zap className="w-4 h-4 animate-bounce" />
                              </div>
                              <div>
                                <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">Site Super Leve</h5>
                                <p className="text-[9px] text-zinc-500 font-light">Sem travamentos, funciona direto no navegador.</p>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md bg-cyan-950/20">
                              VELOZ
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "conversion" && (
                        <motion.div
                          key="conversion-tab"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col justify-between"
                        >
                          {/* Live Conversion SVG Chart */}
                          <div className="flex-grow flex items-end justify-between px-2 pt-2 h-[80px]">
                            <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 30" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Static Line for other guys */}
                              <path d="M0,25 L20,24 L40,26 L60,23 L80,25 L100,24" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="1,1" />
                              {/* Glowing curve for MAKADO */}
                              <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                d="M0,25 Q15,22 30,14 T60,11 T85,3 T100,1"
                                fill="none"
                                stroke="#00f0ff"
                                strokeWidth="1.5"
                              />
                              <path d="M0,25 Q15,22 30,14 T60,11 T85,3 T100,1 L100,30 L0,30 Z" fill="url(#chartGrad)" />
                              {/* Moving glow dot */}
                              <motion.circle
                                animate={{ cx: [0, 100], cy: [25, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                r="1.5"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="px-3 py-2 bg-red-500/[0.02] border border-red-500/10 rounded-xl flex items-center justify-between">
                              <span className="text-[8px] font-mono text-zinc-500 uppercase">Sites Comuns</span>
                              <span className="text-[10px] font-bold font-mono text-red-400">1.8% de Clientes</span>
                            </div>
                            <div className="px-3 py-2 bg-cyan-500/[0.04] border border-cyan-500/20 rounded-xl flex items-center justify-between">
                              <span className="text-[8px] font-mono text-cyan-300 uppercase">Nosso Site</span>
                              <span className="text-[10px] font-bold font-mono text-cyan-400">5.4% de Clientes (3x Mais!)</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === "code" && (
                        <motion.div
                          key="code-tab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-zinc-400"
                        >
                          <div className="bg-zinc-950/80 p-3 rounded-xl border border-white/5 space-y-1 overflow-hidden max-h-[110px]">
                            <div className="flex items-center justify-between text-zinc-600 border-b border-white/[0.03] pb-1 mb-1.5 text-[8px]">
                              <span>EstruturaDoSite.tsx</span>
                              <span className="text-cyan-500 font-bold">CÓDIGO_LIMPO</span>
                            </div>
                            <p className="text-zinc-500"><span className="text-cyan-400">const</span> criarSite = () =&gt; &#123;</p>
                            <p className="pl-3 text-zinc-400">return (</p>
                            <p className="pl-6 text-zinc-300">&lt;<span className="text-cyan-400">Site</span> velocidade=<span className="text-yellow-400">"Super_Rápido"</span> visual=<span className="text-yellow-400">"Exclusivo"</span>&gt;</p>
                            <p className="pl-9 text-zinc-500">&lt;<span className="text-emerald-400">QualidadeGoogle</span> nota100=<span className="text-cyan-400">&#123;true&#125;</span> /&gt;</p>
                            <p className="pl-6 text-zinc-300">&lt;/<span className="text-cyan-400">Site</span>&gt;</p>
                            <p className="pl-3 text-zinc-400">);</p>
                            <p className="text-zinc-500">&#125;</p>
                          </div>

                          <div className="flex items-center justify-between text-[8px] text-zinc-600 px-1 mt-1">
                            <span>// 100% Organizado, Sem plugins pesados</span>
                            <span className="text-zinc-400 font-mono">Tecnologia de Ponta</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footnote inside screen layout */}
                  <div className="border-t border-white/[0.04] pt-2.5 flex items-center justify-between text-[8px] font-mono text-zinc-500 z-10">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-cyan-500" />
                      <span>Site 100% Seguro</span>
                    </div>
                    <span>Design Autoral Exclusivo</span>
                  </div>
                </div>
              </div>

              {/* Glowing decorative rings/ellipses in background behind frame */}
              <div className="absolute -bottom-10 -left-10 w-44 h-44 border border-cyan-500/10 rounded-full blur-[2px] pointer-events-none z-0" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom ticker banner representing High-Tech Agency stats */}
      <div className="border-t border-white/[0.03] bg-zinc-950/40 py-5 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400">
              [ MAKADO PERFORMANCE ]
            </span>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <span className="text-xs text-zinc-400 font-light flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              Desenvolvimento de sites profissionais focados no ROI do seu tráfego pago.
            </span>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
            <span>SITES HIGH-END</span>
            <span className="text-cyan-400">//</span>
            <span>SEO DE ELITE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

