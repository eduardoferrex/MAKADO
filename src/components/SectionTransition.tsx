import React from "react";
import { motion } from "motion/react";

interface SectionTransitionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showDivider?: boolean;
}

export default function SectionTransition({
  id,
  children,
  className = "",
  showDivider = true,
}: SectionTransitionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-32 w-full overflow-hidden ${className}`}>
      {/* Top Subtle Animated Section Divider */}
      {showDivider && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"
          />
        </div>
      )}

      {/* Main Section Content Smooth Fade & Lift Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 45, filter: "blur(8px)", scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
