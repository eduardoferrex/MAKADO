import React from "react";
import { motion } from "motion/react";

interface OfficialLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export default function OfficialLogo({ className = "", size = 48, animate = true }: OfficialLogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="26 23 48 52"
        fill="currentColor"
        className="w-full h-full select-none"
      >
        {/* Upper Left Blade/Wing */}
        <motion.path
          d="M 49,46 C 41,50 39,50 39,49 C 39,49 43,45 45,42 C 39,36 34,31 31,28 C 37,37 43,43 49,46 Z"
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          variants={pathVariants}
        />
        {/* Upper Right Blade/Wing */}
        <motion.path
          d="M 51,46 C 59,50 61,50 61,49 C 61,49 57,45 55,42 C 61,36 66,31 69,28 C 63,37 57,43 51,46 Z"
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          variants={pathVariants}
        />
        {/* Bottom Left Fang/Wing */}
        <motion.path
          d="M 49,55 C 44,55 40,54 31,72 C 37,63 43,58 49,55 Z"
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          variants={pathVariants}
        />
        {/* Bottom Right Fang/Wing */}
        <motion.path
          d="M 51,55 C 56,55 60,54 69,72 C 63,63 57,58 51,55 Z"
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          variants={pathVariants}
        />
      </svg>
    </div>
  );
}
