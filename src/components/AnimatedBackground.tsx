import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse position tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Scroll position tracking for smooth parallax
    let scrollY = 0;
    let targetScrollY = 0;

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      if (mouseX === 0 && mouseY === 0) {
        mouseX = targetMouseX = width / 2;
        mouseY = targetMouseY = height / 2;
      }
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || document.documentElement.scrollTop;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- 1. ORGANIC PARTICLES (Light Nodes) ---
    const getParticleCount = () => Math.min(Math.floor(width / 20), 65);
    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.6,
      baseAlpha: Math.random() * 0.45 + 0.2,
      phase: Math.random() * Math.PI * 2,
      colorType: Math.random() > 0.85 ? "gold" : Math.random() > 0.7 ? "cyan" : "silver",
    }));

    // --- 2. FLOATING GRADIENT AMBIENT ORBS ---
    const ambientOrbs = [
      { xFactor: 0.2, yFactor: 0.25, radius: 480, color: "rgba(30, 41, 59, 0.4)", vx: 0.0003, vy: 0.0002 },
      { xFactor: 0.8, yFactor: 0.65, radius: 520, color: "rgba(15, 23, 42, 0.5)", vx: -0.0002, vy: 0.0003 },
      { xFactor: 0.5, yFactor: 0.85, radius: 420, color: "rgba(24, 24, 27, 0.6)", vx: 0.00025, vy: -0.0002 },
    ];

    let time = 0;

    // --- RENDER LOOP ---
    const render = () => {
      time += 0.008;

      // Smooth mouse & scroll interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.08;

      // Dark executive background canvas clear
      ctx.fillStyle = "#08080a";
      ctx.fillRect(0, 0, width, height);

      // --- LAYER 1: Fluid Ambient Gradient Orbs ---
      ambientOrbs.forEach((orb, idx) => {
        const ox = width * orb.xFactor + Math.sin(time + idx * 2) * 80;
        const oy = height * orb.yFactor + Math.cos(time * 0.8 + idx) * 60 - (scrollY * 0.05) % height;
        const orbY = ((oy % height) + height) % height;

        const grad = ctx.createRadialGradient(ox, orbY, 0, ox, orbY, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "rgba(8, 8, 10, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, orbY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- LAYER 2: Mouse Interactive Light Spotlight ---
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 380);
      mouseGrad.addColorStop(0, "rgba(255, 255, 255, 0.035)");
      mouseGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.012)");
      mouseGrad.addColorStop(1, "rgba(8, 8, 10, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 380, 0, Math.PI * 2);
      ctx.fill();

      // --- LAYER 3: Organic Fluid Waves / Data Streams ("Ondas de Dados") ---
      // Multiple overlapping continuous bezier / sine wave ribbons
      const waveCount = 4;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseOffset = height * (0.2 + w * 0.22) - (scrollY * 0.12);
        const yOffset = ((baseOffset % (height + 300)) + height + 300) % (height + 300) - 150;

        // Wave gradient stroke
        const waveGrad = ctx.createLinearGradient(0, yOffset, width, yOffset);
        if (w === 0) {
          waveGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          waveGrad.addColorStop(0.3, "rgba(255, 255, 255, 0.04)");
          waveGrad.addColorStop(0.7, "rgba(56, 189, 248, 0.045)");
          waveGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        } else if (w === 1) {
          waveGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          waveGrad.addColorStop(0.4, "rgba(245, 158, 11, 0.035)");
          waveGrad.addColorStop(0.8, "rgba(255, 255, 255, 0.03)");
          waveGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        } else {
          waveGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          waveGrad.addColorStop(0.5, "rgba(224, 242, 254, 0.03)");
          waveGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        }

        ctx.strokeStyle = waveGrad;
        ctx.lineWidth = 1.2;

        const step = 20;
        let first = true;

        for (let x = -50; x <= width + 50; x += step) {
          // Complex organic wave formula combining sine, cosine & mouse interaction
          const mouseDistX = (x - mouseX) / width;
          const mouseEffect = Math.exp(-mouseDistX * mouseDistX * 12) * 20;

          const wave1 = Math.sin(x * 0.0022 + time * 1.2 + w * 1.5) * (45 + w * 10);
          const wave2 = Math.cos(x * 0.004 - time * 0.8 + w) * 20;
          const py = yOffset + wave1 + wave2 + mouseEffect;

          if (first) {
            ctx.moveTo(x, py);
            first = false;
          } else {
            ctx.lineTo(x, py);
          }
        }
        ctx.stroke();
      }

      // --- LAYER 4: Floating Connected Light Particles (Network Nodes) ---
      const activeCount = getParticleCount();
      for (let i = 0; i < activeCount; i++) {
        const p = particles[i];

        // Move particle in smooth curves
        p.x += p.vx + Math.sin(time * 0.5 + p.phase) * 0.2;
        p.y += p.vy + Math.cos(time * 0.5 + p.phase) * 0.2;

        // Wrap around borders
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Pulse alpha gently
        const currentAlpha = p.baseAlpha * (0.7 + Math.sin(time * 2 + p.phase) * 0.3);

        // Render particle dot
        if (p.colorType === "gold") {
          ctx.fillStyle = `rgba(245, 158, 11, ${currentAlpha * 0.9})`;
        } else if (p.colorType === "cyan") {
          ctx.fillStyle = `rgba(56, 189, 248, ${currentAlpha * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle, organic filaments
        for (let j = i + 1; j < activeCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 120;
          const maxDistSq = maxDist * maxDist;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.08;

            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
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
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#08080a]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
