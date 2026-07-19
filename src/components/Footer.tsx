import React from "react";
import OfficialLogo from "./OfficialLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  return (
    <footer id="main-footer" className="bg-[#050507] text-zinc-500 py-12 md:py-16 border-t border-white/[0.03] relative overflow-hidden">
      {/* Subtle lighting points with cyan hint */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/[0.01] blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main top grid block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.03]">
          
          {/* Logo brand module (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center">
                <OfficialLogo size={18} animate={false} />
              </div>
              <span className="font-sans font-black text-sm tracking-[0.25em] text-white uppercase">
                MAKADO
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-sm leading-relaxed font-light">
              Especialistas em desenvolvimento de estruturas digitais exclusivas, código limpo de alto desempenho e design autoral persuasivo.
            </p>
          </div>

          {/* Links list 1 (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              [ Links Rápidos ]
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero-section" className="hover:text-cyan-300 transition-colors">Abertura</a>
              </li>
              <li>
                <a href="#why-it-matters" className="hover:text-cyan-300 transition-colors">O Grande Problema</a>
              </li>
              <li>
                <a href="#what-we-do-section" className="hover:text-cyan-300 transition-colors">Nossos Pilares</a>
              </li>
              <li>
                <a href="#client-journey" className="hover:text-cyan-300 transition-colors">Nossa Metodologia</a>
              </li>
            </ul>
          </div>

          {/* Links list 2 (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              [ Fale Conosco ]
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-xs">
              Pronto para iniciar sua transição de marca para o alto padrão? Agende uma sessão de briefing rápido de 15 minutos.
            </p>
            <div className="pt-1">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-cyan-300 uppercase tracking-widest transition-colors"
              >
                <span>Solicitar Reunião</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Brand name, contact, year */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-zinc-650">
          <p>© {currentYear} MAKADO. Todos os direitos reservados.</p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600">
            WEBSITES HIGH-END | CÓDIGO AUTORAL | SEO DE ELITE
          </p>
        </div>

      </div>
    </footer>
  );
}
