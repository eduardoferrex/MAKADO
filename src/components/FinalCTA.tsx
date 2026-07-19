import React from "react";
import { ArrowRight, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  return (
    <section 
      id="final-cta-section" 
      className="relative bg-[#050507] text-white py-24 md:py-28 px-6 md:px-12 overflow-hidden border-t border-white/[0.02]"
    >
      {/* Background soft lighting effects with zinc glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-zinc-500/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        
        {/* Urgent Warning/Metric Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <AlertTriangle className="w-3.5 h-3.5 text-zinc-400 animate-pulse" />
          <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-[0.2em]">
            Alerta: Pare de perder dinheiro com anúncios enviando pessoas para sites lentos
          </span>
        </div>

        {/* Big CTA Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light leading-[1.1] tracking-tight mb-6">
          Sua empresa merece um <span className="font-extrabold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">visual profissional</span> na internet.
        </h2>

        {/* Core Subtitle */}
        <p className="text-zinc-400 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed mb-10">
          Não perca mais clientes para concorrentes que têm uma imagem melhor. Tenha um site rápido, bonito e que traz novos contatos para você todos os dias.
        </p>

        {/* Call to Action Premium Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xs mx-auto">
          <MagneticButton 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-zinc-200 border border-white cursor-pointer w-full"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Quero Meu Site Profissional</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
        </div>

        {/* Security & Authenticity guarantees banner */}
        <div className="mt-12 flex items-center justify-center gap-6 text-[9px] font-mono text-zinc-500 uppercase tracking-widest border-t border-white/[0.03] pt-10 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-zinc-500" />
            <span>Site Criado do Zero</span>
          </div>
          <div className="h-3 w-[1px] bg-white/5" />
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>100% Seguro e Protegido</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
