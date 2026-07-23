import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // 1. Fluid Ambient Orbs (Soft, high-end luminous gradient spheres)
    const orbs = [
      { x: width * 0.2, y: height * 0.25, radius: 420, vx: 0.2, vy: 0.15, color: "rgba(255, 255, 255, 0.03)" },
      { x: width * 0.75, y: height * 0.7, radius: 480, vx: -0.15, vy: 0.2, color: "rgba(200, 200, 200, 0.025)" },
      { x: width * 0.5, y: height * 0.45, radius: 380, vx: 0.1, vy: -0.2, color: "rgba(180, 180, 180, 0.02)" },
    ];

    // 2. Micro Star Particles (Silky floating dust nodes)
    const particleCount = Math.min(Math.floor(width / 20), 60);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let scrollPos = 0;
    const handleScroll = () => {
      scrollPos = window.scrollY || document.documentElement.scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse interpolation for zero jerkiness
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: Fluid Drifting Aurora Orbs ---
      orbs.forEach((orb, idx) => {
        orb.x += Math.cos(time * 0.3 + idx) * 0.6 + orb.vx;
        orb.y += Math.sin(time * 0.25 + idx * 1.5) * 0.6 + orb.vy;

        if (orb.x < -150) orb.x = width + 150;
        if (orb.x > width + 150) orb.x = -150;
        if (orb.y < -150) orb.y = height + 150;
        if (orb.y > height + 150) orb.y = -150;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- LAYER 2: Soft Interactive Mouse Glow Spot ---
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
      mouseGrad.addColorStop(0, "rgba(255, 255, 255, 0.035)");
      mouseGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.01)");
      mouseGrad.addColorStop(1, "transparent");
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 320, 0, Math.PI * 2);
      ctx.fill();

      // --- LAYER 3: Elegant Subtle Sine Wave Lines ---
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;

      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const yOffset = height * (0.25 + w * 0.25) + Math.sin(scrollPos * 0.001 + w) * 30;
        for (let x = 0; x <= width; x += 20) {
          const y = yOffset + Math.sin(x * 0.003 + time + w) * 35 + Math.cos(time * 0.5 + x * 0.002) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // --- LAYER 4: Soft Star Field & Micro Constellations ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.7 + Math.sin(time * 2 + p.pulsePhase) * 0.3);

        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Faint connecting lines between near nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 100) * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Soft Ambient Light Orbs in Background */}
      <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-zinc-800/15 rounded-full blur-[150px] animate-pulse transition-all duration-1000" />
      <div className="absolute bottom-1/3 -right-32 w-[35rem] h-[35rem] bg-zinc-700/10 rounded-full blur-[160px] animate-pulse transition-all duration-1000" />

      {/* Interactive Motion Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />
    </div>
  );
}
