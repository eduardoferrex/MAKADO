import React from "react";
import { XCircle, CheckCircle, TrendingDown, TrendingUp, Sparkles, AlertCircle, ShieldAlert, Sparkle } from "lucide-react";
import { motion } from "motion/react";

export default function Problem() {
  const pains = [
    { title: "Desempenho Lento", text: "Mais de 53% dos usuários abandonam sites que demoram mais de 3 segundos para responder." },
    { title: "Visual Genérico", text: "Layouts amadores com templates prontos reduzem a credibilidade e o valor percebido da marca." },
    { title: "Zero Retenção", text: "Falta de fluxos de conversão inteligentes e chamadas claras fazem o lead ir embora frustrado." },
    { title: "Incompatibilidade Mobile", text: "Páginas que quebram ou travam nos smartphones, onde está 80% do seu tráfego." }
  ];

  const solutions = [
    { title: "Carregamento Instantâneo", text: "Código enxuto e limpo para abrir em menos de 1.2s e manter o usuário focado." },
    { title: "Design de Alta Costura", text: "Aparência imponente, minimalista e sob medida que posiciona sua empresa como referência." },
    { title: "Engenharia de Conversão", text: "Gatilhos mentais e chamadas de ação posicionadas estrategicamente para gerar contatos." },
    { title: "Mobile Cirúrgico", text: "Adaptação milimétrica para todas as telas, oferecendo uma navegação fluida e intuitiva." }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="problem-section" className="py-24 md:py-32 bg-black text-white border-t border-white/[0.03] relative overflow-hidden">
      
      {/* Soft top border accent glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute top-[25%] right-[5%] w-[45%] h-[45%] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-900 mb-5"
          >
            <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase font-bold">
              CONTRANTE DE REALIDADE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6"
          >
            Seu posicionamento digital atual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-650">
              impulsiona ou limita o seu negócio?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Não basta apenas existir na internet. Uma presença digital amadora ou instável destrói sua autoridade e afasta leads qualificados. Compare as duas realidades:
          </motion.p>
        </div>

        {/* Side-by-Side Reality Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Realidade Frágil (Traditional Model) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-8 md:p-12 rounded-3xl bg-[#050506] border border-white/[0.02] hover:border-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.03] mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center">
                    <ShieldAlert className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-black text-zinc-300">Presença Convencional</h3>
                    <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">FORMATO COMUM</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono bg-zinc-950 text-zinc-500 border border-zinc-900 px-3 py-1 rounded-full">
                  Fuga de Leads
                </span>
              </div>

              {/* Pains list with stagger */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-7"
              >
                {pains.map((pain, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4 items-start group/item"
                  >
                    <XCircle className="w-4 h-4 text-zinc-700 shrink-0 mt-1 transition-colors group-hover/item:text-zinc-500" />
                    <div>
                      <h4 className="font-bold text-sm text-zinc-350 mb-1 group-hover/item:text-zinc-200 transition-colors">
                        {pain.title}
                      </h4>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                        {pain.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/[0.02] text-center">
              <span className="text-[10px] font-mono text-zinc-650 tracking-wider">✕ Diminui agressivamente a percepção de valor do seu serviço.</span>
            </div>
          </motion.div>

          {/* Realidade de Elite (MAKADO Architecture) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 flex flex-col justify-between relative shadow-[0_20px_50px_rgba(255,255,255,0.01)]"
          >
            {/* Ambient internal linear glow border accent */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.03] mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-black text-white">Arquitetura MAKADO</h3>
                    <p className="text-[9px] font-mono tracking-widest text-white/70 uppercase">PRODUÇÃO DE ELITE</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono bg-white/5 text-white border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-white animate-pulse" />
                  Alta Conversão
                </span>
              </div>

              {/* Solutions list with stagger */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-7"
              >
                {solutions.map((sol, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4 items-start group/item"
                  >
                    <CheckCircle className="w-4 h-4 text-white shrink-0 mt-1 transition-transform group-hover/item:scale-110" />
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">
                        {sol.title}
                      </h4>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                        {sol.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/[0.02] text-center flex items-center justify-center gap-1.5">
              <Sparkle className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span className="text-[10px] font-mono text-white tracking-widest uppercase font-bold">✓ Consolida confiança imediata e autoridade máxima.</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

