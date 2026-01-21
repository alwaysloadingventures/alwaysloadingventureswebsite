import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Venture Studio",
  description:
    "We build and scale businesses alongside founders — not from the sidelines. Hands-on, operator-led collaboration with shared responsibility for outcomes.",
  openGraph: {
    title: "Venture Studio | AlwaysLoading Ventures",
    description:
      "Hands-on, operator-led collaboration with shared responsibility for outcomes.",
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
  VentureBlueprintViz,
  DistributionEngineViz,
  ScaleInfrastructureViz,
} from "@/components/illustrations/venture-studio";

const showcaseItems = [
  {
    title: "Venture Blueprint",
    caption: "Structured foundations across product, operations, and distribution before scaling begins.",
    component: <VentureBlueprintViz />,
  },
  {
    title: "Distribution Engine",
    caption: "Growth systems designed to compound — not spike and decay.",
    component: <DistributionEngineViz />,
  },
  {
    title: "Scale Infrastructure",
    caption: "Systems that support growth without breaking compliance, performance, or trust.",
    component: <ScaleInfrastructureViz />,
  },
];

const buildingTogetherPrinciples = [
  {
    title: "Shared Execution Responsibility",
    description:
      "We don't advise from the sidelines. We take ownership of outcomes alongside you — building, shipping, and iterating together.",
  },
  {
    title: "Systems-First Thinking",
    description:
      "We prioritize repeatable systems over one-off wins. Processes, automation, and infrastructure that compound over time.",
  },
  {
    title: "Operator Involvement",
    description:
      "Strategy, operations, growth, product, and tooling — we work across the stack wherever execution leverage is highest.",
  },
  {
    title: "Built for Durability",
    description:
      "No short-term hacks or growth-at-all-costs. We focus on sustainable models that work in constrained, regulated, or rules-based environments.",
  },
];

const collaborationSteps = [
  {
    step: "01",
    title: "Application & Fit",
    description:
      "Submit a brief application outlining your business, stage, and goals. We review every submission and reach out if there's potential alignment.",
  },
  {
    step: "02",
    title: "Operator Diagnostic",
    description:
      "For qualified opportunities, we conduct a deeper review of your operations, metrics, and blockers. We identify where we can add the most value.",
  },
  {
    step: "03",
    title: "30/60/90 Execution Plan",
    description:
      "We co-create a structured plan with clear deliverables, ownership, and success metrics. No ambiguity — aligned expectations from day one.",
  },
  {
    step: "04",
    title: "Weekly Operating Cadence",
    description:
      "Regular syncs, async collaboration, and hands-on execution. We work alongside your team in a structured rhythm — not sporadic check-ins.",
  },
  {
    step: "05",
    title: "KPI Dashboard & Decision Framework",
    description:
      "Shared visibility into metrics that matter. Data-driven decisions with clear accountability and fast feedback loops.",
  },
  {
    step: "06",
    title: "Ongoing Iteration & Scaling",
    description:
      "As the venture matures, we adapt our involvement. Regular checkpoints to assess progress, adjust strategy, and scale what's working.",
  },
];

const whatWeContribute = [
  "Execution leadership across strategy, ops, and growth",
  "Systems design and process automation",
  "AI-assisted workflows and agentic coding",
  "Internal tooling and admin systems",
  "BI/KPI dashboards and reporting cadence",
  "Funnel architecture and distribution systems",
  "Operational discipline in constrained environments",
  "Hiring guidance, incentive design, and accountability systems",
];

const forYouIf = [
  "You want an operator partner, not just advice or capital",
  "You're open to metrics, accountability, and fast iteration",
  "You have domain expertise and hustle — and want execution leverage",
  "You're building in trading tech, prediction markets, digital products, or regulated platforms",
  "You value systems over heroics, outcomes over activity",
];

const notForYouIf = [
  "You're at the idea stage without validated demand",
  "You're looking for passive capital or hands-off involvement",
  "You want to maintain full control without shared decision-making",
  "You're not ready to commit to transparency and metric visibility",
  "You're looking for quick wins rather than sustainable growth",
];

const alignmentPrinciples = [
  {
    title: "Ownership Reflects Contribution",
    description:
      "Equity and responsibility go together. We structure partnerships where everyone's incentives are aligned with the venture's success.",
  },
  {
    title: "Alignment Over Speed",
    description:
      "We take time to ensure fit before committing. Rushing into the wrong partnership helps no one. Chemistry and values matter.",
  },
  {
    title: "Transparency Required",
    description:
      "We need real visibility into metrics, challenges, and decisions. If we can't see what's happening, we can't help move the needle.",
  },
];

export default function VentureStudioPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <ResizableShowcase
        title="Build With Us"
        subtitle="Co-building ventures with operators in the room."
        chips={["Blueprint", "Distribution", "Scale"]}
        items={showcaseItems}
        left={
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
                Build With Us
              </p>
              <Badge variant="secondary" className="text-[11px]">Venture Studio</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
              Venture Studio
            </h1>
            <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-xl">
              We build and scale businesses alongside founders — not from the sidelines. This is hands-on, operator-led collaboration.
            </p>
            <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-xl">
              We work with a very small number of ventures at a time — typically 1-2 active projects — because this model requires real commitment. When we say yes, we're all in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/apply/partnership"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto px-8",
                })}
              >
                Apply for Partnership
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
          </div>
        }
      />

      <Separator className="bg-border/40" />

      {/* What Building Together Means */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            The Model
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What "Building Together" Means
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            This isn't consulting with equity. It's a true partnership where we share responsibility for outcomes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {buildingTogetherPrinciples.map((item) => (
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

      {/* How Collaboration Works */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            The Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            How Collaboration Works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            From first conversation to ongoing execution. We move deliberately to ensure fit, then fast once we're aligned.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborationSteps.map((step) => (
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

      {/* What We Contribute */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Operator Toolkit
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What We Contribute
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            In Venture Studio engagements, we actively deploy execution capacity across these areas — not just advice.
          </p>
        </div>

        <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardContent className="pt-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              {whatWeContribute.map((item, i) => (
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

        <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-2xl">
          The specific mix depends on the venture's needs and stage. We focus where execution leverage is highest.
        </p>
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
            The Venture Studio model works best when there's strong alignment on values, pace, and working style.
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

      {/* Expectations & Alignment */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Expectations & Alignment
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Successful partnerships start with shared understanding. Here's how we think about working together.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {alignmentPrinciples.map((item) => (
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
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Interested in Building Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          If you're working on something meaningful and want an operator partner — not just advice — we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply/partnership"
            className={buttonVariants({ size: "lg", className: "px-8" })}
          >
            Apply for Strategic Partnership
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
