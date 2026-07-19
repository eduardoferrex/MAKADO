import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, ShieldAlert, Sparkles, Zap, Trophy, Cpu, Activity, Timer, Ban, Check, ArrowRight } from "lucide-react";

export default function WhyItMatters() {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";
  const [funnelStage, setFunnelStage] = useState<"idle" | "loading" | "convert">("loading");

  useEffect(() => {
    const timer = setInterval(() => {
      setFunnelStage((prev) => {
        if (prev === "loading") return "convert";
        return "loading";
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="why-it-matters" 
      className="relative bg-[#050507] text-white py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.02]"
    >
      {/* Background Soft Gradients with Blue Accents */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/[0.008] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 block mb-4">
            [ 02. O Grande Problema ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight text-white">
            Por que um site lento ou amador <span className="font-extrabold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">faz você perder clientes</span>?
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-4 font-light max-w-xl mx-auto leading-relaxed">
            Seu site atual pode estar espantando clientes sem você perceber. Se ele demora para carregar ou parece amador, as pessoas saem na hora e vão para o concorrente.
          </p>
        </motion.div>

        {/* Side-by-Side Architectural Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Sites Tradicionais (Amadorismo) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8 bg-zinc-950/20 border border-white/[0.02] relative overflow-hidden flex flex-col justify-between group hover:border-red-500/10 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                  // O Modelo Comum
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3 animate-pulse" />
                  <span>Muito Lento</span>
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-light text-zinc-300 mb-6">
                Sites em WordPress e <span className="text-red-400/80 line-through font-normal">Modelos Prontos</span>
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Demora para Carregar (3s a 8s)</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-1">O site é pesado e cheio de coisas desnecessárias, fazendo o cliente desistir antes mesmo de a página abrir.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Visual Comum que Não Passa Confiança</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-1">Sua empresa fica parecendo amadora e igual a todas as outras. Clientes exigentes preferem fechar com outro.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Site Fora do Ar Constantemente</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-1">O site cai do nada bem no meio do dia, desperdiçando todo o dinheiro dos seus anúncios.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.02] flex items-center gap-3 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Você gasta com anúncios, mas as pessoas desistem.</span>
            </div>
          </motion.div>

          {/* Card 2: Estrutura de Elite MAKADO */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-3xl p-8 bg-zinc-950 border border-cyan-500/15 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(6,182,212,0.03)] group hover:border-cyan-500/30 transition-all duration-500"
          >
            {/* Ambient cyan glowing corner */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/[0.04] blur-2xl pointer-events-none rounded-full group-hover:scale-125 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                  // A Solução MAKADO
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <Trophy className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Estrutura de Elite</span>
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-light text-white mb-6">
                Site Criado do Zero e <span className="font-extrabold text-cyan-300 text-glow-cyan">Visual Super Profissional</span>
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Velocidade Incrível (Menos de 0.5s)</h4>
                    <p className="text-[11px] text-zinc-400 font-light mt-1">O site abre num piscar de olhos, garantindo que ninguém desista de esperar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Design Moderno e Impecável</h4>
                    <p className="text-[11px] text-zinc-400 font-light mt-1">Um visual planejado para mostrar que sua empresa é séria, grande e de extrema confiança.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Site Seguro e Sempre no Ar</h4>
                    <p className="text-[11px] text-zinc-400 font-light mt-1">Criado sem programas pesados ou perigosos. Seu site fica protegido e 100% online.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-[10px] text-cyan-300 font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Sua empresa com visual de líder.</span>
              </div>
              
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-white hover:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
              >
                <span>Quero um Site Assim</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Interactive Performance Acceleration Panel (Replaced static Image with custom React live visual comparison!) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-24 rounded-3xl border border-white/[0.04] bg-zinc-950/40 p-6 md:p-10 relative overflow-hidden"
        >
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_10%,rgba(6,182,212,0.015),transparent)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Live Traffic Flow Interactive Visualizer */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#09090d] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.6)] min-h-[280px] flex flex-col justify-between">
                
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#141520_1px,transparent_1px),linear-gradient(to_bottom,#141520_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    Simulador de Visitas
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[8px] font-mono">
                    <Activity className="w-2.5 h-2.5 animate-pulse" />
                    <span>AO VIVO</span>
                  </div>
                </div>

                {/* Simulated funnel graphics showing visitor drop */}
                <div className="flex-grow flex flex-col justify-center gap-5 my-4 z-10">
                  
                  {/* Traditional path */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                      <span>Site Comum (Lento)</span>
                      <span className="text-red-400 font-bold">58% de Desistência</span>
                    </div>
                    <div className="relative h-6 bg-zinc-950/80 rounded-md border border-white/[0.03] overflow-hidden flex items-center justify-between px-3">
                      {/* Flowing particle animation for standard traffic */}
                      <div className="absolute inset-y-0 left-0 bg-red-500/10 w-[42%]" />
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-400 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Visitantes</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-red-400 z-10">42% Continuam</span>
                    </div>
                  </div>

                  {/* MAKADO Path */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] text-zinc-400 font-mono">
                      <span>Nosso Site (Super Rápido)</span>
                      <span className="text-emerald-400 font-bold">Ninguém Desiste</span>
                    </div>
                    <div className="relative h-6 bg-zinc-950/80 rounded-md border border-cyan-500/20 overflow-hidden flex items-center justify-between px-3">
                      {/* Flowing particle animation for MAKADO traffic */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-y-0 left-0 bg-cyan-500/10" 
                      />
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-300 z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>Visitantes</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 z-10">100% Navegam</span>
                    </div>
                  </div>

                </div>

                <div className="border-t border-white/[0.05] pt-3 flex items-center justify-between text-[8px] font-mono text-zinc-500 z-10">
                  <span>// Simulação simples com anúncios</span>
                  <span className="text-zinc-400">Mais Vendas</span>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-3 -left-3 bg-[#050507]/90 backdrop-blur-md border border-cyan-500/20 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-white">Aproveitamento do Anúncio: 99%</span>
              </div>
            </div>

            {/* Right Column: Visual Animated Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.2em] block mb-1">
                  [ A Diferença na Prática ]
                </span>
                <h4 className="text-xl md:text-2xl font-display font-light text-white">
                  Por que a velocidade <span className="font-extrabold text-glow-white">importa para você</span>?
                </h4>
              </div>

              <div className="space-y-4">
                
                {/* Metric Bar 1: Speed Score */}
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-[11px]">
                    <span className="font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-cyan-500" />
                      Velocidade Avaliada pelo Google (Maior é Melhor)
                    </span>
                    <span className="font-mono font-bold text-cyan-300">Nosso Site 99% vs Outros 35%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </div>
                </div>

                {/* Metric Bar 2: Conversion Boost */}
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-[11px]">
                    <span className="font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-cyan-500" />
                      Visitantes que Ficam no Site (Maior é Melhor)
                    </span>
                    <span className="font-mono font-bold text-cyan-300">Nosso Site 98% vs Outros 42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </div>
                </div>

                {/* Metric Bar 3: Code bloat/size */}
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-[11px]">
                    <span className="font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      <Ban className="w-3.5 h-3.5 text-cyan-500" />
                      Peso Total do Site (Mais Leve é Melhor)
                    </span>
                    <span className="font-mono font-bold text-cyan-300">Nosso Site: 450KB (Leve) vs Outros: 4.2MB (Pesado)</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden flex justify-between">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-cyan-400"
                    />
                  </div>
                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/10 text-[11px] text-zinc-400 font-light leading-relaxed">
                <span className="font-mono text-cyan-300 mr-1.5 uppercase font-semibold">[ Fato Comprovado ]:</span> 
                Sites super rápidos trazem até 3 vezes mais contatos do que páginas demoradas. Cada segundo de espera a menos é mais dinheiro no seu bolso.
              </div>
            </div>

          </div>

        </motion.div>

        {/* Bottom micro quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center max-w-2xl mx-auto border-t border-white/[0.02] pt-8"
        >
          <p className="text-xs text-zinc-500 font-mono tracking-wide leading-relaxed uppercase">
            "Sua empresa não cresce por falta de tráfego, cresce por falta de conversão. Sua presença digital é seu maior ativo."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
