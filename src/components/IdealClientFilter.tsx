import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function IdealClientFilter() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Li%20o%20perfil%20de%20cliente%20ideal%20e%20quero%20agendar%20um%20diagnóstico%20para%20minha%20empresa.";

  const isFor = [
    "Empresários e diretores que encaram o site como canal estratégico de receita.",
    "Negócios B2B ou B2C que querem transformar os visitantes do site em clientes e leads qualificados.",
    "Marcas consolidadas que precisam de posicionamento visual de autoridade premium.",
    "Empresas que desejam leads mais qualificados e menor custo por aquisição (CAC).",
    "Gestores que exigem prazos respeitados e suporte técnico direto e ágil."
  ];

  const isNotFor = [
    "Quem busca apenas um 'cartão de visitas genérico' sem foco em estratégia ou retorno sobre o investimento.",
    "Empresas que não têm interesse em crescer ou atender novos clientes.",
    "Quem acredita que design e copy não influenciam no resultado final de vendas.",
    "Negócios que buscam soluções genéricas sem estratégia ou diagnóstico personalizado."
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold font-mono tracking-[0.25em] text-zinc-500 uppercase block">
          [ FILTRO DE COMPATIBILIDADE ]
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Para quem <span className="text-white underline decoration-zinc-700 underline-offset-8">É</span> x Para quem <span className="text-zinc-500 italic">NÃO É</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Trabalhamos em parceria próxima com poucas empresas por mês para garantir excelência absoluta em resultados.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* IS FOR */}
        <div className="p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Este método É para você se:</h3>
                <span className="text-xs font-mono text-emerald-400/90 font-medium uppercase tracking-wider">Perfil Ideal MAKADO</span>
              </div>
            </div>

            <ul className="space-y-4">
              {isFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-zinc-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-zinc-900">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-white text-zinc-950 font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
            >
              <span>Minha empresa se encaixa. Solicitar Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* IS NOT FOR */}
        <div className="p-8 rounded-3xl bg-zinc-950/40 border border-zinc-900/80 flex flex-col justify-between space-y-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-300 tracking-tight">Este método NÃO é para você se:</h3>
                <span className="text-xs font-mono text-zinc-500 font-medium uppercase tracking-wider">Fora de Perfil</span>
              </div>
            </div>

            <ul className="space-y-4">
              {isNotFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-zinc-500 text-sm leading-relaxed">
                  <XCircle className="w-4 h-4 text-zinc-600 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-zinc-900/60">
            <p className="text-xs text-zinc-500 text-center italic">
              Prezamos por transparência. Se não pudermos gerar ROI claro para seu modelo de negócio, avisaremos honestamente no diagnóstico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
