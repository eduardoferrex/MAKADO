import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Monitor, Layout, Cpu } from "lucide-react";

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="what-we-do-section" 
      className="relative bg-[#0d0d10] text-white py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-b border-white/[0.03]"
    >
      {/* Decorative vertical running lines as structural layout anchors */}
      <div className="absolute top-0 left-[15%] w-[1px] h-full bg-white/[0.02] pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-[25%] w-[1px] h-full bg-white/[0.02] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 block mb-4">
              [ 02. Entregáveis de Elite ]
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight tracking-tight text-white">
              Nossa assinatura é a <span className="font-extrabold text-white block md:inline">perfeição estética</span> aliada à alta conversão.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Não desenvolvemos templates genéricos. Desenhamos códigos autorais e estruturas sob medida, pensadas de forma cirúrgica para destacar sua autoridade e multiplicar seus resultados.
            </p>
          </div>
        </div>

        {/* Asymmetric Alternated Grid Blocks (Avoiding boring 3x1 grids) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 md:space-y-24"
        >
          
          {/* Item 01: Websites Autoriais */}
          <motion.div 
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="grid grid-cols-1 lg:grid-cols-12 border-t border-b border-white/[0.04] py-12 gap-8 items-center group hover:bg-white/[0.01] transition-all duration-500 relative"
          >
            <div className="lg:col-span-1 text-zinc-600 font-mono text-xs md:text-sm self-start pt-1">
              [ 01 ]
            </div>
            
            <div className="lg:col-span-5 relative">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-4">
                Websites Autoriais
                <Layout className="w-5 h-5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                Páginas institucionais de alto padrão que traduzem a verdadeira força da sua marca. Unimos velocidade ultrarrápida (Core Web Vitals do Google), usabilidade impecável e um design que prende a atenção do seu cliente ideal logo nos primeiros segundos de navegação.
              </p>
            </div>

            {/* Interactive Wireframe Visual Element for Websites */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end lg:px-8 relative overflow-hidden h-32 md:h-40">
              <AnimatePresence mode="wait">
                {hoveredIndex === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-xs bg-zinc-950 border border-white/10 rounded-xl p-4 space-y-3 font-mono text-[9px] text-zinc-500 shadow-2xl"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                      </div>
                      <span className="text-[8px] text-zinc-600">makedo.agency</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-white/10 rounded w-2/3" />
                      <div className="h-1.5 bg-white/5 rounded w-full" />
                      <div className="h-1.5 bg-white/5 rounded w-5/6" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-8 bg-white/[0.02] border border-white/5 rounded flex items-center justify-center font-bold">SEO</div>
                      <div className="h-8 bg-white/[0.02] border border-white/5 rounded flex items-center justify-center font-bold text-white">99%</div>
                      <div className="h-8 bg-white/[0.02] border border-white/5 rounded flex items-center justify-center font-bold">LCP</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-550 font-mono text-[11px] uppercase tracking-wider space-y-1 text-left lg:text-right"
                  >
                    <p>— UI/UX Design Exclusivo</p>
                    <p>— SEO Otimizado Core Web Vitals</p>
                    <p>— Mobile First Nativo</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1 flex justify-end">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 hover:border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Item 02: Sistemas Sob Medida */}
          <motion.div 
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.04] pb-12 gap-8 items-center group hover:bg-white/[0.01] transition-all duration-500 relative"
          >
            <div className="lg:col-span-1 text-zinc-600 font-mono text-xs md:text-sm self-start pt-1">
              [ 02 ]
            </div>
            
            <div className="lg:col-span-5 relative">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-4">
                Sistemas Sob Medida
                <Cpu className="w-5 h-5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                Plataformas inteligentes, dashboards internos, painéis administrativos e automações que resolvem gargalos de escala da sua empresa. Criamos sistemas seguros, rápidos e intuitivos para que sua operação funcione sem fricção e de forma automatizada.
              </p>
            </div>

            {/* Interactive Wireframe Visual Element for Systems */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end lg:px-8 relative overflow-hidden h-32 md:h-40">
              <AnimatePresence mode="wait">
                {hoveredIndex === 1 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-xs bg-zinc-950 border border-white/10 rounded-xl p-4 space-y-3 font-mono text-[9px] text-zinc-500 shadow-2xl"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-white font-bold">OPERATIONS_DASHBOARD</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-white/5 p-2 rounded bg-white/[0.01]">
                        <p className="text-zinc-600">APIs ALIVE</p>
                        <p className="text-white font-bold text-xs">24 / 24</p>
                      </div>
                      <div className="border border-white/5 p-2 rounded bg-white/[0.01]">
                        <p className="text-zinc-600">REDUNDANCY</p>
                        <p className="text-white font-bold text-xs">99.99%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-1.5 bg-emerald-500/20 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: "92%" }} 
                          transition={{ duration: 1 }} 
                          className="h-full bg-emerald-500" 
                        />
                      </div>
                      <span className="text-emerald-400">92%</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-550 font-mono text-[11px] uppercase tracking-wider space-y-1 text-left lg:text-right"
                  >
                    <p>— Integração Ágil de APIs</p>
                    <p>— Painéis de Controle de Dados</p>
                    <p>— Engenharia de Fluxo de Trabalho</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1 flex justify-end">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 hover:border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Item 03: Estruturas Digitais */}
          <motion.div 
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.04] pb-12 gap-8 items-center group hover:bg-white/[0.01] transition-all duration-500 relative"
          >
            <div className="lg:col-span-1 text-zinc-600 font-mono text-xs md:text-sm self-start pt-1">
              [ 03 ]
            </div>
            
            <div className="lg:col-span-5 relative">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-4">
                Estruturas Digitais
                <Monitor className="w-5 h-5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                Landing pages de captura agressiva, funis de conversão otimizados e setups técnicos de alta performance. Estruturamos todo o ecossistema que recebe o seu tráfego pago, reduzindo a taxa de rejeição e maximizando a taxa de conversão das suas campanhas.
              </p>
            </div>

            {/* Interactive Wireframe Visual Element for Structures */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end lg:px-8 relative overflow-hidden h-32 md:h-40">
              <AnimatePresence mode="wait">
                {hoveredIndex === 2 ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-xs bg-zinc-950 border border-white/10 rounded-xl p-4 space-y-2.5 font-mono text-[9px] text-zinc-500 shadow-2xl"
                  >
                    <div className="text-center border-b border-white/5 pb-2 text-zinc-400 font-bold">
                      CONVERSION_FUNNEL
                    </div>
                    
                    {/* Funnel Layers */}
                    <div className="space-y-1.5 text-center text-white">
                      <div className="bg-white/10 py-1 px-3 rounded w-full text-[8px] border border-white/5">
                        Tráfego Pago (100%)
                      </div>
                      <div className="bg-white/15 py-1 px-3 rounded w-4/5 mx-auto text-[8px] border border-white/5">
                        Visita Ativa (78%)
                      </div>
                      <div className="bg-white/20 py-1 px-3 rounded w-3/5 mx-auto text-[8px] font-bold border border-white/10 flex items-center justify-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                        WhatsApp (14.2%)
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-550 font-mono text-[11px] uppercase tracking-wider space-y-1 text-left lg:text-right"
                  >
                    <p>— Funis de Conversão Premium</p>
                    <p>— Landing Pages Ultra Rápidas</p>
                    <p>— Arquitetura de Infraestrutura Nuvem</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1 flex justify-end">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 hover:border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
