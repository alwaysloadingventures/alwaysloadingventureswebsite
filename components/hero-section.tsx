"use client";

import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { HeroMediaPanel } from "@/components/hero-media-panel";

export function HeroSection() {
  return (
    <section className="relative">
      {/* Spotlight glow - ultra-soft ambient */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 blur-[160px] rounded-full" />
      </div>

      {/* Desktop: Resizable two-column layout */}
      <div className="hidden lg:block rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03] overflow-hidden">
        <ResizablePanelGroup orientation="horizontal" className="min-h-[480px]">
          {/* Left Panel - Hero Content */}
          <ResizablePanel defaultSize={55} minSize={40}>
            <div className="h-full p-6 sm:p-10 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
                  Operator-Led
                </p>
                <Badge variant="secondary" className="text-[11px]">
                  Venture Studio
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
                Venture Studio & Advisory Firm
              </h1>
              <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-xl">
                We partner with founders and operators to scale businesses through
                execution, systems, and strategic leadership — not just advice.
              </p>
              <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-xl">
                We leverage AI-assisted operations and deep operator experience to
                drive outcomes faster. From paid advisory to equity partnerships, we
                work where we can materially move outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/apply/advisory"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full sm:w-auto px-8",
                  })}
                >
                  Apply for Advisory
                </Link>
                <Link
                  href="/apply/partnership"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "w-full sm:w-auto px-8",
                  })}
                >
                  Apply for Strategic Partnership
                </Link>
              </div>
            </div>
          </ResizablePanel>

          {/* Resizable Handle */}
          <ResizableHandle withHandle className="bg-border/30 hover:bg-primary/20 transition-colors" />

          {/* Right Panel - Media Showcase */}
          <ResizablePanel defaultSize={45} minSize={30}>
            <div className="h-full p-4 sm:p-6 flex items-center">
              <HeroMediaPanel />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Mobile: Stacked layout (no resizable) */}
      <div className="lg:hidden space-y-4">
        {/* Hero Content Card */}
        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 sm:p-10 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03] space-y-6">
          <div className="flex items-center gap-3">
            <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
              Operator-Led
            </p>
            <Badge variant="secondary" className="text-[11px]">
              Venture Studio
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.1]">
            Venture Studio & Advisory Firm
          </h1>
          <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-2xl">
            We partner with founders and operators to scale businesses through
            execution, systems, and strategic leadership — not just advice.
          </p>
          <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-2xl">
            We leverage AI-assisted operations and deep operator experience to
            drive outcomes faster. From paid advisory to equity partnerships, we
            work where we can materially move outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href="/apply/advisory"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Advisory
            </Link>
            <Link
              href="/apply/partnership"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Strategic Partnership
            </Link>
          </div>
        </div>

        {/* Media Panel (stacked below on mobile) */}
        <div className="px-1">
          <HeroMediaPanel />
        </div>
      </div>
    </section>
  );
}
