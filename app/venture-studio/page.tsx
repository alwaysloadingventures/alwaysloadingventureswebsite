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
    title: "First-Time Founders",
    description:
      "You have domain expertise and hustle, but need an experienced operator to help structure, scale, and execute alongside you.",
  },
  {
    title: "Technical Founders",
    description:
      "You can build the product, but need help with go-to-market, operations, distribution, and the business side of scaling.",
  },
  {
    title: "Idea-Stage Entrepreneurs",
    description:
      "You have a validated concept and early traction, but need hands-on help turning it into a real, scalable business.",
  },
  {
    title: "Existing Operators",
    description:
      "You're running something that works but want a co-builder to help accelerate growth and bring complementary skills.",
  },
];

const whatCollaborationLooksLike = [
  "Weekly strategy and execution syncs",
  "Shared ownership of key outcomes and KPIs",
  "Direct involvement in product, ops, and growth decisions",
  "Access to our systems, playbooks, and network",
  "Async collaboration via shared tools and documentation",
  "Transparent communication about what's working and what isn't",
];

const expectations = [
  {
    title: "From You",
    items: [
      "Full commitment to the venture (this is your primary focus)",
      "Openness to feedback and iteration",
      "Willingness to do the hard work — we execute together",
      "Transparency about challenges and blockers",
      "Decision-making partnership, not delegation",
    ],
  },
  {
    title: "From Us",
    items: [
      "Hands-on operational involvement, not just advice",
      "Systems, playbooks, and frameworks that work",
      "Network access and introductions where helpful",
      "Honest assessment of what's working and what isn't",
      "Long-term thinking aligned with your success",
    ],
  },
];

export default function VentureStudioPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Build With Us"
        title="Venture Studio"
        description="Our venture studio exists to build and scale businesses, not just advise them. We focus on internal ventures, co-built companies, and platform extensions where execution drives value."
      />

      {/* What It Means */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            The Model
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What Building With Us Means
          </h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7] max-w-3xl">
          <p>
            A venture studio partnership is different from advisory. We're not on the sidelines — we're in the trenches with you, building the company together.
          </p>
          <p>
            This means shared ownership, shared risk, and shared upside. We take equity in exchange for deep operational involvement: strategy, systems, distribution, product, and execution.
          </p>
          <p>
            We're selective because this model requires significant commitment from both sides. When we say yes, it's because we believe in the opportunity and the team — and we're ready to do the work.
          </p>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Who It's For */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Ideal Partners
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

      {/* How We Decide */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Selection
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            How We Decide
          </h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7] max-w-3xl">
          <p>
            We evaluate opportunities based on market potential, founder-market fit, early traction or validation, and alignment with our operational strengths.
          </p>
          <p>
            More importantly, we assess the working relationship. Can we collaborate effectively? Are we aligned on values, pace, and expectations? This is a partnership, and chemistry matters.
          </p>
          <p>
            We work with a very limited number of ventures at a time — typically 1-2 active studio projects. This ensures we can give each one the attention it deserves.
          </p>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* What Collaboration Looks Like */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Working Together
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            What Collaboration Looks Like
          </h2>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-muted-foreground/80">
          {whatCollaborationLooksLike.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <Separator className="bg-border/40" />

      {/* Expectations */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Mutual Commitment
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Expectations
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {expectations.map((section) => (
            <Card
              key={section.title}
              className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
            >
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground/80 leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Timelines & Ownership */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Structure
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Timelines & Ownership
          </h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground/80 leading-[1.7] max-w-3xl">
          <p>
            <strong className="text-foreground">Typical commitment:</strong> 12-24 months of active building, with ongoing involvement as the venture matures.
          </p>
          <p>
            <strong className="text-foreground">Ownership structure:</strong> Equity split is negotiated case-by-case based on contribution, stage, and risk. We aim for fair alignment where everyone wins when the venture succeeds.
          </p>
          <p>
            <strong className="text-foreground">Decision-making:</strong> We operate as partners. Major decisions are made together. Day-to-day execution is divided based on strengths and capacity.
          </p>
          <p className="text-xs text-muted-foreground/60 italic">
            Note: This is a high-level overview. Specific terms are discussed during the partnership exploration process.
          </p>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* CTA */}
      <section className="text-center space-y-6 py-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Interested in Building Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          If you're working on something meaningful and want a hands-on partner, we'd love to hear from you.
        </p>
        <Link
          href="/apply/partnership"
          className={buttonVariants({ size: "lg", className: "px-10" })}
        >
          Apply for Strategic Partnership
        </Link>
      </section>
    </div>
  );
}
