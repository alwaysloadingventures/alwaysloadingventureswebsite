import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const provenOutcomes = [
  { label: "Company A", result: "$0 → $250M", timeframe: "4 years" },
  { label: "Company B", result: "$0 → $20M", timeframe: "2 years" },
  { label: "Company C", result: "$0 → $2M", timeframe: "1 year" },
  { label: "Company D", result: "$0 → $10M", timeframe: "1.5 years" },
];

const toolbox = [
  "Growth Strategy",
  "Product Development",
  "Operations",
  "Distribution",
  "Systems Design",
  "Executive Leadership",
  "Go-to-Market",
  "Team Building",
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section with spotlight glow */}
      <section className="relative">
        {/* Spotlight glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-card/50 p-6 sm:p-10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <p className="uppercase text-xs tracking-widest text-muted-foreground">
              Operator-Led
            </p>
            <Badge variant="secondary">Venture Studio</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Venture Studio & Advisory Firm
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
            We partner with founders and operators to scale businesses through
            execution, systems, and strategic leadership — not just advice.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We leverage AI-assisted operations and deep operator experience to
            drive outcomes faster. From paid advisory to equity partnerships, we
            work where we can materially move outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/apply/advisory"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Apply for Advisory
            </Link>
            <Link
              href="/apply/partnership"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Apply for Strategic Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Outcomes - 4 mini cards */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="uppercase text-xs tracking-widest text-muted-foreground">
            Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Proven Outcomes Across Multiple Ventures
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            We've been part of multiple businesses that scaled from zero to
            meaningful revenue. Company names withheld due to confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {provenOutcomes.map((outcome) => (
            <Card key={outcome.label} size="sm">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground">{outcome.label}</p>
                <p className="text-xl font-semibold text-primary">
                  {outcome.result}
                </p>
                <p className="text-sm text-muted-foreground">
                  in {outcome.timeframe}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Results reflect contributions as part of broader teams. Outcomes shown
          for context, not guarantees.
        </p>
      </section>

      {/* Engagements - 2 big cards */}
      <section className="relative space-y-8">
        {/* Spotlight glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        </div>

        <div className="space-y-2">
          <p className="uppercase text-xs tracking-widest text-muted-foreground">
            How We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Engagement Models
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Advisory</CardTitle>
              <CardDescription className="leading-relaxed">
                Hands-on executive advisory for teams ready to implement.
                Structured engagements with clear deliverables across strategy,
                operations, growth, product, and systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link
                href="/apply/advisory"
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                Apply for Advisory
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Strategic Partnership</CardTitle>
              <CardDescription className="leading-relaxed">
                Equity-based partnerships for ventures where we take an active
                operational role alongside founders. Capital may be involved —
                execution always is.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
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
      </section>

      {/* Toolbox */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="uppercase text-xs tracking-widest text-muted-foreground">
            What We Bring
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Operator Toolbox
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolbox.map((tool) => (
            <Badge key={tool} variant="outline" className="text-sm py-1.5 px-3">
              {tool}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      {/* Final CTA */}
      <section className="text-center space-y-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Ready to Scale?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We work with a limited number of companies at a time. Applications
          help us determine fit before any conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply/advisory"
            className={buttonVariants({
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
