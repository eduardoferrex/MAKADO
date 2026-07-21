import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona o desenvolvimento de um site personalizado com a MAKEDO?",
      a: "Tudo começa com um diagnóstico gratuito para entender os gargalos e objetivos do seu negócio. Em seguida, criamos um protótipo exclusivo focado no seu público-alvo. Após a aprovação do design, codificamos o site do zero com tecnologias modernas de alto desempenho (React/Vite) para garantir que seja absurdamente rápido e responsivo."
    },
    {
      q: "Qual é o tempo de entrega para uma landing page ou site institucional?",
      a: "Normalmente entregamos sites institucionais e landing pages de elite entre 7 a 15 dias úteis. Projetos mais complexos ou sistemas sob medida têm cronogramas personalizados dependendo dos requisitos, sempre alinhados de antemão e entregues rigorosamente no prazo."
    },
    {
      q: "Eu mesmo vou conseguir alterar o conteúdo do meu site depois?",
      a: "Sim! Desenvolvemos o painel administrativo mais amigável do mercado ou integramos gerenciadores de conteúdo intuitivos. Você poderá trocar textos, imagens, banners e links facilmente sem precisar saber nada de programação."
    },
    {
      q: "Vocês cuidam da hospedagem, domínio e servidores?",
      a: "Cuidamos de tudo! Nós configuramos seu domínio, e-mails corporativos profissionais, certificado de segurança SSL e hospedamos seu site em servidores cloud de alta performance. Você não precisa se preocupar com nenhuma burocracia técnica."
    },
    {
      q: "Como o site da MAKEDO ajuda na minha campanha de tráfego pago (Google/Meta)?",
      a: "O tráfego pago atrai pessoas, mas o site decide se elas compram ou vão embora. Nossos sites carregam em milissegundos e têm copywriting focado em persuasão e conversão, o que diminui drasticamente o custo por lead (CPL) e multiplica o retorno sobre o investimento (ROI) da sua empresa."
    }
  ];

  return (
    <section id="faq" className="relative py-28 bg-black overflow-hidden border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
            [ SUPORTE & DÚVIDAS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas <span className="font-light italic text-zinc-500">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            Tudo o que você precisa saber sobre como trabalhamos para elevar o nível da sua empresa.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-800"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 rounded-2xl"
                >
                  <span className="font-bold text-base text-white tracking-tight flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-zinc-550 shrink-0" />
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-zinc-300" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-zinc-300" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed pl-14 border-t border-zinc-900 bg-zinc-950">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
