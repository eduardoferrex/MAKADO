import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Layout, Globe, Cpu, Search, CheckCircle, Flame, Target, MessageSquareCode } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  description: string;
  details: string[];
  features: string[];
  icon: React.ReactNode;
}

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  const pillars: Pillar[] = [
    {
      number: "01",
      title: "Páginas de Vendas (Landing Pages)",
      description: "Páginas feitas sob medida para atrair clientes vindos de anúncios (Google, Instagram e Facebook). Criamos tudo com código rápido e moderno, sem usar ferramentas pesadas que deixam o site lento.",
      details: [
        "Foco total em aumentar suas vendas.",
        "Textos simples e convincentes que quebram as dúvidas dos clientes.",
        "Conexão direta com sistemas de anúncios do Instagram e Google."
      ],
      features: ["Anúncios", "Textos de Venda", "Super Rápido"],
      icon: <Target className="w-5 h-5 text-cyan-400" />
    },
    {
      number: "02",
      title: "Design Exclusivo e Identidade",
      description: "Sua empresa merece a melhor imagem na internet. Criamos visuais e designs do zero, sem copiar ninguém, para destacar seu negócio como o melhor do seu mercado.",
      details: [
        "Design único criado do zero (sem usar modelos prontos).",
        "Letras e cores bonitas que facilitam a leitura de qualquer pessoa.",
        "Visual moderno e profissional que passa muita confiança."
      ],
      features: ["Design Único", "Visual Moderno"],
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />
    },
    {
      number: "03",
      title: "Sistemas & Painéis Próprios",
      description: "Para empresas que precisam de soluções personalizadas. Criamos portais de clientes, painéis de controle rápidos e ferramentas integradas que organizam o seu negócio.",
      details: [
        "Conexão fácil com WhatsApp, sistemas de clientes e ferramentas.",
        "Organização completa e segura que cresce junto com sua empresa.",
        "Proteção total para as informações dos seus clientes."
      ],
      features: ["Sistemas Web", "Feito para Você"],
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      number: "04",
      title: "Destaque no Google (SEO)",
      description: "Não adianta ter um site bonito se ele for lento e ninguém achar. Deixamos sua página super leve para ela alcançar as melhores posições de busca e superar seus concorrentes.",
      details: [
        "Aprovado nas regras de qualidade do próprio Google.",
        "Carrega em menos de um segundo para nenhum visitante desistir.",
        "Organizado do jeito certo para o Google sugerir seu site aos clientes."
      ],
      features: ["Nota 100 no Google", "Fácil de Achar"],
      icon: <Globe className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section 
      id="what-we-do-section" 
      className="relative bg-[#050507] text-white py-24 md:py-28 px-6 md:px-12 border-t border-white/[0.02]"
    >
      {/* Background decoration with cyan/blue ambient light */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-blue-500/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 block mb-3">
              [ 03. O Que Fazemos ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight">
              Como ajudamos sua empresa <span className="font-extrabold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">a vender muito mais</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-4 font-light leading-relaxed">
              Criamos páginas e sistemas modernos sob medida para o seu negócio. Sem modelos prontos e com foco total em trazer mais clientes reais para você.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full border border-cyan-500/20 hover:border-cyan-500 bg-cyan-950/10 text-[11px] text-cyan-300 hover:text-black hover:bg-cyan-400 font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer group shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              <span>Quero falar sobre meu site</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Modular Pillars Showcase Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {pillars.map((pillar, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                whileHover={{ y: -4 }}
                className="p-6 md:p-8 rounded-3xl bg-zinc-950/30 border border-white/[0.03] hover:border-cyan-500/30 hover:bg-zinc-950/60 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group min-h-[360px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                {/* Visual blue subtle glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.02] blur-2xl rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-all duration-500" />
                
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-white/[0.03] pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <span className="font-mono text-zinc-600 text-xs tracking-widest font-bold">
                        // {pillar.number}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {pillar.features.map((feature, fIdx) => (
                        <span 
                          key={fIdx} 
                          className="px-2 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-[8px] font-mono text-cyan-300 uppercase tracking-widest"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-display font-light text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet points detailing */}
                  <ul className="space-y-2">
                    {pillar.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-500 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-white/[0.02] flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-600 group-hover:text-cyan-400/70 transition-colors">
                    ESTRUTURA DIGITAL DE ELITE
                  </span>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.02] group-hover:bg-cyan-400 group-hover:text-black flex items-center justify-center text-zinc-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* High-Ticket Credibility Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 p-6 md:p-10 rounded-3xl bg-zinc-950 border border-cyan-500/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,210,255,0.01)]"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/[0.02] blur-2xl rounded-full" />
          
          <div className="max-w-xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 mb-3">
              <Flame className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-[8px] font-mono text-cyan-300 tracking-widest uppercase">Alta Tecnologia</span>
            </div>
            <h3 className="text-lg md:text-xl font-display font-light text-white leading-snug">
              Chega de sites lentos e travados. Seu site com <span className="font-extrabold text-cyan-300">tecnologia rápida e moderna</span>.
            </h3>
            <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
              Sua página será incrivelmente leve, rápida de abrir e livre de bugs ou problemas chatos que dão dor de cabeça.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs hover:scale-[1.02] hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,210,255,0.05)]"
            >
              <span>Agendar conversa gratuita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
