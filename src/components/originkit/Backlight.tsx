"use client";
import React from "react";

interface BacklightProps {
  children: React.ReactNode;
  blur?: number;
  className?: string;
}

export function Backlight({ children, blur = 10, className = "" }: BacklightProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Background glow layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
        style={{ filter: `blur(${blur}px)` }}
        aria-hidden="true"
      >
        {children}
      </div>
      {/* Foreground actual element */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
