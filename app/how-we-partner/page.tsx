import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Partner",
  description:
    "Learn about our partnership models — from advisory retainers to equity-based venture studio engagements. Structured collaboration with clear expectations.",
  openGraph: {
    title: "How We Partner | AlwaysLoading Ventures",
    description:
      "Advisory retainers and equity-based venture studio engagements with clear expectations.",
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
import { ResizableShowcase } from "@/components/marketing/resizable-showcase";
import {
  WeeklyOperatingCadenceViz,
  ExecutionTimelineViz,
  DecisionRightsMatrixViz,
} from "@/components/illustrations/how-we-partner";

const showcaseItems = [
  {
    title: "Weekly Operating Rhythm",
    caption: "A consistent execution cadence with priorities, owners, and measurable outcomes.",
    component: <WeeklyOperatingCadenceViz />,
  },
  {
    title: "90-Day Execution Plan",
    caption: "Focused sprints that turn strategy into shipped systems and measurable progress.",
    component: <ExecutionTimelineViz />,
  },
  {
    title: "Decision Access & Alignment",
    caption: "Clear decision rights and incentives aligned with execution, not politics.",
    component: <DecisionRightsMatrixViz />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Submit a brief application outlining your business, stage, key challenges, and goals. This helps us quickly assess alignment before scheduling any calls.",
  },
  {
    step: "02",
    title: "Fit Call",
    description:
      "A 30-minute conversation to explore your situation, understand context, and determine if we're the right fit. No pitch decks required — just an honest conversation.",
  },
  {
    step: "03",
    title: "Operator Diagnostic",
    description:
      "For qualified opportunities, we conduct a deeper review of your operations, metrics, and blockers. We identify the highest-leverage areas where we can move the needle.",
  },
  {
    step: "04",
    title: "Plan + KPI Scoreboard",
    description:
      "We propose a tailored engagement plan with clear deliverables, timelines, ownership, and success metrics. No ambiguity — aligned expectations from day one.",
  },
  {
    step: "05",
    title: "Execution Cadence",
    description:
      "We work alongside your team in a structured rhythm — weekly syncs, async collaboration, and hands-on execution where needed. We ship, not just advise.",
  },
  {
    step: "06",
    title: "Review & Iterate",
    description:
      "Regular checkpoints to assess progress against KPIs, adjust strategy based on learnings, and ensure we're driving toward measurable outcomes.",
  },
];

const engagementPackages = [
  {
    title: "Advisory Retainer",
    badge: "Ongoing",
    description:
      "Structured strategic partnership with regular touchpoints and hands-on support across key business areas.",
    includes: [
      "Weekly strategy calls (60-90 min)",
      "Async support via Slack/email",
      "Deliverables: roadmaps, playbooks, system designs",
      "Access to our operator network",
    ],
    cadence: "30/60/90-day cycles, renewable",
    outcomes: "Systems that run without you, clear KPIs, execution momentum",
    bestFor: "Teams with execution capacity seeking strategic leverage",
  },
  {
    title: "Sprint Project",
    badge: "Focused",
    description:
      "Time-boxed engagement targeting a specific challenge, launch, or operational gap.",
    includes: [
      "Defined scope and deliverables upfront",
      "Intensive collaboration period",
      "Handoff documentation and playbooks",
      "Examples: GTM launch, ops audit, funnel rebuild",
    ],
    cadence: "2-4 weeks, fixed scope",
    outcomes: "Specific problem solved, system built, or initiative launched",
    bestFor: "Specific problems requiring concentrated expertise",
  },
  {
    title: "Strategic Partnership",
    badge: "Selective",
    description:
      "Deep operational involvement with equity alignment for high-potential ventures where we take an active role.",
    includes: [
      "Equity or hybrid (cash + equity) structure",
      "Active operator role alongside founders",
      "Full integration into leadership and execution",
      "Long-term commitment (12+ months typical)",
    ],
    cadence: "Ongoing, deeply embedded",
    outcomes: "Scaled operations, sustainable growth systems, exit readiness",
    bestFor: "Ventures seeking a hands-on operating partner, not just advice",
  },
];

const capabilities = [
  {
    category: "Technology & Automation",
    items: [
      "AI-assisted workflows and agentic coding for speed",
      "Internal tooling and dashboard development",
      "Process automation (n8n, Zapier, custom scripts)",
      "Real-time alerting and monitoring systems",
    ],
  },
  {
    category: "Growth & Distribution",
    items: [
      "Funnel architecture and conversion optimization",
      "Partnership and affiliate program design",
      "Content engines and SEO systems",
      "Paid acquisition strategy and execution",
    ],
  },
  {
    category: "Operations & Systems",
    items: [
      "KPI frameworks and BI dashboards",
      "Risk and compliance-aware operations",
      "Rules-based system design (trading, gaming, etc.)",
      "Process documentation and playbooks",
    ],
  },
  {
    category: "Team & Leadership",
    items: [
      "Hiring strategy and team structure",
      "Compensation and incentive design",
      "Accountability systems and cadences",
      "Founder/operator coaching",
    ],
  },
];

const exclusions = [
  "No free consulting or \"pick your brain\" calls",
  "No passive investing without operational involvement",
  "No engagements without decision-making access",
  "No generic coaching, courses, or group programs",
  "No high-volume, low-touch client work",
  "No one-off advice calls or hourly billing",
  "No work where we can't materially move outcomes",
];

export default function HowWePartnerPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <ResizableShowcase
        title="Operating Cadence"
        subtitle="Clarity, accountability, and measurable progress."
        chips={["Weekly cadence", "KPIs", "Ownership"]}
        items={showcaseItems}
        left={
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
                Partnership Models
              </p>
              <Badge variant="secondary" className="text-[11px]">Process</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
              How We Partner
            </h1>
            <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-xl">
              We work with trading platforms, prediction markets, digital subscription businesses, and regulated gaming operators.
            </p>
            <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-xl">
              Every engagement is structured around outcomes, incentives, and execution — not just advice. We move fast and expect the same from partners.
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
                href="/what-we-do"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto px-8",
                })}
              >
                What We Do
              </Link>
            </div>
          </div>
        }
      />

      {/* How It Works */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            The Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            From first contact to ongoing execution. No long sales cycles — we move fast and expect the same from partners.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <Card
              key={step.step}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <p className="text-xs text-primary font-mono font-medium">
                  Step {step.step}
                </p>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Engagement Examples */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Engagement Types
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Ways to Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Each engagement is tailored to your stage, needs, and execution capacity. Here are the typical structures we offer.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {engagementPackages.map((pkg) => (
            <Card
              key={pkg.title}
              className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">
                    {pkg.badge}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-medium text-foreground/80 uppercase tracking-wide mb-2">
                    Includes
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground/80 leading-relaxed"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-border/30 space-y-2">
                  <p className="text-xs text-muted-foreground/70">
                    <span className="font-medium text-foreground/70">Cadence:</span> {pkg.cadence}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    <span className="font-medium text-foreground/70">Outcomes:</span> {pkg.outcomes}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    <span className="font-medium text-foreground/70">Best for:</span> {pkg.bestFor}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* What We Bring */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Operator Toolkit
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Bring
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Depending on your needs, we deploy a combination of strategies, systems, and hands-on execution. We're operators first — we build, ship, and iterate alongside you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <Card
              key={cap.category}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{cap.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {cap.items.map((item, i) => (
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
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* What We Don't Do */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Boundaries
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Don't Do
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We're selective about engagements. This isn't a volume play — we work deeply with a small number of partners at a time.
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground/80">
          {exclusions.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Start with an application. We review every submission and reach out if there's potential fit. No pitch decks, no lengthy forms — just the essentials.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply"
            className={buttonVariants({ size: "lg", className: "px-8" })}
          >
            Apply to Work With Us
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-8",
            })}
          >
            Strategic Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
