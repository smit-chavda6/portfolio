"use client"

import React, { useEffect, useRef } from "react";

const CHARS = " .'`^,-_~=+:;!*#%$@";

export default function AsciiWater({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0, h = 0;
    const cellSize = 14; 
    let cols = 0, rows = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      cols = Math.floor(w / cellSize);
      rows = Math.floor(h / cellSize);
      ctx.font = `bold ${cellSize - 2}px monospace`;
      ctx.textBaseline = "top";
    };

    window.addEventListener("resize", resize);
    resize();

    let rafId = 0;
    let time = 0;

    const render = () => {
      time += 0.02;

      // Fill background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Draw ASCII
      ctx.fillStyle = "#0ea5e9"; // Deep cyan/teal

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Complex pseudo-noise function mimicking water ripples
          const nx = x * 0.05;
          const ny = y * 0.05;
          
          const v1 = Math.sin(nx + time) + Math.cos(ny + time * 0.8);
          const v2 = Math.sin(nx * 1.5 - ny * 1.2 - time * 1.5);
          const v3 = Math.sin(Math.hypot(nx, ny) * 2 - time * 2);
          
          // Normalize noise roughly to 0..1
          let val = (v1 + v2 + v3 + 3) / 6;
          val = Math.max(0, Math.min(1, val));
          
          // Apply a bit of contrast/thresholding to make it look like patches of waves
          val = Math.pow(val, 1.5);

          const charIdx = Math.floor(val * (CHARS.length - 1));
          const char = CHARS[charIdx];

          // Fade out edges slightly
          const fadeX = Math.min(1, x / 10, (cols - x) / 10);
          const fadeY = Math.min(1, y / 5, (rows - y) / 5);
          ctx.globalAlpha = val * fadeX * fadeY;

          // Only draw if there's actually a visible char
          if (charIdx > 2) {
            ctx.fillText(char, x * cellSize, y * cellSize);
          }
        }
      }
      
      ctx.globalAlpha = 1.0;
      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
    />
  );
}
