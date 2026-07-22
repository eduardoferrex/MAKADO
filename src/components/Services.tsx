import React from "react";
import { motion } from "motion/react";
import { Monitor, Cpu, Server, Check, ArrowUpRight } from "lucide-react";

export default function Services() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Gostaria%20de%20conversar%20sobre%20as%20soluções%20da%20MAKADO.";

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
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-zinc-300" />,
      title: "Websites",
      subtitle: "Sites institucionais & Landing Pages",
      description: "Desenvolvemos páginas extremamente rápidas e responsivas de alta performance focadas em converter visitantes em leads quentes. Nada de templates pesados: código limpo, visual espetacular e indexação perfeita no Google.",
      features: [
        "Velocidade otimizada (Grade A no PageSpeed)",
        "Copywriting persuasivo e moderno",
        "Layout exclusivo responsivo",
        "Formulários integrados ao WhatsApp/CRM",
      ],
      tag: "CONVERSÃO"
    },
    {
      icon: <Cpu className="w-8 h-8 text-zinc-300" />,
      title: "Sistemas",
      subtitle: "Sistemas sob medida & Automação",
      description: "Sistemas web desenhados exatamente para a rotina da sua empresa. Reduza trabalhos manuais, integre APIs e centralize seus dados em painéis modernos de controle. Da ideia à implantação completa.",
      features: [
        "Banco de dados robusto e veloz",
        "Painéis administrativos intuitivos",
        "Segurança de nível de banco",
        "APIs e integrações flexíveis",
      ],
      tag: "CONTROLE"
    },
    {
      icon: <Server className="w-8 h-8 text-zinc-300" />,
      title: "Estruturas",
      subtitle: "Infraestrutura digital & Domínios",
      description: "Toda a espinha dorsal tecnológica que seu negócio precisa para crescer sem gargalos de infraestrutura. Configurações de servidores escaláveis, e-mails corporativos, segurança SSL e backups automáticos.",
      features: [
        "Cloud hosting otimizado",
        "Contas de e-mail profissionais de elite",
        "Configuração de Cloudflare & DNS ultra-veloz",
        "Monitoramento 24/7 e backups diários",
      ],
      tag: "ESTABILIDADE"
    }
  ];

  return (
    <section id="servicos" className="relative py-28 bg-black overflow-hidden border-t border-b border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
            [ NOSSAS SOLUÇÕES ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pilares para sua presença digital <span className="font-light italic text-zinc-500">escalar</span>.
          </h2>
          <p className="text-zinc-450 text-base sm:text-lg">
            Combinamos design impecável e engenharia de software de elite para colocar sua marca em outro patamar de maturidade.
          </p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm relative group overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-zinc-900 group-hover:bg-zinc-300 transition-colors duration-300" />
              
              <div className="space-y-6">
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm self-start group-hover:bg-zinc-800 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-wider text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full">
                    {svc.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    {svc.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-450 leading-relaxed text-zinc-400">
                  {svc.description}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 pt-4 border-t border-zinc-900">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Button */}
              <div className="pt-8">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-white border border-zinc-850 text-zinc-300 hover:text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Orçamento Personalizado</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
