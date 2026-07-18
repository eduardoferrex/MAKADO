import React, { useState, useEffect } from "react";
import { ShieldCheck, X, Check, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a preference
    const consent = localStorage.getItem("makado_cookie_consent");
    if (!consent) {
      // Small delay for a premium entry effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("makado_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("makado_cookie_consent", "necessary");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-50 pointer-events-auto"
        >
          <div className="bg-zinc-950/95 border border-white/[0.06] backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col gap-4">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white leading-none">
                    Privacidade & Segurança
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono mt-1">Sua navegação 100% protegida</p>
                </div>
              </div>
              <button
                onClick={handleAcceptNecessary}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content description */}
            <p className="text-xs text-zinc-400 leading-relaxed">
              Nós utilizamos cookies e tecnologias de criptografia de ponta para garantir que sua experiência de navegação seja rápida, segura e otimizada em qualquer navegador.
            </p>

            {/* Interactive badging */}
            <div className="flex items-center gap-4 py-1 border-t border-b border-white/[0.03] my-1">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-550">
                <Lock className="w-3 h-3" />
                <span>Criptografia SSL</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-550">
                <Check className="w-3 h-3" />
                <span>LGPD Compliant</span>
              </div>
            </div>

            {/* Actions Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 py-2 rounded-xl border border-white/5 bg-transparent text-zinc-400 text-[10px] font-mono uppercase tracking-wider hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                Apenas Essenciais
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 rounded-xl bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow-lg"
              >
                Aceitar Todos
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
