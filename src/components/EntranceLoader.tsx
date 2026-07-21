import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import OfficialLogo from "./OfficialLogo";

interface EntranceLoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function EntranceLoader({ onComplete }: EntranceLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast but steady progress increase
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause at 100% for smooth exit
          return 100;
        }
        // Increment randomly for organic high-tech loading feel
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-zinc-50 flex flex-col items-center justify-center px-6"
    >
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-400/[0.1] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center space-y-6 max-w-sm w-full relative z-10">
        
        {/* Animated Icon/Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-2"
        >
          <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
            <OfficialLogo size={32} animate={true} className="text-zinc-900" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ letterSpacing: "0.4em", opacity: 0 }}
          animate={{ letterSpacing: "0.25em", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-sans font-black text-lg tracking-[0.25em] text-zinc-900 uppercase text-center"
        >
          MAKADO
        </motion.div>

        {/* Loading Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500"
        >
          Carregando Estrutura de Elite...
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-zinc-200 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-zinc-600 to-zinc-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Indicator */}
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 tracking-wider pt-1">
          <span className="uppercase text-zinc-500">// ESTÁTICO E ULTRA-VELOZ</span>
          <span className="font-bold text-zinc-800">{progress}%</span>
        </div>

      </div>

      <div className="absolute left-6 bottom-6 flex items-center gap-2 text-[8px] font-mono text-zinc-600 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
        <span>Vite + React + Tailwind</span>
      </div>
      <div className="absolute right-6 bottom-6 text-[8px] font-mono text-zinc-600 tracking-widest uppercase">
        <span>ESTABILIDADE 100%</span>
      </div>
    </motion.div>
  );
}
