import React from "react";
import { MessageSquare, Mail, MapPin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import OfficialLogo from "./OfficialLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  return (
    <footer id="main-footer" className="bg-black text-zinc-500 py-16 md:py-20 border-t border-white/[0.03] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/[0.03]">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-zinc-950 border border-white/5 rounded-xl">
                <OfficialLogo size={22} animate={false} />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white uppercase">
                MAKEDO
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Desenvolvimento de estruturas digitais premium focadas em credibilidade imediata e conversão acelerada de vendas.
            </p>
          </div>

          {/* Quick contact credentials */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-[0.2em]">Canais de Contato</h4>
            <div className="space-y-2.5 text-xs md:text-sm">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>+55 (34) 99819-5551</span>
                <ExternalLink className="w-3 h-3 text-zinc-600" />
              </a>
              <a
                href="mailto:makadooficial@outlook.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>makadooficial@outlook.com</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-600">
                <MapPin className="w-4 h-4" />
                <span>Atendimento Online Nacional</span>
              </div>
            </div>
          </div>

          {/* Quick legal/tech notes */}
          <div className="md:col-span-3 space-y-4 text-left md:text-right">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-[0.2em] md:block">Segurança & Padrões</h4>
            <p className="text-[11px] text-zinc-500 leading-normal max-w-xs md:ml-auto">
              Estruturas 100% responsivas em conformidade com as diretrizes do Google Core Web Vitals.
            </p>
            <div className="flex md:justify-end gap-2 pt-1 text-[9px] font-mono">
              <span className="bg-zinc-950 px-2.5 py-1 rounded-lg border border-white/5 text-zinc-500">SSL SEGURO</span>
              <span className="bg-zinc-950 px-2.5 py-1 rounded-lg border border-white/5 text-white font-bold">100% ATIVO</span>
            </div>
          </div>

        </div>

        {/* Legal credentials and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] md:text-xs text-zinc-600">
          <p>© {currentYear} MAKEDO. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Termos de Uso</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Políticas de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

