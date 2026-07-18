import React, { useState } from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([true, true, true, true]);

  const items = [
    "Reunião 100% gratuita (sem qualquer compromisso comercial)",
    "Diagnóstico profissional do posicionamento atual da sua marca",
    "Sugestões práticas de melhorias de design e velocidade",
    "Cronograma e plano visual inicial para sua futura estrutura digital"
  ];

  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  const handleToggle = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <section id="cta-final-section" className="py-24 md:py-32 bg-black text-white border-t border-white/[0.03] relative overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main CTA card */}
        <div className="bg-zinc-950/60 border border-white/[0.03] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Micro active status badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-widest text-white uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              AGENDA DE ATENDIMENTO ATIVA
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
            Pronto para erguer uma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
              máquina de autoridade digital?
            </span>
          </h2>

          <p className="text-zinc-400 text-xs md:text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            Pare de perder clientes qualificados para concorrentes comuns que parecem maiores apenas por terem um site melhor. Garanta seu plano estratégico hoje mesmo.
          </p>

          {/* Interactive Toggle Checklist card */}
          <div className="max-w-md mx-auto bg-black/60 border border-white/[0.03] p-6 md:p-8 rounded-2xl mb-12 text-left space-y-4">
            <p className="text-[9px] font-mono text-zinc-500 font-bold tracking-widest uppercase mb-4">
              O QUE APRESENTAREMOS NA SUA REUNIÃO:
            </p>
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className="flex items-start gap-3.5 cursor-pointer group select-none"
              >
                <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                  checkedItems[index]
                    ? "bg-white border-white text-black"
                    : "border-white/15 bg-transparent text-transparent group-hover:border-white/30"
                }`}>
                  <Check className="w-3 h-3 stroke-[3.5]" />
                </div>
                <span className={`text-xs md:text-sm transition-colors ${
                  checkedItems[index] ? "text-zinc-200" : "text-zinc-550 line-through"
                }`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Big high-contrast CTA button */}
          <div className="flex flex-col items-center gap-4">
            <a
              id="cta-final-button"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 hover:bg-zinc-200 hover:scale-102 transition-all cursor-pointer shadow-[0_8px_20px_rgba(255,255,255,0.05)] group"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              Solicitar Reunião Estratégica
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Subtext secure notice */}
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500 mt-2">
              <ShieldCheck className="w-4 h-4 text-zinc-450" />
              <span>Agendamento rápido e seguro diretamente pelo WhatsApp oficial</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

