import React from "react";
import OfficialLogo from "./OfficialLogo";
import { Instagram, MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const waLink = "https://wa.me/5534998195551?text=Olá!%20Gostaria%20de%20conversar%20sobre%20as%20soluções%20da%20MAKADO.";
  const instaLink = "https://instagram.com/makado.br";

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Brand & Social Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <OfficialLogo size={24} animate={false} className="text-white" />
            </div>
            <span className="font-sans font-black text-xl tracking-wider text-white">
              MAKADO
            </span>
          </div>
          
          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Desenvolvimento de sites profissionais, landing pages de alta conversão e sistemas inteligentes sob medida para destacar e impulsionar o seu negócio.
          </p>

          {/* Social Icons Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300 shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
            Navegação
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
            Contato & Endereço
          </h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                (34) 99819-5551
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram className="w-4 h-4 text-zinc-500 shrink-0" />
              <a href={instaLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @makado.br
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>contato@makado.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 MAKADO. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <span className="hover:text-zinc-300 cursor-default">Termos de Uso</span>
          <span>·</span>
          <span className="hover:text-zinc-300 cursor-default">Política de Privacidade</span>
        </div>
      </div>
    </footer>
  );
}
