"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ShowcaseItem {
  title: string;
  caption: string;
  src?: string;
  alt?: string;
  component?: React.ReactNode;
}

export interface ResizableShowcaseProps {
  left: React.ReactNode;
  title: string;
  subtitle?: string;
  chips?: string[];
  items: ShowcaseItem[];
  defaultIndex?: number;
}

export function ResizableShowcase({
  left,
  title,
  subtitle,
  chips,
  items,
  defaultIndex = 0,
}: ResizableShowcaseProps) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  // Enforce no defaults - must have at least 2 items
  if (!items || items.length < 2) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "ResizableShowcase: items array must have at least 2 items"
      );
    }
    return null;
  }

  return (
    <section className="relative">
      {/* Spotlight glow - soft ambient */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.07] blur-[180px] rounded-full" />
        <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/[0.04] blur-[120px] rounded-full" />
      </div>

      {/* Desktop: Fixed two-column layout */}
      <div className="hidden lg:flex rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03] overflow-hidden min-h-[480px]">
        {/* Left Panel - Page Content */}
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
          {left}
        </div>

        {/* Right Panel - Showcase */}
        <div className="w-[45%] p-4 sm:p-6 flex items-center border-l border-border/30">
          <ShowcaseCard
            title={title}
            subtitle={subtitle}
            chips={chips}
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="lg:hidden space-y-4">
        {/* Content Card */}
        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 sm:p-10 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03]">
          {left}
        </div>

        {/* Showcase Card */}
        <div className="px-1">
          <ShowcaseCard
            title={title}
            subtitle={subtitle}
            chips={chips}
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}

interface ShowcaseCardProps {
  title: string;
  subtitle?: string;
  chips?: string[];
  items: ShowcaseItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

function ShowcaseCard({
  title,
  subtitle,
  chips,
  items,
  activeIndex,
  setActiveIndex,
}: ShowcaseCardProps) {
  return (
    <Card className="w-full border-border/30 bg-card/60 shadow-lg ring-1 ring-inset ring-primary/[0.08] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/15">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/8 blur-[100px] rounded-full" />
      </div>

      <CardHeader className="pb-2 space-y-2">
        <CardTitle className="text-base sm:text-lg tracking-tight text-foreground/95">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-xs sm:text-sm text-muted-foreground/70">
            {subtitle}
          </p>
        )}
        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {chips.map((chip) => (
              <Badge
                key={chip}
                variant="secondary"
                className="text-[10px] px-2 py-0.5"
              >
                {chip}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        {/* Image/Component display area */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/20 bg-background/50">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              {item.component ? (
                <div className="w-full h-full">{item.component}</div>
              ) : item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              ) : null}
            </div>
          ))}
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex-1 px-2 py-1.5 rounded-md text-[11px] sm:text-xs font-medium transition-all duration-200",
                "border border-border/30 hover:border-primary/30",
                index === activeIndex
                  ? "bg-primary/10 border-primary/40 text-primary shadow-sm shadow-primary/10"
                  : "bg-card/50 text-muted-foreground/70 hover:text-foreground/80"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Caption */}
        <p className="text-[11px] text-muted-foreground/60 text-center leading-relaxed px-2">
          {items[activeIndex].caption}
        </p>
      </CardContent>
    </Card>
  );
}
