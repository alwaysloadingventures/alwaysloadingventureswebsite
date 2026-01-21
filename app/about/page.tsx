import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { PageHeader } from "@/components/layout-primitives";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <div className="space-y-16">
      <PageHeader
        eyebrow="Who We Are"
        title="About AlwaysLoading Ventures"
        description="An operator-led venture studio and advisory firm built around execution, systems, and long-term value creation."
      />

      {/* Intro Context */}
      <section className="space-y-4 max-w-3xl">
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          AlwaysLoading Ventures exists because too many businesses stall — not from lack of ideas or talent, but from lack of systems, focus, and execution discipline.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          We're operators who have built and scaled businesses from zero. Now we partner with founders who want execution, not just advice. We work with a small number of companies at a time — through advisory, venture studio partnerships, or hands-on operational roles.
        </p>
      </section>

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
      <section className="text-center space-y-6 py-4">
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
