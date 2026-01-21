"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface IllustrationFrameProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function IllustrationFrame({
  title,
  subtitle,
  children,
  className,
}: IllustrationFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm",
        className
      )}
    >
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[80px] rounded-full" />
      </div>

      {/* SVG container with consistent aspect ratio */}
      <div className="aspect-[16/9] w-full">
        {children}
      </div>

      {/* Optional title/subtitle overlay */}
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
          {title && (
            <p className="text-xs font-medium text-foreground/90">{title}</p>
          )}
          {subtitle && (
            <p className="text-[10px] text-muted-foreground/70">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Base SVG wrapper with consistent viewBox
interface BaseSVGProps {
  children: React.ReactNode;
  className?: string;
}

export function BaseSVG({ children, className }: BaseSVGProps) {
  return (
    <svg
      viewBox="0 0 1200 675"
      className={cn("w-full h-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Shared gradients */}
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0a1a" />
          <stop offset="100%" stopColor="#1a0f2e" />
        </linearGradient>
        <linearGradient id="purple-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="green-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="yellow-accent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#eab308" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.4" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Background */}
      <rect width="1200" height="675" fill="url(#bg-gradient)" />
      {children}
    </svg>
  );
}
