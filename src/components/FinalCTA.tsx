import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  return (
    <section 
      id="final-cta-section" 
      className="relative bg-[#0c0c0e] text-white py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 1.5vw, 100% 100%, 0 calc(100% - 1.5vw))" }}
    >
      {/* Exquisite extremely subtle organic glowing background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.015)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Simple elegant badge icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-900"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">Escopo de Alta Performance</span>
        </motion.div>

        {/* Large, direct, graphic header */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-display font-black leading-[1.1] tracking-tight text-white"
        >
          Chega de parecer <br className="hidden md:inline" />
          <span className="text-zinc-600 line-through">amador</span> online.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-light"
        >
          Agende sua reunião estratégica gratuita no WhatsApp agora mesmo. Descubra o plano exato para impulsionar a credibilidade e as vendas da sua empresa com design de elite.
        </motion.p>

        {/* Major Action trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="pt-6"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3.5 px-8 py-5 bg-white text-black hover:bg-zinc-100 hover:rounded-3xl text-xs md:text-sm font-mono font-bold uppercase tracking-widest rounded-2xl transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 cursor-pointer overflow-hidden"
          >
            {/* Soft highlight slide effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur" />
            
            <span className="relative z-10">Inicie seu projeto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          </a>
        </motion.div>

        {/* Small sub-label emphasizing instant access */}
        <p className="text-[10px] font-mono tracking-widest text-zinc-550 uppercase">
          — Atendimento Imediato via WhatsApp comercial —
        </p>

      </div>
    </section>
  );
}
