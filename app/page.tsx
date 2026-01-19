import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Operator-Led Venture Studio & Advisory Firm
        </h1>
        <p className="text-xl text-muted-foreground">
          We partner with founders and operators to scale businesses through
          execution, systems, and strategic leadership — not just advice.
        </p>
        <p className="text-muted-foreground">
          From paid advisory to equity partnerships, we work where we can
          materially move outcomes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/apply/advisory" className={buttonVariants()}>
            Apply for Advisory
          </Link>
          <Link href="/apply/partnership" className={buttonVariants({ variant: "outline" })}>
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>

      {/* Anonymous Operator Track Record */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Proven Outcomes Across Multiple Ventures
        </h2>
        <p className="text-muted-foreground">
          We've been part of multiple businesses that scaled from zero to
          meaningful revenue through execution, distribution, and operational
          discipline. Company names are withheld due to confidentiality.
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Company A: $0 → $250M in revenue in 4 years</li>
          <li>Company B: $0 → $20M in revenue in 2 years</li>
          <li>Company C: $0 → $2M in revenue in 1 year</li>
          <li>Company D: $0 → $10M in revenue in 1.5 years</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Results reflect contributions as part of broader teams. Outcomes shown
          for context, not guarantees.
        </p>
      </section>
    </div>
  );
}
