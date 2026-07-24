import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, BarChart3, Users, Sparkles } from "lucide-react";

export default function Hero() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20gratuita%20para%20conhecer%20as%20soluções%20da%20MAKADO.";

  // Interactive state for conversion simulator
  const [traffic, setTraffic] = useState<number>(3000);

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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // Calculations for simulator
  const commonLeads = Math.round(traffic * 0.012); // 1.2%
  const makadoLeads = Math.round(traffic * 0.048); // 4.8%
  const multiplier = ((makadoLeads / Math.max(1, commonLeads))).toFixed(1);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 bg-transparent flex flex-col justify-center overflow-hidden"
    >
      {/* Floating subtle ambient lights */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[300px] bg-zinc-900/40 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[300px] bg-zinc-800/25 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] font-display">
              Transformamos o seu site em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 border-b border-zinc-700 pb-1">ativo de faturamento</span>.
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
              A maioria das empresas perde mais de 90% dos visitantes porque seus sites são apenas "cartões de visita caros". Na <strong>MAKADO</strong>, criamos sites estratégicos e implantamos uma <strong>estrutura de vendas completa</strong> na sua página para converter tráfego em reuniões e clientes de alto valor.
            </p>
          </motion.div>

          {/* CTA Button Block */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#metodo"
              className="px-8 py-4 rounded-full bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Conhecer o Método</span>
            </a>
          </motion.div>

          {/* Fast Highlights with icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900 w-full"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-0.5 shrink-0">
                <CheckCircle2 className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Design Autoral
                </h4>
                <p className="text-[11px] text-zinc-500">Autoridade e posicionamento premium</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-0.5 shrink-0">
                <Zap className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Estrutura de Vendas
                </h4>
                <p className="text-[11px] text-zinc-500">Copywriting e gatilhos de conversão</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-0.5 shrink-0">
                <Shield className="w-3 h-3 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-zinc-200">
                  Alta Performance
                </h4>
                <p className="text-[11px] text-zinc-500">Carregamento instantâneo</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Conversion Simulator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative bg-zinc-950/90 border border-zinc-800 rounded-[32px] p-6 sm:p-7 shadow-2xl w-full max-w-md mx-auto overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/30 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Interactive Simulator Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <BarChart3 className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                  Simulador de Conversão
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
                ROI ESTIMADO
              </span>
            </div>

            {/* Traffic Selector Buttons */}
            <div className="space-y-3 mb-6">
              <label className="text-xs text-zinc-400 font-medium flex justify-between items-center">
                <span>Acessos Mensais no seu Site:</span>
                <span className="font-mono font-bold text-white text-sm">{traffic.toLocaleString("pt-BR")} visitantes/mês</span>
              </label>

              <div className="grid grid-cols-3 gap-2">
                {[1000, 3000, 8000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setTraffic(val)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all duration-200 border ${
                      traffic === val
                        ? "bg-white text-zinc-950 border-white shadow-md scale-[1.02]"
                        : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {val >= 1000 ? `${val / 1000}k/mês` : val}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Results Cards */}
            <div className="space-y-4">
              {/* Site Tradicional */}
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-900/80 space-y-2">
                <div className="flex justify-between items-center text-xs text-zinc-400">
                  <span className="font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    Site Tradicional ("Cartão de Visitas")
                  </span>
                  <span className="font-mono text-zinc-500">Taxa ~1,2%</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-zinc-400 font-mono">
                    ~{commonLeads} <span className="text-xs text-zinc-500 font-sans font-normal">oportunidades/mês</span>
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-700 w-[25%]" />
                </div>
              </div>

              {/* Site MAKADO com Estrutura de Vendas */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-700/80 shadow-lg space-y-2.5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    Site MAKADO (Com Estrutura de Vendas)
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                    Taxa ~4,8%
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    ~{makadoLeads} <span className="text-xs text-zinc-300 font-sans font-normal">oportunidades/mês</span>
                  </span>
                  <span className="text-xs font-mono font-black text-zinc-950 bg-white px-2 py-1 rounded-lg">
                    +{multiplier}x MAIS
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <motion.div
                    key={traffic}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-5 pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                Sua empresa gerando mais receita com o mesmo tráfego
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

