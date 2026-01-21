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

const advisoryReasons = [
  "You need execution support, not just advice — we work alongside your team",
  "You want structured accountability with clear KPIs and deliverables",
  "You're ready to invest in getting expert guidance (this isn't free consulting)",
  "You have a team that can implement — we help you prioritize and systematize",
  "You're facing a specific challenge: growth, ops, product, or systems",
  "You want access to proven frameworks and playbooks, not generic templates",
  "You value direct, honest feedback over comfortable validation",
  "You're open to AI and automation to accelerate execution",
  "You understand advisory is a partnership, not a service relationship",
  "You're building something meaningful and want a thought partner invested in your success",
];

const partnershipReasons = [
  "You want a hands-on operating partner, not a passive investor or advisor",
  "You're comfortable with equity-based alignment — we succeed when you succeed",
  "You're at an early or growth stage where operational help moves the needle",
  "You want someone in the trenches: strategy, product, ops, and distribution",
  "You're open to deep collaboration — weekly syncs, shared decisions, real accountability",
  "You understand this is selective: we work with 1-2 studio ventures at a time",
  "You're building in a space where we can add operational value",
  "You're ready for a long-term commitment (12+ months of active building)",
  "You value transparency and direct communication, even when it's uncomfortable",
  "You're not looking for capital alone — you want execution capacity and expertise",
];

export default function ApplyPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Get Started"
        title="Apply"
        description="We work with a limited number of companies at a time. Applications help us determine fit before any conversation."
      />

      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/80 max-w-2xl">
        Choose the path that best reflects what you're looking for. Not sure? Start with Advisory — it's easier to expand the relationship than to unwind a partnership.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardHeader>
            <CardTitle className="text-xl">Advisory</CardTitle>
            <CardDescription className="leading-relaxed">
              Hands-on executive advisory for teams ready to implement.
              Structured engagements with clear deliverables.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <Link
              href="/apply/advisory"
              className={buttonVariants({ size: "lg", className: "w-full" })}
            >
              Apply for Advisory
            </Link>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardHeader>
            <CardTitle className="text-xl">Strategic Partnership</CardTitle>
            <CardDescription className="leading-relaxed">
              Equity-based partnerships for ventures where we take an active
              operational role alongside founders.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <Link
              href="/apply/partnership"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full",
              })}
            >
              Apply for Strategic Partnership
            </Link>
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-border/40" />

      {/* 10 Reasons to Apply */}
      <section className="space-y-12">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Is This Right For You?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            10 Reasons to Apply
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            These aren't sales pitches — they're honest expectations. If most of these resonate, we might be a good fit.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Advisory Reasons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              For Advisory
            </h3>
            <ol className="space-y-3">
              {advisoryReasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-muted-foreground/80 leading-relaxed"
                >
                  <span className="text-primary font-mono text-xs mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {reason}
                </li>
              ))}
            </ol>
          </div>

          {/* Partnership Reasons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              For Strategic Partnership
            </h3>
            <ol className="space-y-3">
              {partnershipReasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-muted-foreground/80 leading-relaxed"
                >
                  <span className="text-primary font-mono text-xs mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {reason}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Final CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Get Started?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Applications take 5-10 minutes. We review every submission and respond within a week.
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
