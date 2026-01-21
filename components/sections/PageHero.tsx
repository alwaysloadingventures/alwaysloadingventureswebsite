"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface HeroShowcaseItem {
  id: string;
  title: string;
  caption: string;
  src?: string;
  alt?: string;
  component?: React.ReactNode;
}

export interface PageHeroProps {
  children: React.ReactNode;
  showcaseTitle: string;
  showcaseSubtitle?: string;
  showcaseChips?: string[];
  showcaseItems: HeroShowcaseItem[];
  defaultIndex?: number;
}

export function PageHero({
  children,
  showcaseTitle,
  showcaseSubtitle,
  showcaseChips,
  showcaseItems,
  defaultIndex = 0,
}: PageHeroProps) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  // Enforce minimum items
  if (!showcaseItems || showcaseItems.length < 2) {
    if (process.env.NODE_ENV === "development") {
      console.warn("PageHero: showcaseItems array must have at least 2 items");
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

      {/* Desktop: Two-column grid layout */}
      <div className="hidden lg:grid grid-cols-2 gap-10 items-center rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03] overflow-hidden p-8 lg:p-10">
        {/* Left Column - Content */}
        <div className="max-w-xl space-y-6">{children}</div>

        {/* Right Column - Showcase Card */}
        <div className="max-w-[520px] w-full justify-self-end">
          <HeroMediaCard
            title={showcaseTitle}
            subtitle={showcaseSubtitle}
            chips={showcaseChips}
            items={showcaseItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="lg:hidden space-y-4">
        {/* Content Card */}
        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 sm:p-8 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03] space-y-6">
          {children}
        </div>

        {/* Showcase Card */}
        <div className="px-1">
          <HeroMediaCard
            title={showcaseTitle}
            subtitle={showcaseSubtitle}
            chips={showcaseChips}
            items={showcaseItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}

interface HeroMediaCardProps {
  title: string;
  subtitle?: string;
  chips?: string[];
  items: HeroShowcaseItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

function HeroMediaCard({
  title,
  subtitle,
  chips,
  items,
  activeIndex,
  setActiveIndex,
}: HeroMediaCardProps) {
  return (
    <Card className="w-full border-border/30 bg-card/60 shadow-lg ring-1 ring-inset ring-primary/[0.08] backdrop-blur-sm overflow-hidden">
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
        {/* Media display area - consistent 16:9 aspect ratio */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/20 bg-background/50">
          {items.map((item, index) => (
            <div
              key={item.id}
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

        {/* Tab buttons - consistent sizing */}
        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
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
