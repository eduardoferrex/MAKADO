import React from "react";
import { Laptop, Zap, Target, ShieldCheck, ArrowRight, Sparkles, Code, Cpu, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Solution() {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  return (
    <section id="solution-section" className="py-24 md:py-32 bg-black text-white relative border-t border-white/[0.03] overflow-hidden">
      
      {/* Soft background spotlight */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-900/40 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-550 uppercase block mb-3">
              NOSSA METODOLOGIA
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-[1.1]">
              A estrutura digital que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                sua marca de fato merece.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Desenvolvemos layouts focados na psicologia de decisão do consumidor. Unimos design autoral de alta grife com código extremamente rápido e focado em converter cliques em receita recorrente.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div id="solution-bento" className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[360px]">
          
          {/* Bento Card 1: Large Featured Card (Design Profissional & Exclusivo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group p-8 rounded-3xl bg-zinc-950 border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/60 bg-white/5 px-3 py-1 rounded-full uppercase">
                  100% Autoral
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-black text-white mb-3">
                Design de Alta Grife e Exclusivo
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl">
                Criamos layouts sofisticados, limpos e marcantes do absoluto zero. Esqueça templates prontos e genéricos que todo concorrente usa. Sua marca ganha autoridade visual e respeito imediato no primeiro clique.
              </p>
            </div>

            {/* Interactive Visual Block Inside Bento (Framer Motion Layout simulator) */}
            <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 bg-black border border-white/5 p-3 rounded-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-white/60 animate-pulse" />
              <div className="flex flex-col gap-1">
                <div className="w-16 h-1.5 bg-zinc-800 rounded-full" />
                <div className="w-10 h-1 bg-zinc-900 rounded-full" />
              </div>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-zinc-550 font-mono tracking-widest uppercase font-bold mt-4">
              <span>VISUAL PREMIUM EXCLUSIVO</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Speed / Performance (Estrutura Ultra Otimizada) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-8 rounded-3xl bg-zinc-950 border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/60 bg-white/5 px-3 py-1 rounded-full uppercase">
                  Desempenho
                </span>
              </div>
              
              <h3 className="text-xl font-display font-black text-white mb-3">
                Velocidade Extrema
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Código limpo, estruturado e otimizado para carregar em menos de 1.2s. Totalmente adaptado para celular.
              </p>
            </div>

            {/* Performance Simulator visual */}
            <div className="bg-[#0c0c0e] border border-white/5 p-4 rounded-2xl">
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mb-2">
                <span>Google PageSpeed</span>
                <span className="text-white font-bold">100/100</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Vendas & Conversao (Foco Total em Vendas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group p-8 rounded-3xl bg-zinc-950 border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/60 bg-white/5 px-3 py-1 rounded-full uppercase">
                  Conversão
                </span>
              </div>
              
              <h3 className="text-xl font-display font-black text-white mb-3">
                Engenharia de Vendas
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Nós projetamos o fluxo da página usando gatilhos mentais estrategicamente integrados para conduzir o lead direto ao seu WhatsApp.
              </p>
            </div>

            {/* Simulated CTA Interface */}
            <div className="bg-[#0c0c0e] border border-white/5 p-3 rounded-2xl flex items-center justify-between">
              <span className="text-[9px] font-mono text-zinc-500">Fluxo de captação ativo</span>
              <span className="text-[9px] font-mono text-white flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                98.4%
              </span>
            </div>
          </motion.div>

          {/* Bento Card 4: Suporte e Parceria (Suporte Dedicado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 group p-8 rounded-3xl bg-zinc-950 border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/60 bg-white/5 px-3 py-1 rounded-full uppercase">
                  Parceria
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-black text-white mb-3">
                Suporte de Resposta Imediata
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl">
                Nós valorizamos seu tempo. Oferecemos suporte humanizado, rápido e focado em evolução constante. Garantimos que sua estrutura digital continue rodando perfeitamente e se adaptando às mudanças sem qualquer dor de cabeça.
              </p>
            </div>

            {/* Interactive simulated chat response box */}
            <div className="absolute bottom-6 right-6 hidden md:flex flex-col gap-1.5 bg-[#0c0c0e] border border-white/5 p-3.5 rounded-2xl max-w-[200px]">
              <div className="text-[8px] font-mono text-zinc-550">SUPORTE MAKADO</div>
              <p className="text-[10px] text-white leading-tight font-medium">"Sua alteração de performance foi concluída em 8 minutos!"</p>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-zinc-550 font-mono tracking-widest uppercase font-bold mt-4">
              <span>Foco total em resultados</span>
            </div>
          </motion.div>

        </div>

        {/* Elegant Action Banner below the Bento Grid */}
        <div className="mt-16 bg-[#050506] border border-white/[0.03] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
          <div className="z-10 text-left max-w-2xl">
            <span className="inline-block text-[9px] font-mono text-zinc-500 font-bold mb-3 uppercase tracking-widest">CRESCIMENTO EXCELENTE</span>
            <h4 className="text-xl md:text-2xl font-display font-black text-white mb-3">Seu concorrente parece maior apenas pelo site dele.</h4>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
              Não porque ele tem um produto superior, mas porque a estrutura digital dele transmite mais solidez, organização e credibilidade. Mude essa perspectiva hoje mesmo.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 shrink-0 px-8 py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 hover:scale-103 transition-all cursor-pointer shadow-[0_8px_20px_rgba(255,255,255,0.05)]"
          >
            Superar a Concorrência
          </a>
        </div>

      </div>
    </section>
  );
}

