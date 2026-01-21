import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "An operator-led venture studio and advisory firm built around execution, systems, and long-term value creation. Learn about our philosophy and track record.",
  openGraph: {
    title: "About | AlwaysLoading Ventures",
    description:
      "Operator-led venture studio built around execution, systems, and long-term value creation.",
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
  OperatorMindsetViz,
  TechnologyForwardViz,
  LongTermValueViz,
} from "@/components/illustrations/about";

const showcaseItems = [
  {
    id: "mindset",
    title: "Operator Mindset",
    caption: "Built by operators who prioritize systems, incentives, and execution over noise.",
    component: <OperatorMindsetViz />,
  },
  {
    id: "technology",
    title: "Technology-Forward Execution",
    caption: "AI, automation, and internal tooling used to compress timelines and reduce friction.",
    component: <TechnologyForwardViz />,
  },
  {
    id: "value",
    title: "Long-Term Value Creation",
    caption: "We optimize for durability, not short-term optics.",
    component: <LongTermValueViz />,
  },
];

const trackRecord = [
  {
    label: "Company A",
    industry: "Trading Tech / Fintech",
    result: "$0 → $250M revenue",
    timeframe: "4 years",
    role: "Operational leadership across growth, product, and systems",
  },
  {
    label: "Company B",
    industry: "Digital Products & Subscriptions",
    result: "$0 → $20M revenue",
    timeframe: "2 years",
    role: "Go-to-market strategy and distribution systems",
  },
  {
    label: "Company C",
    industry: "Prediction Markets / Gaming",
    result: "$0 → $2M revenue",
    timeframe: "1 year",
    role: "Product development and early-stage operations",
  },
  {
    label: "Company D",
    industry: "Marketplace / E-commerce",
    result: "$0 → $10M revenue",
    timeframe: "1.5 years",
    role: "Growth systems and team building",
  },
];

const philosophy = [
  {
    title: "Systems Beat Hustle",
    description:
      "Sustainable growth comes from repeatable systems, not heroic effort. We build processes, playbooks, and automation that compound over time.",
  },
  {
    title: "Distribution Matters as Much as Product",
    description:
      "A great product with poor distribution loses to a good product with great distribution. We obsess over channels, funnels, and go-to-market.",
  },
  {
    title: "Incentives Drive Outcomes",
    description:
      "People respond to incentives. We design compensation, equity, and accountability structures that align everyone toward shared goals.",
  },
  {
    title: "Metrics Create Clarity and Speed",
    description:
      "What gets measured gets managed. We install KPI frameworks and reporting cadences that make decisions obvious and fast.",
  },
  {
    title: "Ownership Reflects Contribution",
    description:
      "We believe in skin in the game. When we partner deeply, we take equity. When we advise, we expect to be held accountable to results.",
  },
];

const technologyApproach = [
  {
    title: "AI-Assisted Workflows",
    description:
      "We use AI to accelerate research, writing, analysis, and decision-making — increasing execution velocity without adding headcount.",
  },
  {
    title: "Agentic Coding & Automation",
    description:
      "Custom scripts, n8n workflows, and AI-assisted development to eliminate manual work and reduce operational drag.",
  },
  {
    title: "BI/KPI Dashboards",
    description:
      "Real-time visibility into what matters. We build and maintain dashboards that drive data-informed decisions.",
  },
  {
    title: "Internal Tooling",
    description:
      "Custom admin systems, monitoring, and alerting that let small teams operate at scale without breaking.",
  },
];

const whoWeWorkWith = [
  "Founders and operators running real, monetized platforms",
  "Teams ready to operate with metrics and accountability",
  "Businesses in trading tech, prediction markets, digital subscriptions, or regulated environments",
  "Leaders who want execution partners, not just advisors",
];

const notAFitFor = [
  "Idea-stage projects without validated demand",
  "Founders looking for passive capital or hands-off involvement",
  "Teams unwilling to share metrics or grant decision access",
];

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <PageHero
        showcaseTitle="How We Operate"
        showcaseSubtitle="Systems-first. Technology-forward. Outcome-driven."
        showcaseChips={["Systems", "Automation", "Durability"]}
        showcaseItems={showcaseItems}
      >
        <div className="flex items-center gap-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Who We Are
          </p>
          <Badge variant="secondary" className="text-[11px]">About</Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
          About AlwaysLoading Ventures
        </h1>
        <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-xl">
          An operator-led venture studio and advisory firm built around execution, systems, and long-term value creation.
        </p>
        <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-xl">
          We're operators who have built and scaled businesses from zero. Now we partner with founders who want execution, not just advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/apply"
            className={buttonVariants({
              size: "lg",
              className: "w-full sm:w-auto px-8",
            })}
          >
            Apply to Work With Us
          </Link>
          <Link
            href="/how-we-partner"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto px-8",
            })}
          >
            How We Partner
          </Link>
        </div>
      </PageHero>

      <Separator className="bg-border/40" />

      {/* Operator Background */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Operator Track Record
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We've helped scale multiple monetized platforms from zero to significant revenue — in constrained, rules-based environments where execution quality materially impacts outcomes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {trackRecord.map((company) => (
            <Card
              key={company.label}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{company.label}</CardTitle>
                  <span className="text-xs text-muted-foreground/60">
                    ({company.industry})
                  </span>
                </div>
                <p className="text-xl font-semibold text-foreground">
                  {company.result}
                </p>
                <CardDescription className="text-sm leading-relaxed">
                  {company.role} • {company.timeframe}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <p className="text-[11px] text-muted-foreground/50 leading-relaxed max-w-2xl">
          Results reflect contributions as part of broader teams. Company names withheld due to confidentiality. Outcomes shown for context, not guarantees.
        </p>
      </section>

      <Separator className="bg-border/40" />

      {/* Philosophy */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Operating Philosophy
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            These principles guide how we work and who we work with.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.map((item) => (
            <Card
              key={item.title}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Technology Approach */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Technology-Forward Execution
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We leverage modern tools and AI to move faster and do more with less. Technology isn't a nice-to-have — it's how we stay competitive.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {technologyApproach.map((item) => (
            <Card
              key={item.title}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Who We Work With */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Fit
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Who We Work With
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary/90">
                Good fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {whoWeWorkWith.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground/80 leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-muted-foreground/70">
                Not a fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {notAFitFor.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground/80 leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Want to Work With Us?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          We're selective about who we work with, but always open to meeting ambitious founders and operators building something meaningful.
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
