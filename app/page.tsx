import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-10 shadow-sm">
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
          From paid advisory to equity partnerships, we work where we can
          materially move outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link href="/apply/advisory" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
            Apply for Advisory
          </Link>
          <Link href="/apply/partnership" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}>
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>

      {/* Anonymous Operator Track Record */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Proven Outcomes Across Multiple Ventures
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            We've been part of multiple businesses that scaled from zero to
            meaningful revenue through execution, distribution, and operational
            discipline. Company names are withheld due to confidentiality.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Company A: $0 → $250M in revenue in 4 years</li>
            <li>Company B: $0 → $20M in revenue in 2 years</li>
            <li>Company C: $0 → $2M in revenue in 1 year</li>
            <li>Company D: $0 → $10M in revenue in 1.5 years</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Results reflect contributions as part of broader teams. Outcomes shown
            for context, not guarantees.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
