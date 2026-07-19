import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, MessageSquare, ClipboardList, PenTool, Code, Cpu, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Step {
  id: number;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
}

export default function FreeMeeting() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  const steps: Step[] = [
    {
      id: 1,
      icon: <ClipboardList className="w-5 h-5 text-zinc-300" />,
      label: "Planejamento",
      title: "Planejamento Inicial (Estudo do seu Negócio)",
      description: "Começamos estudando a fundo sua empresa, seus clientes e seus concorrentes. Alinhamos o que você precisa vender e montamos o plano perfeito para atrair as pessoas certas.",
      deliverables: ["Definição de metas de vendas", "Estudo dos seus concorrentes", "Plano de atração de clientes"]
    },
    {
      id: 2,
      icon: <MessageSquare className="w-5 h-5 text-zinc-300" />,
      label: "Textos do Site",
      title: "Textos Convincentes que Vendem",
      description: "Antes de criar o visual, preparamos os textos. Escrevemos mensagens claras que explicam o valor da sua empresa e fazem as pessoas quererem comprar de você na hora.",
      deliverables: ["Textos que despertam o interesse", "Respostas para todas as dúvidas", "Botões de contato impossíveis de ignorar"]
    },
    {
      id: 3,
      icon: <PenTool className="w-5 h-5 text-zinc-300" />,
      label: "Visual do Site",
      title: "Design Exclusivo Criado do Zero",
      description: "Criamos um desenho único para o seu site, sem copiar ninguém ou usar modelos prontos da internet. Cada cor e detalhe é escolhido para mostrar que sua empresa é líder de mercado.",
      deliverables: ["Design 100% original", "Perfeito para celulares e computadores", "Desenho do site pronto para sua aprovação"]
    },
    {
      id: 4,
      icon: <Code className="w-5 h-5 text-zinc-300" />,
      label: "Construção (Código)",
      title: "Programação Moderna e Rápida",
      description: "Construímos o site com as tecnologias mais rápidas do mundo. O resultado é uma página super leve que abre na hora, sem travamentos ou lentidão.",
      deliverables: ["Código leve e moderno", "Configuração para acompanhar visitas", "Site que abre num piscar de olhos"]
    },
    {
      id: 5,
      icon: <ShieldCheck className="w-5 h-5 text-zinc-300" />,
      label: "Lançamento",
      title: "Testes Finais e Lançamento",
      description: "Garantimos que o site tire nota máxima de velocidade no Google. Fazemos testes finais para conferir se está tudo perfeito antes de colocar o site no ar.",
      deliverables: ["Hospedagem rápida e segura", "Site protegido com cadeado de segurança", "Verificação final de velocidade"]
    }
  ];

  return (
    <section 
      id="client-journey" 
      className="relative bg-[#050507] text-white py-24 md:py-28 px-6 md:px-12 border-t border-white/[0.02]"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-zinc-500/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 block mb-3">
            [ 04. Como Trabalhamos ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-tight tracking-tight">
            Passo a passo simples para <span className="font-extrabold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">criar seu site</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-4 font-light max-w-xl mx-auto leading-relaxed">
            Uma jornada organizada em 5 etapas rápidas para criar o melhor site do seu mercado, focado em trazer mais contatos e vendas.
          </p>
        </div>

        {/* Tab-like Step Selector & Interactive Details Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Left Menu (5 Columns) */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group backdrop-blur-md ${
                    isActive 
                      ? "bg-zinc-950/70 border-white/20 shadow-[0_10px_25px_rgba(255,255,255,0.01)]" 
                      : "bg-zinc-950/20 border-white/[0.05] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.05)]" : "bg-white/5 text-zinc-400 group-hover:text-white"
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 block mb-0.5">
                        Fase 0{step.id}
                      </span>
                      <span className={`text-xs md:text-sm font-sans font-medium transition-colors ${
                        isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] transition-all font-mono ${
                    isActive 
                      ? "border-white/30 bg-white/5 text-zinc-300" 
                      : "border-white/10 text-zinc-500 group-hover:text-white"
                  }`}>
                    {step.id}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Step Content Details Right (7 Columns) */}
          <div className="lg:col-span-7 bg-zinc-950/30 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl min-h-[380px] flex flex-col justify-between relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.015] blur-xl rounded-full" />
            
            <AnimatePresence mode="wait">
              {steps.map((step) => {
                if (step.id !== activeStep) return null;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 flex-grow"
                  >
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                        [ Entrega da Fase 0{step.id} ]
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-light text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-zinc-500 block mb-2">
                        O que você recebe nesta fase:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Bottom Contact Trigger Inside Step Details Card */}
            <div className="mt-8 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-light">
                Tudo planejado de forma simples e direta, sem dores de cabeça.
              </span>
              <MagneticButton 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,255,255,0.02)] cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Quero Começar Meu Projeto</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
