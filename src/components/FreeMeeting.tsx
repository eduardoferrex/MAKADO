import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare, CalendarRange, Sparkles } from "lucide-react";

export default function FreeMeeting() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  const stepContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="free-meeting-section" 
      className="relative bg-[#0d0d10] text-white py-24 md:py-36 px-6 md:px-12 border-t border-b border-white/[0.03]"
    >
      {/* Structural layout grid lines */}
      <div className="absolute top-0 left-[25%] w-[1px] h-full bg-white/[0.015] pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 block mb-4">
            [ 04. Jornada sem risco ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight">
            Como funciona a <span className="font-extrabold text-white block md:inline text-glow-white">Reunião Gratuita</span>?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-light mt-4">
            Nossa intenção é agregar valor real ao seu negócio antes mesmo de qualquer fechamento. Em 15 minutos, identificamos pontos cegos no seu site atual e propomos soluções ágeis.
          </p>
        </div>

        {/* Asymmetric Timeline Step Cards */}
        <motion.div 
          variants={stepContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 relative"
        >
          {/* Animated Connecting Vector Path behind card layout on desktop */}
          <div className="absolute top-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none hidden lg:block" />

          {/* Step 01 */}
          <motion.div 
            variants={stepVariants}
            onMouseEnter={() => setHoveredStep(0)}
            onMouseLeave={() => setHoveredStep(null)}
            className="flex flex-col bg-zinc-950/60 border border-white/[0.04] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300 shadow-2xl"
          >
            {/* Glowing spot matching active state */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />

            {/* Massive modern background number */}
            <div className="absolute top-4 right-4 text-7xl font-display font-black text-white/[0.02] select-none group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-300">
              01
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:scale-110 group-hover:border-white/30 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Primeiro Passo</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Agendar no WhatsApp
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mt-auto">
              Clique em qualquer botão do site para iniciar uma conversa rápida. Nossa equipe agendará o melhor horário na sua agenda de forma rápida e conveniente.
            </p>
          </motion.div>

          {/* Step 02 */}
          <motion.div 
            variants={stepVariants}
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
            className="flex flex-col bg-zinc-950/60 border border-white/[0.04] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300 lg:translate-y-4 shadow-2xl"
          >
            {/* Glowing spot matching active state */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />

            {/* Massive modern background number */}
            <div className="absolute top-4 right-4 text-7xl font-display font-black text-white/[0.02] select-none group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-300">
              02
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:scale-110 group-hover:border-white/30 transition-transform">
              <CalendarRange className="w-4 h-4" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Segundo Passo</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Conversa sobre o Negócio
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mt-auto">
              Faremos uma reunião rápida online para entender os objetivos estratégicos da sua empresa, seu público-alvo, seus pontos fortes e suas maiores dificuldades digitais.
            </p>
          </motion.div>

          {/* Step 03 */}
          <motion.div 
            variants={stepVariants}
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
            className="flex flex-col bg-zinc-950/60 border border-white/[0.04] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 transition-colors duration-300 lg:translate-y-8 shadow-2xl"
          >
            {/* Glowing spot matching active state */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />

            {/* Massive modern background number */}
            <div className="absolute top-4 right-4 text-7xl font-display font-black text-white/[0.02] select-none group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-300">
              03
            </div>

            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:scale-110 group-hover:border-white/30 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Terceiro Passo</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Proposta Sob Medida
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mt-auto">
              Apresentaremos um plano personalizado focado no seu retorno sobre o investimento, com cronogramas transparentes, design exclusivo e escopo adaptado às suas necessidades.
            </p>
          </motion.div>

        </motion.div>

        {/* Dynamic callout under steps */}
        <div className="mt-20 md:mt-32 border-t border-white/[0.04] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-white text-base font-bold font-display">Sem compromisso. Puro valor.</h4>
            <p className="text-zinc-500 text-xs mt-1 font-light">Se você não gostar da proposta, poderá usar os feedbacks da reunião como quiser.</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-zinc-200 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-xl hover:shadow-white/[0.03] cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span>Garantir Meu Horário</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
