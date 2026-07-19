import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  rel?: string;
  target?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  rel,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate relative mouse position from center of button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Limit maximum pull (magnetic strength factor)
    const strength = 0.35; 
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const content = (
    <motion.div
      animate={{ x, y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className="h-full w-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
    >
      {href ? (
        <a href={href} target={target} rel={rel} onClick={onClick} className="block w-full h-full">
          {content}
        </a>
      ) : (
        <button onClick={onClick} className="block w-full h-full">
          {content}
        </button>
      )}
    </div>
  );
}
