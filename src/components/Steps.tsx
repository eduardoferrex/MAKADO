import React from "react";
import { CalendarRange, PhoneCall, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Steps() {
  const stepsList = [
    {
      num: "01",
      icon: <CalendarRange className="w-4 h-4 text-white" />,
      title: "Agendamento Expresso",
      subtitle: "Clique no botão e defina o melhor dia e horário na nossa agenda em menos de 1 minuto."
    },
    {
      num: "02",
      icon: <PhoneCall className="w-4 h-4 text-white" />,
      title: "Diagnóstico de Elite",
      subtitle: "Faremos uma chamada estratégica rápida de 15 minutos para mapear seu posicionamento e funis."
    },
    {
      num: "03",
      icon: <Sparkles className="w-4 h-4 text-white" />,
      title: "Planejamento Visual",
      subtitle: "Apresentamos uma proposta sob medida com o desenho preliminar da sua futura estrutura digital."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="steps-section" className="py-24 md:py-32 bg-black text-white border-t border-white/[0.03] relative overflow-hidden">
      
      {/* Background glow spot */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-white/[0.01] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-900 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase font-black">
              PROCESSO DE EMBARQUE
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6">
            Como funciona nossa reunião?
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Sem enrolação, termos complexos ou reuniões de horas. Criamos um processo transparente, simplificado e totalmente focado no crescimento de vendas do seu negócio.
          </p>
        </div>

        {/* Timeline Grid */}
        <motion.div
          id="steps-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Subtle connecting layout line on md+ */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -z-10" />

          {stepsList.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center md:items-start text-center md:text-left bg-zinc-950/40 border border-white/[0.02] hover:border-white/[0.06] rounded-2xl p-8 transition-all duration-300 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-center w-full mb-6">
                <span className="font-mono text-2xl font-black text-zinc-700 group-hover:text-white transition-colors duration-300">
                  {step.num}
                </span>

                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-base font-display font-black text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {step.subtitle}
              </p>

              <div className="mt-8 pt-4 border-t border-white/[0.03] w-full flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-750 group-hover:bg-white transition-colors" />
                <span className="text-[9px] font-mono text-zinc-650 group-hover:text-zinc-450 transition-colors uppercase tracking-wider">
                  Etapa rápida e sem custos
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA reminder */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#050506] border border-white/[0.03] rounded-2xl p-4 px-6 text-xs md:text-sm text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-zinc-450" />
              Dúvidas adicionais? Fale com nosso suporte diretamente no WhatsApp
            </span>
            <a
              href="https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline flex items-center gap-1"
            >
              Chamar suporte
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Brand statement */}
        <p className="text-center text-[10px] text-zinc-600 font-mono tracking-widest mt-16 uppercase">
          PROCESSOS TRANSPARENTES • CÓDIGO AUTORAL • PERFORMANCE EXTREMA
        </p>

      </div>
    </section>
  );
}
