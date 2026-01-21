"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  SystemsDashboardViz,
  AutomationPipelineViz,
  DistributionAnalyticsViz,
} from "@/components/illustrations/home";

// Hero media with React component illustrations
const heroMedia = [
  {
    id: "systems",
    title: "Systems",
    caption: "Dashboard & metrics",
    component: <SystemsDashboardViz />,
  },
  {
    id: "automation",
    title: "Automation",
    caption: "Pipeline execution",
    component: <AutomationPipelineViz />,
  },
  {
    id: "distribution",
    title: "Distribution",
    caption: "Channel analytics",
    component: <DistributionAnalyticsViz />,
  },
];

export function HeroMediaPanel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Card className="border-border/30 bg-card/60 shadow-lg ring-1 ring-inset ring-primary/[0.08] backdrop-blur-sm overflow-hidden">
      {/* Subtle glow effect on card */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/8 blur-[100px] rounded-full" />
      </div>

      <CardHeader className="pb-2 space-y-1">
        <CardTitle className="text-base sm:text-lg tracking-tight text-foreground/95">
          Execution in Motion
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground/70">
          Systems. Automation. Distribution. Shipping.
        </p>
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        {/* Illustration display area */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/20 bg-background/50">
          {heroMedia.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="w-full h-full">{item.component}</div>
            </div>
          ))}
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2">
          {heroMedia.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex-1 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200",
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
        <p className="text-[11px] text-muted-foreground/60 text-center">
          {heroMedia[activeIndex].caption}
        </p>
      </CardContent>
    </Card>
  );
}
