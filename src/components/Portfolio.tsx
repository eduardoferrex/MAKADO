import React from "react";
import { motion } from "motion/react";
import { Eye, ArrowUpRight, Laptop, Tablet, Smartphone, Code, ShieldCheck } from "lucide-react";

export default function Portfolio() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Vi%20o%20portfólio%20da%20MAKEDO%20e%20gostaria%20de%20criar%20um%20projeto.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const cases = [
    {
      title: "Fintech Nexo",
      category: "Sistema Web & Dashboard",
      description: "Plataforma financeira modular com gráficos rápidos em tempo real, fluxo de conciliação inteligente e segurança ponta a ponta.",
      techStack: ["React", "TypeScript", "Tailwind", "D3.js"],
      mockupBg: "bg-zinc-950",
      stats: { metric: "Tempo de carregamento", value: "0.2s" },
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="font-bold text-zinc-200">NEXO // ADMIN</span>
            <span className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded text-[8px]">ONLINE</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-center space-y-1 shadow-sm">
              <span className="text-zinc-500">SALDO</span>
              <div className="h-2 w-8 bg-zinc-300 mx-auto rounded" />
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-center space-y-1 shadow-sm">
              <span className="text-zinc-500">LEADS</span>
              <div className="h-2 w-6 bg-zinc-500 mx-auto rounded" />
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-center space-y-1 shadow-sm">
              <span className="text-zinc-500">ROI</span>
              <div className="h-2 w-7 bg-zinc-600 mx-auto rounded" />
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg flex-grow flex items-end justify-between gap-1 shadow-sm">
            <div className="w-1/4 bg-zinc-700 h-10 rounded-sm" />
            <div className="w-1/4 bg-zinc-500 h-14 rounded-sm animate-pulse" />
            <div className="w-1/4 bg-zinc-800 h-6 rounded-sm" />
            <div className="w-1/4 bg-white h-18 rounded-sm" />
          </div>
        </div>
      )
    },
    {
      title: "Vitta Medicina",
      category: "Landing Page & Agendador",
      description: "Site institucional focado na conversão de consultas particulares para clínica médica de ponta, integrado ao sistema interno de agenda.",
      techStack: ["Vite", "Tailwind", "Framer Motion", "WhatsApp API"],
      mockupBg: "bg-zinc-900/50",
      stats: { metric: "Conversão de tráfego", value: "7.8%" },
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-zinc-400">
          <div className="flex items-center justify-between">
            <span className="font-black text-white tracking-wide">VITTA // MEDICAL</span>
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-2 my-auto text-center px-4">
            <h4 className="font-sans font-extrabold text-[12px] text-zinc-100 leading-none">Cuidado Integrado</h4>
            <p className="font-sans text-[8px] text-zinc-500 leading-normal">Agende sua consulta especializada de forma 100% online.</p>
            <div className="bg-white text-zinc-950 rounded-full py-1 px-3 inline-block text-[8px] font-sans font-bold shadow-sm">
              Agendar Agora
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-2 flex justify-between text-[7px] text-zinc-500">
            <span>SISTEMA SEGURO</span>
            <span>ATENDIMENTO 24H</span>
          </div>
        </div>
      )
    },
    {
      title: "Prime Imobiliária",
      category: "Catálogo de Imóveis de Luxo",
      description: "Portal imobiliário de alta conversão, com filtros ultrarrápidos, visualizações estonteantes e área administrativa intuitiva.",
      techStack: ["React", "TypeScript", "Node.js", "Algolia Search"],
      mockupBg: "bg-zinc-900/40",
      stats: { metric: "Busca em tempo de", value: "3ms" },
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
            <span className="font-bold text-zinc-200">PRIME // ESTATE</span>
            <span className="text-zinc-500 text-[8px]">LUXO</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 flex-grow py-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 shadow-sm space-y-1.5 flex flex-col justify-between">
              <div className="bg-zinc-950 h-10 rounded-md flex items-center justify-center text-[8px] text-zinc-500">IMÓVEL 01</div>
              <div className="space-y-0.5">
                <span className="font-bold text-white">R$ 4.5M</span>
                <span className="text-[7px] text-zinc-500 block">Jardins</span>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 shadow-sm space-y-1.5 flex flex-col justify-between">
              <div className="bg-zinc-955 h-10 rounded-md flex items-center justify-center text-[8px] text-zinc-500">IMÓVEL 02</div>
              <div className="space-y-0.5">
                <span className="font-bold text-white">R$ 8.2M</span>
                <span className="text-[7px] text-zinc-500 block">Itaim</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="portfolio" className="relative py-28 bg-black overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
              [ NOSSO PORTFÓLIO ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Projetos esculpidos com <span className="font-light italic text-zinc-500">precisão cirúrgica</span>.
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:max-w-xs">
            Uma seleção de estruturas digitais pensadas para converter, automatizar e impressionar.
          </p>
        </div>

        {/* Portfolio Cases Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-zinc-950 border border-zinc-900 rounded-[24px] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:border-zinc-800"
            >
              <div>
                {/* Mockup Frame Wrapper */}
                <div className={`h-[200px] ${cs.mockupBg} relative overflow-hidden flex items-center justify-center border-b border-zinc-900 p-6`}>
                  {/* Subtle browser topbar style */}
                  <div className="absolute top-3 left-4 right-4 h-4 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <div className="bg-zinc-950/80 border border-zinc-900 text-[7px] text-zinc-500 px-3 py-0.5 rounded-md ml-2 flex-grow text-center font-mono select-none">
                      https://makedo.dev/{cs.title.toLowerCase().replace(" ", "-")}
                    </div>
                  </div>

                  {/* Mockup Inside Visual (Interactive representation) */}
                  <div className="w-full h-full mt-6 bg-zinc-950 border border-zinc-900 rounded-t-xl overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.03]">
                    {cs.illustration}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-500 font-mono tracking-widest uppercase">
                    <span>{cs.category}</span>
                    <span className="text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                      {cs.stats.value}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cs.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Tech Stack and CTA */}
              <div className="px-6 pb-6 pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cs.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-bold font-mono tracking-wide bg-zinc-900 border border-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 group-hover:scale-105"
                  title="Ver Detalhes no WhatsApp"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA within Portfolio */}
        <div className="text-center mt-16">
          <p className="text-sm text-zinc-500 mb-4">
            Seu projeto também pode estar aqui com nota 100 de qualidade.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white border-b-2 border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
          >
            <span>Conversar sobre meu projeto</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
