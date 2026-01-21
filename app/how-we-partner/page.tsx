import Link from "next/link";
import { PageHeader } from "@/components/layout-primitives";
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

const processSteps = [
  {
    step: "01",
    title: "Application",
    description:
      "You submit a brief application outlining your business, stage, challenges, and goals. This helps us understand if there's potential alignment.",
  },
  {
    step: "02",
    title: "Fit Call",
    description:
      "A 30-minute call to explore the opportunity, understand your context, and determine if we're the right partner for your needs.",
  },
  {
    step: "03",
    title: "Diagnostic",
    description:
      "For qualified opportunities, we conduct a deeper diagnostic — reviewing your operations, metrics, and blockers to identify high-leverage areas.",
  },
  {
    step: "04",
    title: "Plan + KPIs",
    description:
      "We propose a tailored engagement plan with clear deliverables, timelines, and success metrics. No ambiguity — just aligned expectations.",
  },
  {
    step: "05",
    title: "Execution Cadence",
    description:
      "We work alongside your team in a structured cadence — weekly syncs, async collaboration, and hands-on execution where needed.",
  },
  {
    step: "06",
    title: "Review & Iterate",
    description:
      "Regular checkpoints to assess progress, adjust strategy, and ensure we're driving toward measurable outcomes.",
  },
];

const engagementPackages = [
  {
    title: "Advisory Retainer",
    badge: "Most Common",
    description:
      "Ongoing strategic partnership with structured support across key business areas.",
    details: [
      "30/60/90-day engagement cycles",
      "Weekly strategy calls + async support",
      "Deliverables: roadmaps, playbooks, system reviews",
      "Access to operator network and resources",
      "Best for: Teams with execution capacity seeking strategic guidance",
    ],
  },
  {
    title: "Sprint Project",
    badge: "Focused",
    description:
      "Time-boxed engagement targeting a specific challenge or opportunity.",
    details: [
      "2–4 week fixed scope",
      "Defined outcomes and deliverables",
      "Intensive collaboration period",
      "Examples: GTM launch, ops audit, system design",
      "Best for: Specific problems requiring concentrated expertise",
    ],
  },
  {
    title: "Strategic Partnership",
    badge: "Selective",
    description:
      "Deep operational involvement with equity alignment for high-potential ventures.",
    details: [
      "Equity or hybrid (cash + equity) structure",
      "Active operator role alongside founders",
      "Long-term commitment (12+ months typical)",
      "Full integration into leadership and execution",
      "Best for: Ventures seeking a hands-on operating partner",
    ],
  },
];

const toolsAndStrategies = [
  "AI-assisted workflows",
  "Agentic coding & automation",
  "Dashboards & BI systems",
  "Process automation (n8n, Zapier)",
  "Systems design & architecture",
  "Funnels & distribution strategy",
  "Partnership development",
  "KPI cadence & accountability",
  "Team structure & hiring",
  "Product & ops execution",
];

export default function HowWePartnerPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Partnership Models"
        title="How We Partner"
        description="We don't believe in one-size-fits-all engagements. Every partnership is structured around outcomes, incentives, and execution responsibility."
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
            From first contact to ongoing execution, here's what working with us looks like.
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

      {/* Engagement Packages */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Engagement Types
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Ways to Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Each engagement is tailored to your stage, needs, and capacity. Here are the typical structures.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {engagementPackages.map((pkg) => (
            <Card
              key={pkg.title}
              className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
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
              <CardContent className="mt-auto">
                <ul className="space-y-2">
                  {pkg.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground/80 leading-relaxed"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
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
            Our Toolkit
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Bring
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Depending on your needs, we deploy a combination of tools, strategies, and systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolsAndStrategies.map((tool) => (
            <Badge
              key={tool}
              variant="outline"
              className="text-xs sm:text-sm py-1.5 px-3 border-border/60 text-muted-foreground/90"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* What We Don't Do */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Don't Do
          </h2>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground/80">
          <li>• No generic coaching or courses</li>
          <li>• No free consulting</li>
          <li>• No passive investing</li>
          <li>• No engagements without decision access</li>
          <li>• No high-volume client work</li>
          <li>• No one-off advice calls</li>
        </ul>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Explore a Partnership?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Start with an application. We'll review your situation and reach out if there's potential fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply/advisory"
            className={buttonVariants({ size: "lg", className: "px-8" })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-8",
            })}
          >
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
