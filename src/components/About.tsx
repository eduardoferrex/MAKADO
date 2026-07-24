import React from "react";
import { motion } from "motion/react";
import { Compass, Lightbulb, HeartHandshake, Eye, Award, CheckCircle } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-zinc-300" />,
      title: "Credibilidade Suprema",
      description: "Sites que parecem de marcas globais, estabelecendo confiança instantânea para quem entra.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-zinc-300" />,
      title: "Foco em Conversão",
      description: "Planejado milimetricamente para guiar o usuário até a compra ou contato.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-zinc-300" />,
      title: "Suporte Personalizado",
      description: "Parceria direta e sem rodeios. Você fala direto com os especialistas desenvolvedores.",
    },
  ];

  const stats = [
    { value: "100%", label: "Velocidade no Mobile" },
    { value: "3x+", label: "Mais conversão de tráfego" },
    { value: "100%", label: "Design autoral exclusivo" },
  ];

  return (
    <section id="sobre" className="relative py-28 bg-transparent overflow-hidden border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Story/Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
                [ O DIAGNÓSTICO E O MÉTODO ]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Seu site atual é um <span className="text-zinc-500 font-light italic">custo estático</span> ou uma <span className="border-b-2 border-white pb-1">máquina de vendas</span>?
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-zinc-400 max-w-2xl text-base sm:text-lg leading-relaxed">
              <p>
                <strong>O Maior Erro do Mercado:</strong> A maioria das agências entrega "sites bonitinhos", mas completamente mudos sobre o seu negócio. O visitante entra, não entende a proposta de valor em 3 segundos, se confunde e fecha a aba. O resultado? Um cartão de visitas digital caro que não gera um único lead qualificado.
              </p>
              <p>
                A <strong>MAKADO</strong> nasceu para acabar com esse desperdício de tráfego. Desenvolvemos o <strong>Método Tração MAKADO®</strong>: uma metodologia proprietária que une psicologia de vendas B2B, copywriting perspicaz e engenharia de alta performance para converter visitantes frios em reuniões agendadas.
              </p>
            </motion.div>

            {/* Micro Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wide block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Key Pillars / Highlights List */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl flex gap-4 transition-all duration-300 shadow-sm hover:border-zinc-800"
              >
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl self-start shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
