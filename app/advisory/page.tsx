import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { PageHeader } from "@/components/layout-primitives";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const whoItsFor = [
  {
    title: "Growth-Stage Companies",
    description:
      "You've found product-market fit and need help scaling operations, distribution, or team without losing what's working.",
  },
  {
    title: "Founders Wearing Too Many Hats",
    description:
      "You're stretched thin and need an experienced operator to help prioritize, systematize, and execute on key initiatives.",
  },
  {
    title: "Teams Facing Inflection Points",
    description:
      "You're navigating a pivot, expansion, or operational overhaul and need strategic guidance paired with execution support.",
  },
  {
    title: "Operators Ready to Level Up",
    description:
      "You have the team and resources but need outside perspective and proven frameworks to accelerate progress.",
  },
];

const whatWeDo = [
  "Strategy development and execution planning",
  "Operational systems design and implementation",
  "Growth and distribution strategy",
  "Product roadmap and prioritization",
  "KPI frameworks and accountability systems",
  "Team structure and hiring guidance",
  "Process automation and AI integration",
  "Go-to-market planning and execution",
];

const whatWeDontDo = [
  "Generic business coaching",
  "One-off advice calls",
  "Passive consulting (we expect to be hands-on)",
  "Work without decision-making access",
  "High-volume, low-touch engagements",
  "Engagements where we can't move the needle",
];

const typicalCadence = [
  {
    title: "Weekly Syncs",
    description: "60-90 minute strategy and execution calls to review progress, unblock issues, and align on priorities.",
  },
  {
    title: "Async Support",
    description: "Ongoing access via Slack/email for quick questions, document reviews, and real-time guidance.",
  },
  {
    title: "Deliverables",
    description: "Roadmaps, playbooks, system designs, and frameworks tailored to your specific challenges.",
  },
  {
    title: "Monthly Reviews",
    description: "Deeper dives on metrics, progress against KPIs, and strategic adjustments as needed.",
  },
];

const successLooksLike = [
  "Clear systems that run without constant founder attention",
  "Measurable progress against defined KPIs",
  "Team that executes with increasing autonomy",
  "Scalable processes that don't break as you grow",
  "Founder time freed up for highest-leverage activities",
  "Confidence in strategic direction and priorities",
];

export default function AdvisoryPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Work With Us"
        title="Advisory"
        description="Our advisory work is built for operators who want results, not theory. Engagements are outcome-driven, structured, and execution-focused."
      />

      {/* Who It's For */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Ideal Clients
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Who This Is For
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whoItsFor.map((item) => (
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

      {/* What We Do / Don't Do */}
      <section className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
              What We Do
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground/80">
              {whatWeDo.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
              What We Don't Do
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground/80">
              {whatWeDontDo.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Typical Cadence */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Typical Engagement Cadence
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {typicalCadence.map((item) => (
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

      {/* What Success Looks Like */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Outcomes
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What Success Looks Like
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We measure success by tangible outcomes, not activity. Here's what our best engagements produce:
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground/80">
          {successLooksLike.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Start with an application. We'll review your situation and reach out if there's potential fit.
        </p>
        <Link
          href="/apply/advisory"
          className={buttonVariants({ size: "lg", className: "px-10" })}
        >
          Apply for Advisory
        </Link>
      </section>
    </div>
  );
}
