import Link from "next/link";
import { PageHeader } from "@/components/layout-primitives";
import { buttonVariants } from "@/lib/button-variants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    title: "Advisory & Consulting",
    description:
      "Hands-on executive advisory across strategy, operations, growth, product, and systems. Built for teams ready to implement, not observe.",
  },
  {
    title: "Venture Studio",
    description:
      "We incubate, build, and scale ventures internally and with aligned partners, applying proven systems across product, operations, and distribution.",
  },
  {
    title: "Strategic Equity Partnerships",
    description:
      "In select cases, we take equity in exchange for executive leadership and operational execution. Capital may be involved — execution always is.",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Our Focus"
        title="What We Do"
        description="We operate at the intersection of strategy, execution, and ownership. Engagements are structured around where we can create real leverage."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader>
              <CardTitle className="text-lg">{pillar.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {pillar.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Separator className="bg-border/40" />

      {/* CTA Section */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          Whether you need advisory support or a strategic partner, we'd love to hear about what you're building.
        </p>
        <Link
          href="/apply"
          className={buttonVariants({ size: "lg", className: "px-10" })}
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
