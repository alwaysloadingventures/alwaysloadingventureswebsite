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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const advisoryCadence = [
  {
    title: "Weekly or Bi-Weekly Operating Calls",
    description:
      "60-90 minute sessions to review progress, unblock issues, and align on priorities. No status theater — real working sessions.",
  },
  {
    title: "Shared KPI Scoreboard",
    description:
      "We track what matters together. Metrics visibility ensures we're aligned on progress and can course-correct quickly.",
  },
  {
    title: "Clear Priorities and Owners",
    description:
      "Every cycle has defined focus areas with clear ownership. No ambiguity about who's doing what and by when.",
  },
  {
    title: "Async Support for Decisions",
    description:
      "Slack/email access for quick questions, document reviews, and real-time guidance between calls.",
  },
];

const first30Days = [
  "Operator diagnostic and context gathering",
  "KPI visibility and dashboard setup",
  "Bottleneck identification and prioritization",
  "Initial focus areas defined with clear owners",
];

const first60Days = [
  "Core systems installed and running",
  "Funnel, pricing, or ops improvements underway",
  "Reporting cadence established",
  "First measurable wins visible",
];

const first90Days = [
  "Execution rhythm fully established",
  "Key metrics trending in the right direction",
  "Focus narrowed to highest-leverage areas",
  "Team operating with increasing autonomy",
];

const whatWeHelpWith = [
  "Growth strategy and monetization systems",
  "Funnel architecture and conversion optimization",
  "Operational systems and process design",
  "KPI/BI dashboards and reporting cadence",
  "Internal tooling, automation, and AI-assisted workflows",
  "Distribution strategy and partnership development",
  "Team structure, incentives, and accountability systems",
  "Pricing strategy and offer structure optimization",
];

const forYouIf = [
  "You want measurable progress, not just advice",
  "You're willing to operate with metrics and accountability",
  "You have execution capacity and need strategic leverage",
  "You're building in trading tech, prediction markets, digital products, or regulated platforms",
  "You're ready to move fast and iterate based on data",
];

const notForYouIf = [
  "You want free consulting or \"pick your brain\" calls",
  "You're looking for brainstorming without implementation",
  "You're unwilling to share metrics or grant decision access",
  "You want passive advice without hands-on involvement",
  "You're not ready to commit to a structured engagement",
];

const successOutcomes = [
  {
    title: "Clearer Decisions",
    description:
      "Frameworks and data that make strategic choices obvious, not agonizing.",
  },
  {
    title: "Faster Execution",
    description:
      "Systems and processes that let your team ship faster with fewer blockers.",
  },
  {
    title: "Fewer Bottlenecks",
    description:
      "Identified and resolved constraints that were slowing growth or burning resources.",
  },
  {
    title: "Systems That Scale",
    description:
      "Infrastructure that grows with the business instead of breaking under pressure.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Work With Us"
        title="Advisory"
        description="Operator-grade advisory for founders and leadership teams who want execution clarity, systems, and measurable progress — not theory or frameworks that sit in a deck."
      />

      {/* Intro Context */}
      <section className="space-y-4 max-w-3xl">
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          This is hands-on advisory for operators who are ready to implement. We work alongside you — diagnosing bottlenecks, installing systems, and driving measurable outcomes across growth, operations, and product.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          We've scaled trading platforms, prediction markets, digital subscription businesses, and regulated gaming operators. We bring that experience to every engagement — not generic playbooks, but systems that work in complex, constrained environments.
        </p>
      </section>

      <Separator className="bg-border/40" />

      {/* What Advisory Looks Like */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What Advisory Looks Like
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Structured, accountable, and execution-focused. Here's the typical cadence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {advisoryCadence.map((item) => (
            <Card
              key={item.title}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* First 30/60/90 Days */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            The Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            First 30 / 60 / 90 Days
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Realistic expectations for what we accomplish together. Every engagement is different, but this is the typical arc.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="w-fit text-[10px]">
                First 30 Days
              </Badge>
              <CardTitle className="text-lg">Diagnostic & Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {first30Days.map((item, i) => (
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
              <Badge variant="secondary" className="w-fit text-[10px]">
                Days 31-60
              </Badge>
              <CardTitle className="text-lg">Systems & Momentum</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {first60Days.map((item, i) => (
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
              <Badge variant="secondary" className="w-fit text-[10px]">
                Days 61-90
              </Badge>
              <CardTitle className="text-lg">Rhythm & Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {first90Days.map((item, i) => (
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

        <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-2xl">
          Timelines vary based on complexity and team capacity. Some teams move faster; others need more foundation work. We adapt to what's real.
        </p>
      </section>

      <Separator className="bg-border/40" />

      {/* What We Help With */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Execution Areas
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Help With
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Advisory engagements typically cover a combination of these areas, depending on your stage and needs.
          </p>
        </div>

        <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardContent className="pt-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              {whatWeHelpWith.map((item, i) => (
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
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Advisory works best when there's strong alignment on expectations and working style.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary/90">
                This is for you if...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {forYouIf.map((item, i) => (
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
                This is not for you if...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {notForYouIf.map((item, i) => (
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

      {/* What Success Looks Like */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Outcomes
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What Success Looks Like
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We measure success by tangible outcomes, not hours logged or advice given.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {successOutcomes.map((item) => (
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

      {/* CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Start with an application. We review every submission and reach out if there's potential fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply/advisory"
            className={buttonVariants({ size: "lg", className: "px-8" })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/how-we-partner"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-8",
            })}
          >
            Learn How We Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
