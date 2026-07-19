import React from "react";
import { motion } from "motion/react";
import { AlertCircle, TrendingDown, Target, Zap, ShieldCheck } from "lucide-react";

export default function WhyItMatters() {
  return (
    <section 
      id="why-it-matters-section" 
      className="relative bg-[#0c0c0e] text-white py-32 md:py-44 px-6 md:px-12 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 1.5vw, 100% 100%, 0 calc(100% - 1.5vw))" }}
    >
      {/* Visual glowing accent used with absolute restraint */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Large graphic typographic quote and text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 block mb-4">
              [ 03. A Dura Realidade ]
            </span>
            <div className="h-[1px] w-20 bg-zinc-800 my-6" />
          </div>

          <div className="lg:col-span-9 space-y-12">
            
            {/* The main expressive typography statement */}
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight text-zinc-300">
              O seu produto ou serviço é excelente. <br />
              <span className="text-white font-extrabold text-glow-white">
                Mas o seu site atual diz o oposto.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              
              {/* Asymmetric emotional impact description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-zinc-500">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <span className="text-xs font-mono uppercase tracking-wider">A Perda Invisível</span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  Todos os dias, potenciais parceiros ou clientes buscam sua empresa online. Se a sua estrutura digital for lenta, confusa ou amadora, eles fecham a aba em segundos e compram de um concorrente que transmite mais segurança imediata.
                </p>
              </div>

              {/* Second asymmetric block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-zinc-500">
                  <Target className="w-4 h-4 text-white" />
                  <span className="text-xs font-mono uppercase tracking-wider">A Solução Rápida</span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  Credibilidade na internet não é opcional; é o que define o seu faturamento. A MAKEDO reconstrói seu posicionamento com layouts autorais e extremamente rápidos, convertendo cliques frios em conversas ativas no seu WhatsApp.
                </p>
              </div>

            </div>

            {/* HIGH-FIDELITY GRAPHICAL PERFORMANCE & CREDIBILITY COMPARISON PANEL */}
            <div className="pt-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 block mb-6">
                [ Comparações Métricas de Conversão ]
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                
                {/* Red/Amber Card (Common Legacy Models) */}
                <div className="bg-zinc-950/40 border border-red-500/10 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/20 transition-all duration-300 md:translate-y-3">
                  <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest block mb-4">
                    ● Modelos Comuns / Templates Prontos
                  </span>
                  
                  <div className="space-y-6">
                    {/* Metric 01 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-400 font-mono">
                        <span>VELOCIDADE DE CARREGAMENTO</span>
                        <span className="text-red-500">38 / 100 (Crítico)</span>
                      </div>
                      <div className="h-1.5 bg-red-950/30 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "38%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-red-500/50" 
                        />
                      </div>
                    </div>

                    {/* Metric 02 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-400 font-mono">
                        <span>TAXA DE REJEIÇÃO (BOUNCE RATE)</span>
                        <span className="text-red-500">76% (Altíssimo)</span>
                      </div>
                      <div className="h-1.5 bg-red-950/30 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "76%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-red-500" 
                        />
                      </div>
                    </div>

                    {/* Metric 03 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-400 font-mono">
                        <span>ESTÉTICA E CREDIBILIDADE</span>
                        <span className="text-red-500">Amador</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* White/Glowing Card (The MAKEDO Signature) */}
                <div className="bg-zinc-950/80 border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-[0_15px_40px_rgba(255,255,255,0.015)] md:-translate-y-3">
                  {/* Glowing background spot */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-white/[0.03] blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  <span className="text-[9px] font-mono text-white uppercase tracking-widest block mb-4 flex items-center gap-2">
                    <Zap className="w-3 h-3 text-white animate-pulse" />
                    <span>Estrutura de Elite MAKEDO</span>
                  </span>

                  <div className="space-y-6">
                    {/* Metric 01 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white font-mono font-bold">
                        <span>VELOCIDADE DE CARREGAMENTO</span>
                        <span className="text-white text-glow-white">99 / 100 (Excelente)</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "99%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-white text-glow-white" 
                        />
                      </div>
                    </div>

                    {/* Metric 02 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white font-mono font-bold">
                        <span>TAXA DE REJEIÇÃO (BOUNCE RATE)</span>
                        <span className="text-zinc-400">18% (Mínimo)</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "18%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-zinc-400" 
                        />
                      </div>
                    </div>

                    {/* Metric 03 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white font-mono font-bold">
                        <span>ESTÉTICA E CREDIBILIDADE</span>
                        <span className="text-white uppercase flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Autoral Premium
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* A big highlighted visual takeaway */}
            <div className="border-l-2 border-white/25 pl-6 md:pl-10 py-2 mt-8 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 mb-2">Conexão Emocional</p>
              <blockquote className="text-lg md:text-xl font-light text-zinc-300 italic">
                "Você gasta energia construindo a reputação da sua empresa no mundo físico. Não deixe que uma presença digital fraca destrua esse esforço."
              </blockquote>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
