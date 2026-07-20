import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling 300px
    let wasVisible = false;
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 300;
      if (shouldBeVisible !== wasVisible) {
        wasVisible = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Show initial tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const waLink = "https://wa.me/5534998195551?text=Ol%C3%A1!%20Quero%20agendar%20minha%20reuni%C3%A3o%20gratuita%20com%20a%20MAKADO";

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col items-end pointer-events-auto">
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  id="wa-tooltip"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-zinc-950 border border-zinc-900 text-white text-xs py-2.5 px-4 rounded-xl shadow-2xl mb-3 max-w-[200px] text-right relative"
                >
                  <p className="font-medium text-white mb-0.5">Dúvidas? Fale conosco!</p>
                  <p className="text-[10px] text-zinc-400">Agende sua reunião gratuita em 1 minuto.</p>
                  <button 
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-1 left-2 text-[10px] text-zinc-500 hover:text-zinc-300 font-bold cursor-pointer"
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.a
              id="wa-floating-button"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer group"
              onMouseEnter={() => setShowTooltip(true)}
            >
              <MessageSquare className="w-6 h-6 fill-black text-black group-hover:rotate-12 transition-transform duration-300" />
              
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping -z-10" />

              {/* White notification dot */}
              <span className="absolute top-0.5 right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
