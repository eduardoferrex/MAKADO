import React from "react";
import { motion } from "motion/react";
import TypewriterLoop from "@/components/ui/typewriter-loop";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20gratuita%20para%20conhecer%20as%20soluções%20da%20MAKADO.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 bg-transparent flex flex-col justify-center overflow-hidden"
    >
      {/* Background ultra-thin lines layout grid with subtle gray glow points */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-80" />

      {/* Floating subtle ambient lights */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[300px] bg-zinc-900/30 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[300px] bg-zinc-800/20 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          {/* Elite tag badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            <span className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest">
              SITES & SISTEMAS DE ELITE
            </span>
          </motion.div>

          {/* TypewriterLoop component block centered or nicely integrated */}
          <motion.div variants={itemVariants} className="w-full flex justify-start">
            <div className="bg-zinc-950/40 backdrop-blur-sm border border-zinc-900/60 rounded-3xl p-6 shadow-sm w-full">
              <TypewriterLoop
                LeadText="MAKADO"
                morphingText={["Websites", "Sistemas", "Estruturas"]}
              />
            </div>
          </motion.div>

          {/* Headline Description / Subtitle */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Especialistas em Sites & Sistemas.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Não apenas um site, mas sim a imagem da sua empresa. Criamos estruturas digitais limpas, rápidas e memoráveis que transmitem credibilidade absoluta e convertem cliques em clientes.
            </p>
          </motion.div>

          {/* CTA Button Block */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Agende uma reunião gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicos"
              className="px-8 py-4 rounded-full bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Ver Serviços</span>
            </a>
          </motion.div>

          {/* Fast Highlights with icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900 w-full"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-0.5 shrink-0">
                <CheckCircle2 className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Visual Sob Medida
                </h4>
                <p className="text-[11px] text-zinc-500">Design exclusivo e de alta classe</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-0.5 shrink-0">
                <Zap className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Velocidade de Elite
                </h4>
                <p className="text-[11px] text-zinc-500">Páginas que carregam em milissegundos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-0.5 shrink-0">
                <Shield className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Segurança Máxima
                </h4>
                <p className="text-[11px] text-zinc-500">Estruturas blindadas e de alta performance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Mockup / Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative bg-zinc-950 border border-zinc-900 rounded-[32px] p-6 shadow-2xl w-full max-w-md mx-auto overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-900/50 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Header of fake platform screen */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-650" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-2">
                  MAKADO.APP
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                DEMONSTRAÇÃO
              </span>
            </div>

            {/* Simulated interactive stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl text-center space-y-1.5">
                  <span className="text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-wider block">
                    Taxa de Conversão
                  </span>
                  <span className="text-3xl font-extrabold text-white tracking-tight block">
                    12.8%
                  </span>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>

                <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-2xl text-center space-y-1.5">
                  <span className="text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-wider block">
                    Abertura de Página
                  </span>
                  <span className="text-3xl font-extrabold text-zinc-200 tracking-tight block">
                    0.4s
                  </span>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic conversion stats visualizer */}
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-xs font-bold text-zinc-100">Conversão de Tráfego</h5>
                    <p className="text-[10px] text-zinc-500">Média de leads convertidos</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-white bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg shadow-sm">
                    3X MAIS
                  </span>
                </div>

                {/* Conversion Comparison Chart */}
                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-550">
                      <span>SITES TRADICIONAIS</span>
                      <span>1.8%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "33%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-zinc-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold font-mono text-zinc-300">
                      <span>SITES MAKADO</span>
                      <span className="font-extrabold text-white">5.4%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive badge footer */}
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold font-mono border-t border-zinc-900 pt-4">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                  <span>ALTA PERFORMANCE</span>
                </div>
                <span>DESIGN AUTORAL</span>
              </div>
            </div>
          </div>

          {/* Background circle decoration */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-zinc-900 rounded-full blur-[1px] pointer-events-none -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
