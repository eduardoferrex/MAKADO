import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface SectionTransitionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showDivider?: boolean;
  accentShape?: "circle" | "ring" | "square" | "dots";
}

export default function SectionTransition({
  id,
  children,
  className = "",
  showDivider = true,
  accentShape = "circle",
}: SectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations based on section scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotateDeg = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const opacityVal = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.4, 0.4, 0.1]);

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative py-24 md:py-36 w-full overflow-hidden ${className}`}
    >
      {/* Top Subtle Animated Section Divider */}
      {showDivider && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"
          />
        </div>
      )}

      {/* Floating Parallax Background Accents that move on scroll */}
      <motion.div
        style={{ y: parallaxY1, rotate: rotateDeg, opacity: opacityVal }}
        className="absolute -left-12 top-1/4 pointer-events-none z-0 hidden lg:block"
      >
        {accentShape === "circle" && (
          <div className="w-48 h-48 rounded-full border border-zinc-800/60 bg-gradient-to-br from-zinc-800/10 to-transparent backdrop-blur-3xl" />
        )}
        {accentShape === "ring" && (
          <div className="w-56 h-56 rounded-full border-2 border-dashed border-zinc-700/30 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-zinc-800/50" />
          </div>
        )}
        {accentShape === "square" && (
          <div className="w-40 h-40 rounded-3xl border border-zinc-800/50 bg-zinc-950/20 rotate-12" />
        )}
        {accentShape === "dots" && (
          <div className="grid grid-cols-4 gap-3 w-32 h-32 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        style={{ y: parallaxY2, rotate: rotateDeg, opacity: opacityVal }}
        className="absolute -right-12 bottom-1/4 pointer-events-none z-0 hidden lg:block"
      >
        <div className="w-64 h-64 rounded-full border border-zinc-800/40 bg-gradient-to-tl from-zinc-900/20 to-transparent blur-xl" />
      </motion.div>

      {/* Main Section Content Smooth Fade & Parallax Lift Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(6px)", scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full flex flex-col justify-center relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
