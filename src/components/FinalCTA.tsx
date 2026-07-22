import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20com%20a%20MAKADO.";

  const items = [
    "Design 100% Autoral (Sem Cópias)",
    "Código Limpo Otimizado para SEO",
    "Suporte Direto com os Devs",
    "Entrega em Tempo Recorde"
  ];

  return (
    <section id="contato" className="relative py-32 bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-[0.04]" />
      
      {/* Subtle light leak for elegant touch */}
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-[10px] font-bold font-mono text-zinc-300 uppercase tracking-widest">
              AGENDE HOJE MESMO
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Pronto para elevar a imagem do seu negócio?
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Seu próximo cliente vai julgar sua empresa pelo seu site. Não deixe uma primeira impressão amadora afastar vendas valiosas.
          </p>

          {/* Core Commitments checklist */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 max-w-2xl mx-auto">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase tracking-wide">
                <CheckCircle className="w-4 h-4 text-white shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Big CTA Button */}
          <div className="pt-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-zinc-950 font-extrabold text-base tracking-wide hover:bg-zinc-200 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.06)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Iniciar Meu Projeto</span>
              <ArrowRight className="w-5 h-5 text-zinc-950" />
            </a>
          </div>

          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-2">
            // PRIMEIRA REUNIÃO DE ALINHAMENTO COMPLEMENTAR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
