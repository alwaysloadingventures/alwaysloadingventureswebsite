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

const trackRecord = [
  {
    label: "Company A",
    industry: "Fintech",
    result: "$0 → $250M revenue",
    timeframe: "4 years",
    role: "Operational leadership across growth, product, and systems",
  },
  {
    label: "Company B",
    industry: "E-commerce",
    result: "$0 → $20M revenue",
    timeframe: "2 years",
    role: "Go-to-market strategy and distribution systems",
  },
  {
    label: "Company C",
    industry: "SaaS",
    result: "$0 → $2M revenue",
    timeframe: "1 year",
    role: "Product development and early-stage operations",
  },
  {
    label: "Company D",
    industry: "Marketplace",
    result: "$0 → $10M revenue",
    timeframe: "1.5 years",
    role: "Growth systems and team building",
  },
];

const philosophy = [
  {
    title: "Systems Beat Hustle",
    description:
      "Sustainable growth comes from repeatable systems, not heroic effort. We build infrastructure that scales — processes, playbooks, and automation that compound over time.",
  },
  {
    title: "Distribution Is Half the Battle",
    description:
      "A great product with poor distribution loses to a good product with great distribution. We obsess over channels, funnels, and go-to-market as much as product.",
  },
  {
    title: "Incentives Drive Everything",
    description:
      "People respond to incentives. We design compensation, equity, and accountability structures that align everyone toward shared outcomes.",
  },
  {
    title: "Ownership Reflects Contribution",
    description:
      "We believe in skin in the game. When we partner deeply, we take equity. When we advise, we expect to be held accountable to results.",
  },
];

const technologyApproach = [
  "AI-assisted workflows for faster execution",
  "Agentic coding to accelerate development",
  "Automation (n8n, Zapier) to eliminate manual work",
  "Custom dashboards and BI for real-time visibility",
  "Modern tooling to stay lean and move fast",
  "Systematic experimentation and iteration",
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Who We Are"
        title="About AlwaysLoading Ventures"
        description="We're operators who have built and scaled businesses from zero. Now we partner with founders who want execution, not just advice."
      />

      {/* The Story */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Why AlwaysLoading Exists
          </h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7] max-w-3xl">
          <p>
            AlwaysLoading Ventures was born from a simple observation: most founders don't need more advice — they need someone who can execute alongside them.
          </p>
          <p>
            After years of building and scaling companies, we realized the most valuable thing we could offer wasn't strategy decks or frameworks. It was rolling up our sleeves and doing the work: building systems, shipping products, fixing operations, and driving growth.
          </p>
          <p>
            We created AlwaysLoading to formalize that approach. We work with a small number of companies where we can make a real difference — through advisory, venture studio partnerships, or hands-on operational roles.
          </p>
          <p>
            The name reflects our mindset: always in motion, always building, always improving. We don't do "done." We do progress.
          </p>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Track Record */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Operator Track Record
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We've been part of multiple businesses that scaled from zero to significant revenue. Company names withheld due to confidentiality.
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
        <p className="text-[11px] text-muted-foreground/50 leading-relaxed">
          Results reflect contributions as part of broader teams. Outcomes shown for context, not guarantees.
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
            Our Philosophy
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {philosophy.map((item) => (
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

      {/* Technology Approach */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Technology-Forward Approach
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We leverage modern tools and AI to move faster and do more with less. Technology isn't a nice-to-have — it's how we stay competitive.
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground/80">
          {technologyApproach.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Want to Work With Us?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          We're selective about who we work with, but always open to meeting ambitious founders and operators.
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
