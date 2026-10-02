"use client";
import React, { useEffect, useRef } from "react";

export default function ChromaticWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;
    const spacing = 18; // Spacing between dots

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
      
      time += 0.03; // Speed of the waves

      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          // Calculate diagonal wave distance
          const dist = (x + y) * 0.005;
          // Create multiple overlapping waves
          const wave1 = Math.sin(dist - time);
          const wave2 = Math.sin(dist * 0.8 - time * 1.5);
          const combinedWave = (wave1 + wave2) / 2;
          
          if (combinedWave > 0) {
            // Chromatic effect: shift RGB slightly based on wave position
            // Target Indigo (#6366f1) and Purple (#c084fc)
            const r = Math.floor(100 + Math.sin(dist - time) * 50); // Subtle red for purple
            const g = Math.floor(80 + Math.cos(dist - time * 1.2 + 1) * 60); // Low green
            const b = Math.floor(200 + Math.sin(dist - time * 0.8 + 2) * 55); // High blue/indigo bias
            
            const radius = combinedWave * 2.5; // Max radius
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${combinedWave})`;
            ctx.fill();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen opacity-50" 
    />
  );
}
