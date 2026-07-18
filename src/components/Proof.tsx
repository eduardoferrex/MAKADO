import React, { useState, useEffect, useRef } from "react";
import { useInView, motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Trophy, Sparkles, ArrowRight, Laptop, Sparkle, Globe, Database, Cpu, Code, Activity, Terminal, Check } from "lucide-react";

// Performance-optimized counting component when scrolled into view
function Counter({ target, suffix = "", prefix = "", duration = 1.2 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-sans font-black text-4xl sm:text-5xl text-white">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Proof() {
  const [activeTab, setActiveTab] = useState<"websites" | "sistemas" | "estruturas">("websites");

  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  const tabsInfo = {
    websites: {
      tag: "WEBSITES DE ALTA GRIFE",
      title: "Landing Pages & Sites Institucionais de Elite",
      description: "Desenvolvemos páginas exclusivas com estética de alta grife, transições suaves e carregamento instantâneo. Projetadas para construir credibilidade instantânea para sua marca e destacar sua empresa de qualquer concorrente comum.",
      features: ["Carregamento em menos de 1.2s", "SEO avançado de fábrica", "Animações sofisticadas sob medida", "Mobile-first rigoroso"],
      stats: { primary: "100%", label: "De Design Exclusivo" }
    },
    sistemas: {
      tag: "SISTEMAS SOB MEDIDA",
      title: "Painéis e Aplicações Web Escaláveis",
      description: "Construímos sistemas corporativos modernos, painéis de controle em tempo real (dashboards), ferramentas SaaS e automatizações completas de processos que eliminam o trabalho manual e otimizam sua operação.",
      features: ["Sincronização em tempo real", "Arquitetura limpa e escalável", "Integração completa com APIs", "Segurança avançada de dados"],
      stats: { primary: "10x", label: "Mais velocidade operacional" }
    },
    estruturas: {
      tag: "MÁQUINAS DE CONVERSÃO",
      title: "Estruturas Completas de Vendas Integradas",
      description: "Aceleramos sua escala com estruturas otimizadas para tráfego pago, funis de conversão cirúrgicos, sistemas de agendamento automático e páginas desenhadas com base na psicologia de conversão do consumidor.",
      features: ["Gatilhos de alta retenção", "Fluxos diretos ao WhatsApp", "Pixel e analytics configurados", "Testes de velocidade A/B"],
      stats: { primary: "+240%", label: "De Retorno médio em Leads" }
    }
  };

  return (
    <section id="proof-section" className="py-24 md:py-32 bg-black text-white border-t border-white/[0.03] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Statistics Bar - Counters */}
        <div id="counters-row" className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-white/[0.03] mb-24">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Counter target={150} prefix="+" />
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-3 font-black">PROJETOS ENTREGUES</p>
            <p className="text-zinc-400 text-xs mt-1">Estruturas ativas gerando lucros</p>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Counter target={240} prefix="+" suffix="%" />
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-3 font-black">RETORNO EM LEADS</p>
            <p className="text-zinc-400 text-xs mt-1">Média de aumento de conversão</p>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Counter target={12} suffix="s" prefix="< 1." duration={0.8} />
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-3 font-black">ABERTURA MÉDIA</p>
            <p className="text-zinc-400 text-xs mt-1">Velocidade extrema homologada</p>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Counter target={100} suffix="%" />
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mt-3 font-black">SATISFAÇÃO TOTAL</p>
            <p className="text-zinc-400 text-xs mt-1">Suporte dedicado e ágil</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase bg-zinc-950 border border-zinc-900 px-4 py-1.5 rounded-full inline-block mb-5">
            O QUE NÓS FAZEMOS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6">
            Especialistas em erguer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-650">
              estruturas digitais de alto escalão.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Nossa especialidade é traduzir a força da sua empresa em uma interface digital imponente. Conheça as verticais em que atuamos cirurgicamente:
          </p>
        </div>

        {/* Interactive Tabbed Portfolio Showcase */}
        <div className="bg-[#050506] border border-white/[0.04] rounded-3xl p-6 md:p-10 relative">
          
          {/* Tabs Selector Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/[0.03] pb-6 mb-8 md:mb-10">
            <button
              onClick={() => setActiveTab("websites")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest transition-all ${
                activeTab === "websites"
                  ? "bg-white text-black font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              🌐 Websites
            </button>
            <button
              onClick={() => setActiveTab("sistemas")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest transition-all ${
                activeTab === "sistemas"
                  ? "bg-white text-black font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              💻 Sistemas
            </button>
            <button
              onClick={() => setActiveTab("estruturas")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest transition-all ${
                activeTab === "estruturas"
                  ? "bg-white text-black font-extrabold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              ⚡ Estruturas
            </button>
          </div>

          {/* Tab Content Display Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Text & Features details */}
              <div className="lg:col-span-7 text-left">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-extrabold uppercase">
                  {tabsInfo[activeTab].tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-white mt-2 mb-4 leading-snug">
                  {tabsInfo[activeTab].title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {tabsInfo[activeTab].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {tabsInfo[activeTab].features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                      <span className="text-xs text-zinc-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 border-t border-white/[0.03] pt-6">
                  <div>
                    <span className="text-2xl md:text-3xl font-sans font-black text-white">{tabsInfo[activeTab].stats.primary}</span>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">{tabsInfo[activeTab].stats.label}</p>
                  </div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase hover:underline"
                  >
                    <span>Falar sobre isso</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: High-fidelity Interactive Graphic Mockup */}
              <div className="lg:col-span-5 w-full bg-[#09090b] border border-white/[0.04] rounded-2xl p-6 relative overflow-hidden h-[240px] md:h-[280px] flex flex-col justify-between">
                
                {/* Visual Header of mockup */}
                <div className="flex items-center justify-between border-b border-white/[0.03] pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-[8px] font-mono text-zinc-550 uppercase">makedo-preview.exe</span>
                </div>

                {/* Main Interactive visual body depending on active tab */}
                {activeTab === "websites" && (
                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-2/3 h-4 bg-zinc-900 rounded-lg animate-pulse" />
                      <div className="w-12 h-4 bg-white/10 rounded-lg" />
                    </div>
                    <div className="w-full h-8 bg-zinc-900/40 rounded-lg border border-white/5 flex items-center px-3 justify-between">
                      <div className="w-1/2 h-2 bg-zinc-800 rounded-full" />
                      <span className="text-[9px] font-mono text-white">0.8s</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-zinc-950 border border-white/[0.03] rounded-lg" />
                      <div className="h-10 bg-zinc-950 border border-white/[0.03] rounded-lg" />
                      <div className="h-10 bg-zinc-950 border border-white/[0.03] rounded-lg" />
                    </div>
                  </div>
                )}

                {activeTab === "sistemas" && (
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-center bg-zinc-900/50 p-2.5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
                        <span className="text-[10px] font-mono text-zinc-350">Status Operacional</span>
                      </div>
                      <span className="text-[9px] font-mono text-white uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">ATIVO</span>
                    </div>
                    
                    {/* Simulated mini analytics rows */}
                    <div className="space-y-2 my-2">
                      <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                        <span>REQUISIÇÕES / MIN</span>
                        <span className="text-white">1,402 req</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[85%]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "estruturas" && (
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <div className="p-3 bg-zinc-900/60 rounded-xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[8px] font-mono text-zinc-550">FUNIL DE ENTRADA</div>
                        <div className="text-xs font-black text-white mt-0.5">Captura Ativa</div>
                      </div>
                      <span className="text-xs font-bold text-white font-mono bg-white/5 border border-white/10 px-2 py-1 rounded-lg">+42 Leads</span>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 px-1">
                      <span>TAXA DE RETENÇÃO</span>
                      <span className="text-white font-bold">94.8%</span>
                    </div>
                  </div>
                )}

                {/* Visual Footer of mockup */}
                <div className="border-t border-white/[0.03] pt-3 text-right">
                  <span className="text-[8px] font-mono text-zinc-650">SISTEMA INTEGRADO MAKEDO SECURITY</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dynamic WhatsApp Request Banner */}
        <div className="mt-16 bg-[#050506] border border-white/[0.03] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
          <div className="z-10 text-left">
            <h4 className="text-xl md:text-2xl font-display font-black text-white mb-2">Quer ver exemplos reais em produção?</h4>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl leading-relaxed">
              Fale com nosso especialista. Nós te enviamos links de sites e sistemas reais criados e hospedados pela MAKEDO, para você comprovar a velocidade e o design na prática.
            </p>
          </div>
          <a
            href="https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20ver%20exemplos%20de%20sites%20e%20sistemas%20criados%20pela%20MAKEDO"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 shrink-0 px-8 py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 hover:scale-103 transition-all"
          >
            Ver Exemplos Reais
          </a>
        </div>

      </div>
    </section>
  );
}

