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

    let scrollPos = 0;
    let targetScrollPos = 0;
    let scrollVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollPos = window.scrollY || document.documentElement.scrollTop;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 1. Fluid Ambient Orbs
    const orbs = [
      { x: width * 0.15, y: height * 0.2, radius: 450, vx: 0.2, vy: 0.15, color: "rgba(255, 255, 255, 0.035)" },
      { x: width * 0.8, y: height * 0.65, radius: 500, vx: -0.15, vy: 0.2, color: "rgba(200, 200, 200, 0.028)" },
      { x: width * 0.5, y: height * 0.45, radius: 380, vx: 0.1, vy: -0.2, color: "rgba(180, 180, 180, 0.022)" },
    ];

    // 2. Micro Star Particles (Dust Nodes)
    const particleCount = Math.min(Math.floor(width / 18), 70);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // 3. Floating 3D Wireframe Rings / Rings that rotate on scroll
    const ringAngle = { val: 0 };

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth scroll interpolation & velocity calculation
      const prevScroll = scrollPos;
      scrollPos += (targetScrollPos - scrollPos) * 0.08;
      scrollVelocity = (scrollPos - prevScroll) * 0.5;

      // Ring angle rotates continuously + responds dynamically to scroll velocity
      ringAngle.val += 0.005 + Math.abs(scrollVelocity) * 0.008;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: Ambient Drifting Gradient Orbs (Position shifts with scroll) ---
      orbs.forEach((orb, idx) => {
        const scrollParallaxY = scrollPos * (0.08 + idx * 0.04);
        const currentY = (orb.y - scrollParallaxY) % (height + 600);
        const displayY = currentY < -300 ? currentY + height + 600 : currentY;

        orb.x += Math.cos(time * 0.3 + idx) * 0.5 + orb.vx;

        const grad = ctx.createRadialGradient(orb.x, displayY, 0, orb.x, displayY, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, displayY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- LAYER 2: Mouse Glow Spotlight ---
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      mouseGrad.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      mouseGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.01)");
      mouseGrad.addColorStop(1, "transparent");
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 350, 0, Math.PI * 2);
      ctx.fill();

      // --- LAYER 3: Dynamic Grid Lines Reacting to Scroll ---
      ctx.lineWidth = 1;
      const gridSize = 90;
      const gridOffsetY = (scrollPos * 0.4) % gridSize;

      ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + Math.min(Math.abs(scrollVelocity) * 0.003, 0.03)})`;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = -gridSize + gridOffsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- LAYER 4: Rotating Futuristic Cyber Rings (Scroll Reactive) ---
      const ringCenterX = width * 0.82;
      const ringCenterY = (height * 0.35 + Math.sin(time * 0.5) * 20 - scrollPos * 0.15) % (height + 400);
      const displayRingY = ringCenterY < -200 ? ringCenterY + height + 400 : ringCenterY;

      ctx.save();
      ctx.translate(ringCenterX, displayRingY);

      // Outer Ring
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 60, ringAngle.val, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Ring
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.beginPath();
      ctx.ellipse(0, 0, 100, 38, -ringAngle.val * 1.4, 0, Math.PI * 2);
      ctx.stroke();

      // Orbiting Node
      const nodeX = Math.cos(ringAngle.val * 2) * 160;
      const nodeY = Math.sin(ringAngle.val * 2) * 60;
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // --- LAYER 5: Animated Flowing Sine Wave Lines ---
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;

      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const baseOffsetY = height * (0.2 + w * 0.3) - scrollPos * (0.2 + w * 0.1);
        const yOffset = ((baseOffsetY % (height + 200)) + height + 200) % (height + 200);

        for (let x = 0; x <= width; x += 25) {
          const waveHeight = 30 + Math.abs(scrollVelocity) * 2;
          const y = yOffset + Math.sin(x * 0.003 + time + w) * waveHeight + Math.cos(time * 0.6 + x * 0.002) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // --- LAYER 6: Particles (Streaking / Stretching when scrolling down!) ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particles move slightly down/up with scroll velocity
        p.y -= scrollVelocity * 0.3;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.7 + Math.sin(time * 2 + p.pulsePhase) * 0.3);

        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;

        // Stretch particle into a soft light streak if scrolling fast
        if (Math.abs(scrollVelocity) > 0.5) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.8})`;
          ctx.lineWidth = p.radius;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y - scrollVelocity * 1.5);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Faint connecting lines between near nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 90) * 0.05})`;
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
    </div>
  );
}
