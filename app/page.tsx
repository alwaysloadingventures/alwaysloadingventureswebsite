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
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section with spotlight glow */}
      <section className="relative">
        {/* Spotlight glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 blur-[120px] rounded-full" />
        </div>

        <div className="space-y-6 rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-10 backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-3">
            <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
              Operator-Led
            </p>
            <Badge variant="secondary" className="text-[11px]">Venture Studio</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
            Venture Studio & Advisory Firm
          </h1>
          <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-2xl">
            We partner with founders and operators to scale businesses through
            execution, systems, and strategic leadership — not just advice.
          </p>
          <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-2xl">
            We leverage AI-assisted operations and deep operator experience to
            drive outcomes faster. From paid advisory to equity partnerships, we
            work where we can materially move outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href="/apply/advisory"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Advisory
            </Link>
            <Link
              href="/apply/partnership"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Strategic Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Outcomes - 4 mini cards */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Proven Outcomes Across Multiple Ventures
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We've been part of multiple businesses that scaled from zero to
            meaningful revenue. Company names withheld due to confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {provenOutcomes.map((outcome) => (
            <Card key={outcome.label} size="sm" className="border-border/50 shadow-sm bg-card/60">
              <CardContent className="pt-4 space-y-1">
                <p className="text-[11px] text-muted-foreground/60 tracking-wide uppercase">{outcome.label}</p>
                <p className="text-lg sm:text-xl font-semibold text-primary tracking-tight">
                  {outcome.result}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/70">
                  in {outcome.timeframe}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-[11px] text-muted-foreground/50 leading-relaxed">
          Results reflect contributions as part of broader teams. Outcomes shown
          for context, not guarantees.
        </p>
      </section>

      {/* Engagements - 2 big cards */}
      <section className="relative space-y-6">
        {/* Spotlight glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary/6 blur-[140px] rounded-full" />
        </div>

        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Engagement Models
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <Card className="flex flex-col border-border/50 shadow-sm bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg sm:text-xl tracking-tight">Advisory</CardTitle>
              <CardDescription className="leading-[1.6] text-muted-foreground/80">
                Hands-on executive advisory for teams ready to implement.
                Structured engagements with clear deliverables across strategy,
                operations, growth, product, and systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
              <Link
                href="/apply/advisory"
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                Apply for Advisory
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-border/50 shadow-sm bg-card/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg sm:text-xl tracking-tight">Strategic Partnership</CardTitle>
              <CardDescription className="leading-[1.6] text-muted-foreground/80">
                Equity-based partnerships for ventures where we take an active
                operational role alongside founders. Capital may be involved —
                execution always is.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
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
      <section className="space-y-5">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            What We Bring
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Operator Toolbox
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolbox.map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs sm:text-sm py-1.5 px-3 border-border/60 text-muted-foreground/90">
              {tool}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Final CTA */}
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Scale?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          We work with a limited number of companies at a time. Applications
          help us determine fit before any conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/apply/advisory"
            className={buttonVariants({
              size: "lg",
              className: "w-full sm:w-auto px-10",
            })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto px-10",
            })}
          >
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
