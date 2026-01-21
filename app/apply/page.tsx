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

const advisoryReasons = [
  "You want execution clarity — not more advice that sits in a deck",
  "You need systems installed: KPIs, dashboards, reporting cadence",
  "You're ready for structured accountability with clear deliverables",
  "You have a team that can implement and need strategic leverage",
  "You want honest feedback, even when it's uncomfortable",
  "You're facing specific challenges: growth, ops, product, or distribution",
  "You value an operator's perspective over consultant frameworks",
  "You're open to AI and automation to accelerate execution",
  "You understand advisory is a partnership, not a service relationship",
  "You're building something meaningful and want measurable progress",
];

const partnershipReasons = [
  "You want an operator in the trenches, not a passive investor",
  "You're comfortable with equity-based alignment — we succeed when you succeed",
  "You need hands-on help across strategy, product, ops, and growth",
  "You're open to deep collaboration: weekly syncs, shared decisions, real accountability",
  "You understand this is selective — we work with 1-2 ventures at a time",
  "You're building in a space where operational execution moves the needle",
  "You're ready for a long-term commitment (12+ months of active building)",
  "You value transparency and direct communication",
  "You want execution capacity and expertise, not just capital",
  "You're looking for a co-builder who takes shared responsibility for outcomes",
];

export default function ApplyPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Get Started"
        title="Apply to Work With Us"
        description="We work with a limited number of companies at a time. Applications help us confirm fit before any conversation."
      />

      {/* Intro Context */}
      <section className="space-y-4 max-w-3xl">
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          We're selective because we go deep. Every engagement gets real attention — which means we can only work with a small number of companies at any given time.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/85 leading-[1.7]">
          Choose the path that best reflects what you're looking for. Not sure? Start with Advisory — it's easier to expand the relationship than to unwind a partnership.
        </p>
      </section>

      {/* Two Application Paths */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Advisory</CardTitle>
              <Badge variant="secondary" className="text-[10px]">
                Paid Engagement
              </Badge>
            </div>
            <CardDescription className="leading-relaxed">
              Hands-on, operator-grade advisory for founders and leadership teams ready to implement. Structured engagements with clear deliverables, KPIs, and accountability.
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
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Strategic Partnership</CardTitle>
              <Badge variant="secondary" className="text-[10px]">
                Equity-Based
              </Badge>
            </div>
            <CardDescription className="leading-relaxed">
              Deep operational involvement with equity alignment. We take an active role alongside founders — building, shipping, and scaling together.
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

      {/* Strategic Partnership Note */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Important Note
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            About Strategic Partnerships
          </h2>
        </div>

        <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
          <CardContent className="pt-6 space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7]">
            <p>
              Strategic partnerships involve equity or hybrid (cash + equity) structures. This is not passive investing — it's active operational involvement alongside founders.
            </p>
            <p>
              We take shared responsibility for outcomes: strategy, systems, growth, product, and operations. In return, we expect transparency, decision-making access, and long-term alignment.
            </p>
            <p>
              If you're looking for capital without operational involvement, or prefer to maintain full control without collaboration, this isn't the right fit. We work best with founders who want a true operating partner.
            </p>
          </CardContent>
        </Card>
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
