import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <h1>Operator-Led Venture Studio & Advisory Firm</h1>
        <p>
          We partner with founders and operators to scale businesses through
          execution, systems, and strategic leadership — not just advice.
        </p>
        <p>
          From paid advisory to equity partnerships, we work where we can
          materially move outcomes.
        </p>
        <div>
          <Link href="/apply/advisory">Apply for Advisory</Link>
          <Link href="/apply/partnership">Apply for Strategic Partnership</Link>
        </div>
      </section>

      {/* Anonymous Operator Track Record */}
      <section>
        <h2>Proven Outcomes Across Multiple Ventures</h2>
        <p>
          We've been part of multiple businesses that scaled from zero to
          meaningful revenue through execution, distribution, and operational
          discipline. Company names are withheld due to confidentiality.
        </p>
        <ul>
          <li>Company A: $0 → $250M in revenue in 4 years</li>
          <li>Company B: $0 → $20M in revenue in 2 years</li>
          <li>Company C: $0 → $2M in revenue in 1 year</li>
          <li>Company D: $0 → $10M in revenue in 1.5 years</li>
        </ul>
        <p>
          Results reflect contributions as part of broader teams. Outcomes shown
          for context, not guarantees.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory Firm</p>
        <p>
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </footer>
    </main>
  );
}
