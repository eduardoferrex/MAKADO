import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Globe, Code2 } from "lucide-react";

interface ProjectCase {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  url: string;
}

export default function Portfolio() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Vi%20o%20portfólio%20da%20MAKADO%20e%20gostaria%20de%20criar%20um%20projeto.";

  const cases: ProjectCase[] = [
    {
      id: "norato",
      title: "Norato Construtora",
      category: "Engenharia & Construção de Luxo",
      description: "Website institucional para construtora de alto padrão, focado em posicionamento de mercado, apresentação de obras e captação de clientes.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      url: "https://noratoconstrutora.vercel.app/",
    },
    {
      id: "makado",
      title: "MAKADO",
      category: "Site Institucional & Plataforma",
      description: "Estrutura digital de alta conversão com design minimalista autoral, animações fluidas, velocidade extrema e posicionamento de autoridade.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      url: "https://www.makado.site",
    },
    {
      id: "pablo",
      title: "Pablo Liberato",
      category: "Visagismo & Barbearia de Luxo",
      description: "Website autoral para profissional visagista de elite, projetado para destacar serviços premium e agendamentos online.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      url: "https://pabloliberato.vercel.app",
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-black overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
              [ PORTFÓLIO ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Projetos selecionados. <span className="font-light italic text-zinc-500">Design de alta performance</span>.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:max-w-xs">
            Cada estrutura é projetada sob medida para garantir velocidade, sofisticação e conversão.
          </p>
        </div>

        {/* Minimalist Pure Text & Code Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((cs) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group bg-zinc-950 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {cs.category}
                  </span>

                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 hover:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-800"
                  >
                    <Globe className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cs.url.replace("https://", "")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group-hover:text-zinc-300 transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{cs.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                    </h3>
                  </a>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cs.description}
                  </p>
                </div>
              </div>

              {/* Tech stack & Action */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {cs.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={cs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-all shadow-md group-hover:scale-105"
                >
                  <span>Acessar Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-zinc-900">
          <p className="text-sm text-zinc-500 mb-3">
            Quer um projeto no mesmo padrão de qualidade e alta performance?
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
          >
            <span>Conversar sobre meu projeto no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


