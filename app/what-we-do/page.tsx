import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Operator-led execution across growth strategy, operations, product development, and systems. We drive measurable outcomes — not just advice.",
  openGraph: {
    title: "What We Do | AlwaysLoading Ventures",
    description:
      "Operator-led execution across growth strategy, operations, product development, and systems.",
  },
};
import { buttonVariants } from "@/lib/button-variants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageHero } from "@/components/sections/PageHero";
import {
  OperatorDashboardViz,
  AutomationWorkflowViz,
  DistributionFunnelViz,
} from "@/components/illustrations/what-we-do";

const showcaseItems = [
  {
    id: "dashboard",
    title: "Operator Dashboard",
    caption: "A unified view of revenue, risk, growth, and execution — designed for fast decisions, not vanity metrics.",
    component: <OperatorDashboardViz />,
  },
  {
    id: "automation",
    title: "Automation & AI Workflows",
    caption: "Internal systems that reduce manual work, surface insights faster, and let teams operate at scale.",
    component: <AutomationWorkflowViz />,
  },
  {
    id: "distribution",
    title: "Distribution & Monetization",
    caption: "Distribution channels, pricing logic, and monetization systems engineered for sustainability.",
    component: <DistributionFunnelViz />,
  },
];

const advisoryIncludes = [
  "Diagnosing growth bottlenecks and revenue leaks",
  "Installing KPI scoreboards and reporting cadence",
  "Tightening funnels, pricing, and offer structures",
  "Improving operational systems under real constraints",
  "Building internal tooling, dashboards, and automation",
  "Designing team structures and accountability systems",
];

const ventureStudioIncludes = [
  "Shared execution responsibility from day one",
  "Systems-first approach to product and operations",
  "Rapid iteration with clear accountability",
  "Long-term thinking around distribution and monetization",
  "Access to proven playbooks and operational frameworks",
  "Direct involvement in strategic decisions",
];

const partnershipFit = [
  "Complex platforms with multiple moving parts",
  "Regulated or rules-based environments",
  "High-volume transaction or payment systems",
  "Businesses where execution quality materially affects outcomes",
  "Founders seeking an operating partner, not passive capital",
];

const executionDomains = [
  {
    category: "Growth & Monetization",
    items: [
      "Revenue system design and optimization",
      "Funnel architecture and conversion engineering",
      "Pricing strategy and offer structure",
      "Retention systems and LTV optimization",
    ],
  },
  {
    category: "Distribution & Acquisition",
    items: [
      "Affiliate and partnership program design",
      "Content engines and SEO systems",
      "Paid acquisition strategy and execution",
      "Referral and viral loop mechanics",
    ],
  },
  {
    category: "Operations & Systems",
    items: [
      "Process design for scale and efficiency",
      "Risk/ops mindset for constrained environments",
      "Compliance-aware operational frameworks",
      "Vendor management and cost optimization",
    ],
  },
  {
    category: "Data & Tooling",
    items: [
      "BI dashboards and KPI frameworks",
      "Internal tools and admin systems",
      "Automation workflows (n8n, custom scripts)",
      "AI-assisted operations and agentic coding",
    ],
  },
];

const forYouIf = [
  "You're running a monetized platform and want measurable progress",
  "You have execution capacity and need strategic leverage",
  "You're comfortable being held accountable to metrics",
  "You value systems over heroics, outcomes over activity",
  "You're ready to move fast and iterate based on data",
];

const notForYouIf = [
  "You're looking for free consulting or \"pick your brain\" calls",
  "You want advice without implementation",
  "You're pre-revenue and still validating your idea",
  "You're unwilling to share metrics or grant decision access",
  "You want a passive investor or board seat filler",
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHero
        showcaseTitle="Execution Systems"
        showcaseSubtitle="Operator-grade systems for scaling monetized platforms."
        showcaseChips={["Dashboards", "Automation", "Distribution"]}
        showcaseItems={showcaseItems}
      >
        <div className="flex items-center gap-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Our Focus
          </p>
          <Badge variant="secondary" className="text-[11px]">What We Do</Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
          What We Do
        </h1>
        <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-xl">
          We operate at the intersection of strategy, execution, and ownership. Our work is built for systems-driven, monetized platforms — trading tech, prediction markets, digital subscriptions, and regulated gaming operators.
        </p>
        <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-xl">
          We've scaled revenue from zero to significant ARR across multiple ventures. We don't just advise — we build, ship, and iterate alongside the teams we work with.
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
            Explore Partnerships
          </Link>
        </div>
      </PageHero>

      <Separator className="bg-border/40" />

      {/* Advisory & Operator Support */}
      <section className="space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary" className="text-[10px]">Service Lane</Badge>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Advisory & Operator Support
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Hands-on, execution-oriented advisory for founders and leadership teams who are ready to implement — not just discuss strategy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">What This Typically Involves</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {advisoryIncludes.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7]">
            <p>
              This is not coaching. We don't deliver frameworks and walk away. We work alongside your team in a structured cadence — diagnosing problems, designing solutions, and helping implement them.
            </p>
            <p>
              Advisory engagements are structured around clear deliverables, KPIs, and accountability. If we can't move the needle, we'll tell you upfront.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Venture Studio */}
      <section className="space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary" className="text-[10px]">Service Lane</Badge>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Venture Studio
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Co-building and scaling ventures where execution leverage is highest. This is where we invest our own time and capacity alongside founders.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">What Building With Us Means</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ventureStudioIncludes.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7]">
            <p>
              Venture studio engagements are selective and capacity-limited. We work with a very small number of ventures at a time — typically 1-2 active projects — to ensure we can deliver real execution value.
            </p>
            <p>
              We're looking for founders with domain expertise and hustle who want an operating partner, not just advice. If you're building something ambitious and want hands-on support, this may be the right fit.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Strategic Partnerships */}
      <section className="space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary" className="text-[10px]">Service Lane</Badge>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Strategic Partnerships
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Deeper engagements where incentives are aligned via hybrid (cash + equity) or equity-only structures. This is not passive capital.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">When This Model Applies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {partnershipFit.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7]">
            <p>
              Strategic partnerships are reserved for situations where deep operational involvement is required and where execution quality materially impacts outcomes.
            </p>
            <p>
              We take an active role alongside founders — not a board seat or advisory title. This means shared accountability, direct involvement in decisions, and long-term alignment with the success of the venture.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* What We Actually Execute */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Execution Domains
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Actually Execute
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Across all engagement types, these are the areas where we deploy hands-on execution and expertise.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {executionDomains.map((domain) => (
            <Card
              key={domain.category}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{domain.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {domain.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Who This Is For / Not For */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Fit Check
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Is This Right for You?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary/90">This is for you if...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {forYouIf.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-muted-foreground/70">This is not for you if...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {notForYouIf.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground/80 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA Section */}
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          If this resonates, start with an application. We review every submission and reach out if there's potential fit.
        </p>
        <Link
          href="/apply"
          className={buttonVariants({ size: "lg", className: "px-10" })}
        >
          Apply to Work With Us
        </Link>
      </section>
    </div>
  );
}
