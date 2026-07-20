import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile/native first to prevent hydration flash

  // Detect mobile/touch devices to skip smooth scroll (since mobile handles touch inertia natively and beautifully)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 1024 || 
        navigator.maxTouchPoints > 0 || 
        /Mobi|Android/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sync scroll height of the page to native scroll height of the transformed content
  useEffect(() => {
    if (isMobile || !contentRef.current) return;
    
    let frameId: number;
    const handleResize = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });
    };
    
    // Initial calculation
    handleResize();
    
    // Setup resize observer for dynamic elements/accordions/tabs resizing
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(contentRef.current);
    
    // Fallbacks
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize);
    
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [isMobile]);

  const { scrollY } = useScroll();
  
  // Custom spring settings for that premium "efeito pesado" (heavy, buttery smooth inertia)
  // mass: 1.2 gives it a heavy weight, damping: 24 controls the slow-down feel
  const springConfig = {
    damping: 24,
    stiffness: 70,
    mass: 1.2,
    restSpeed: 0.001,
    restDelta: 0.001
  };
  
  const smoothY = useSpring(scrollY, springConfig);
  const transformY = useTransform(smoothY, (value) => -value);

  // Intercept any click to anchor links (#id) on desktop to scroll the body window smoothly
  useEffect(() => {
    if (isMobile) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const targetY = rect.top + scrollTop;
          
          window.scrollTo({
            top: targetY,
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, true);
    return () => document.removeEventListener("click", handleAnchorClick, true);
  }, [isMobile]);

  if (isMobile) {
    return <div className="w-full relative">{children}</div>;
  }

  return (
    <>
      {/* Scrollable Viewport Frame */}
      <div className="fixed inset-0 overflow-hidden w-full h-screen z-10 select-none pointer-events-none">
        <motion.div
          ref={contentRef}
          style={{ y: transformY }}
          className="w-full flex flex-col pointer-events-auto select-auto"
        >
          {children}
        </motion.div>
      </div>
      
      {/* Ghost layout spacer that drives native browser scrollbar */}
      <div 
        style={{ height: contentHeight }} 
        className="w-full pointer-events-none relative z-0" 
      />
    </>
  );
}
