import { PageHeader } from "@/components/layout-primitives";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle className="text-lg">{pillar.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {pillar.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
