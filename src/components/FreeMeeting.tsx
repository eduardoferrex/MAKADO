import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
      className="relative bg-[#0d0d10] text-white py-32 md:py-44 px-6 md:px-12 border-t border-b border-white/[0.03]"
      style={{ clipPath: "polygon(0 0, 100% 1.5vw, 100% 100%, 0 calc(100% - 1.5vw))" }}
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

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 border-l-2 border-white pl-3 py-1 mb-10 transition-all group-hover:border-white group-hover:text-white">
              STAGE_01 // INITIAL_CONTACT
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

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 border-l-2 border-white pl-3 py-1 mb-10 transition-all group-hover:border-white group-hover:text-white">
              STAGE_02 // DIAGNOSTIC_CALL
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

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 border-l-2 border-white pl-3 py-1 mb-10 transition-all group-hover:border-white group-hover:text-white">
              STAGE_03 // PLAN_DELIVERY
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

        {/* Detailed breakdown of the strategic meeting deliverables */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.04] pt-16"
        >
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-2">
              [ Detalhes da Sessão Estratégica ]
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-light text-white tracking-tight">
              O que entregamos na sua <span className="font-extrabold text-glow-white">Análise Gratuita</span>
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-4 leading-relaxed font-light">
              Nossa reunião estratégica dura entre 15 a 30 minutos e é 100% focada em apontar melhorias de conversão e velocidade para o seu negócio, sem empurrar serviços.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-950/40 border border-white/[0.03] p-6 rounded-2xl">
              <div className="text-white font-mono text-[11px] uppercase tracking-wider mb-2 text-zinc-300">
                // 01. Raio-X de Conversão
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Analisamos sua estrutura digital atual (ou de seus concorrentes diretos) para identificar por que você está perdendo leads ou contatos comerciais de alto valor.
              </p>
            </div>
            
            <div className="bg-zinc-950/40 border border-white/[0.03] p-6 rounded-2xl">
              <div className="text-white font-mono text-[11px] uppercase tracking-wider mb-2 text-zinc-300">
                // 02. Auditoria Técnica Rápida
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Mapeamos o tempo de carregamento e as falhas de experiência (UX/UI) que prejudicam o ranqueamento no Google e aumentam os custos de tráfego pago.
              </p>
            </div>

            <div className="bg-zinc-950/40 border border-white/[0.03] p-6 rounded-2xl">
              <div className="text-white font-mono text-[11px] uppercase tracking-wider mb-2 text-zinc-300">
                // 03. Planejamento de Arquitetura
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Definimos as tecnologias mais eficientes para o seu caso (React, Next.js, Node.js ou automações personalizadas) para máxima performance.
              </p>
            </div>

            <div className="bg-zinc-950/40 border border-white/[0.03] p-6 rounded-2xl">
              <div className="text-white font-mono text-[11px] uppercase tracking-wider mb-2 text-zinc-300">
                // 04. Mapeamento de Prazos
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Você sai da conversa sabendo exatamente o investimento necessário, o tempo de entrega exato e os próximos passos para lançar a sua estrutura.
              </p>
            </div>
          </div>
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
            className="group relative overflow-hidden inline-flex items-center gap-3 px-7 py-4 bg-white text-black hover:bg-zinc-100 hover:rounded-2xl text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-500 ease-out shadow-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur" />
            
            <span className="relative z-10">Inicie seu projeto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          </a>
        </div>

      </div>
    </section>
  );
}
