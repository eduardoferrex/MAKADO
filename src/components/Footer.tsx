import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import OfficialLogo from "./OfficialLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKEDO";

  return (
    <footer id="main-footer" className="bg-[#08080a] text-zinc-500 py-16 md:py-20 border-t border-white/[0.03] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/[0.03] items-start">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-zinc-950 border border-white/5 rounded-xl">
                <OfficialLogo size={20} animate={false} />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white uppercase">
                MAKEDO
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-sm leading-relaxed font-light">
              Especialistas em websites, sistemas e estruturas digitais sob medida para empresas que querem mais credibilidade e mais vendas.
            </p>
          </div>

          {/* Quick contact credentials */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-[0.2em]">Canais de Contato</h4>
            <div className="space-y-2 text-xs md:text-sm">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors justify-start md:justify-end"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>+55 (34) 99819-5551</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400 justify-start md:justify-end">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>contato.eduardoferreirabastos@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 justify-start md:justify-end">
                <MapPin className="w-4 h-4" />
                <span>Atendimento Online Nacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand name, contact, year — nothing more */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] md:text-xs text-zinc-600">
          <p>© {currentYear} MAKEDO. Todos os direitos reservados.</p>
          <p className="font-mono text-[10px] tracking-widest text-zinc-700">WEBSITES | SISTEMAS | ESTRUTURAS</p>
        </div>

      </div>
    </footer>
  );
}
