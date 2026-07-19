import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Vocês usam modelos prontos e genéricos?",
      answer: "Não. Nós criamos cada projeto de forma totalmente personalizada com código limpo e moderno (utilizando React e Tailwind CSS). Isso faz com que seu site seja incrivelmente rápido, seguro, livre de travamentos e com visual totalmente exclusivo."
    },
    {
      question: "Quanto tempo leva para o meu site ficar pronto?",
      answer: "O prazo médio de entrega varia entre 15 a 30 dias úteis. Esse tempo garante que possamos passar por todas as etapas com perfeição: planejamento estratégico, criação de textos persuasivos, design visual personalizado e programação."
    },
    {
      question: "Como funciona a reunião de planejamento gratuita?",
      answer: "É uma chamada de vídeo rápida e objetiva de 15 minutos. Nós analisamos o seu mercado atual, identificamos os problemas do seu site atual e criamos uma recomendação prática do melhor caminho para você atrair mais clientes."
    },
    {
      question: "Meu novo site vai funcionar bem em celulares?",
      answer: "Com certeza. Mais de 80% das visitas hoje acontecem por dispositivos móveis. Por isso, projetamos seu site com foco total na experiência pelo celular, garantindo carregamento instantâneo em qualquer rede móvel."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 md:py-24 bg-[#050507] relative overflow-hidden border-t border-white/[0.02]">
      {/* Soft background glow to highlight the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.015] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 block mb-3">
            [ 05. Perguntas Frequentes ]
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-light leading-tight tracking-tight text-white">
            Dúvidas <span className="font-extrabold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-3 font-light max-w-md mx-auto leading-relaxed">
            Respostas diretas e transparentes sobre como trabalhamos para elevar o nível da sua empresa.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen 
                    ? "border-white/15 bg-zinc-950/70 shadow-[0_0_30px_rgba(255,255,255,0.02)]" 
                    : "border-white/[0.06] bg-zinc-950/30 hover:border-white/[0.12] hover:bg-zinc-950/50"
                }`}
                layout
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg border transition-colors duration-350 ${
                      isOpen 
                        ? "bg-white/5 border-white/10 text-white" 
                        : "bg-white/[0.02] border-white/[0.04] text-zinc-400 group-hover:text-zinc-200"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`text-xs md:text-sm font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`text-zinc-500 transition-colors ${
                      isOpen ? "text-white" : "group-hover:text-zinc-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 pl-[52px] text-zinc-400 text-xs md:text-sm leading-relaxed font-light border-t border-white/[0.02]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
